import markerWrapper from "@assets/icons/markerwrapper_template.svg?raw";
import { GlobalData, GlobalMapData, MarkerData, MarkerType } from "@localtypes/Map";
import { useAppSelector } from "@store/hooks";
import L from "leaflet";
import { useContext, useEffect, useRef } from "react";
import { createRoot } from 'react-dom/client';
import { useMap } from "react-leaflet";
import { MapContext } from "../../main";
import Popup from "./Popup";
import { useNavigate } from "react-router";

type MarkerIcon = {
    icon: HTMLImageElement;
    backgroundIcon: HTMLImageElement;
    color: string;
}

/**
 * Colors the marker wrapper SVG with the given color and returns it as a string.
 * @returns 
 */
function colorWrapper(color: string): string {
    return markerWrapper.replace("{{fill}}", color)
}

function createImage(src: string): Promise<HTMLImageElement> {
    const img = new Image();
    return new Promise((resolve, reject) => {
        img.onload = () => resolve(img);
        img.onerror = (e) => {
            console.error(`Failed to load image:`, e);
            reject(new Error(`Failed to load image`));
        };
        img.src = `data:image/svg+xml;utf8,${encodeURIComponent(src)}`;
    });
}

// --- Collision Avoidance Types & Helpers ---

type RenderItem = {
    marker: MarkerData;
    originalX: number;
    originalY: number;
    renderX: number;
    renderY: number;
    width: number;
    height: number;
    priority: number; // higher = displaced less
    isLabel: boolean;
    color: string;
    icon: MarkerIcon;
    type: MarkerType;
    label?: string;
    sizeMultiplier: number;
    /** The original lat/lng for this item (used for click → popup) */
    latLng: [number, number];
}

const PADDING = 4; // minimum pixel gap between items
const MAX_DISPLACEMENT = 150; // max pixels an item can be pushed
const NUDGE_STEP = 8; // pixels per nudge increment
// 8 cardinal + ordinal directions
const DIRECTIONS: [number, number][] = [
    [0, -1], [1, -1], [1, 0], [1, 1],
    [0, 1], [-1, 1], [-1, 0], [-1, -1]
];

function getSizeMultiplier(type: MarkerType): number {
    if (type === MarkerType.ZonePortal) return 2.0;
    if (type === MarkerType.Location || type === MarkerType.Entrance) return 1.5;
    return 1;
}

function getPriority(type: MarkerType): number {
    if (type === MarkerType.ZonePortal) return 3;
    if (type === MarkerType.Location || type === MarkerType.Entrance) return 2;
    return 1;
}

function rectsOverlap(
    ax: number, ay: number, aw: number, ah: number,
    bx: number, by: number, bw: number, bh: number
): boolean {
    return !(ax + aw + PADDING <= bx ||
        bx + bw + PADDING <= ax ||
        ay + ah + PADDING <= by ||
        by + bh + PADDING <= ay);
}

function overlapsAnyPlaced(item: RenderItem, placed: RenderItem[]): boolean {
    const ax = item.renderX - item.width / 2;
    const ay = item.renderY - item.height / 2;
    for (const p of placed) {
        const bx = p.renderX - p.width / 2;
        const by = p.renderY - p.height / 2;
        if (rectsOverlap(ax, ay, item.width, item.height, bx, by, p.width, p.height)) {
            return true;
        }
    }
    return false;
}

function resolveCollisions(items: RenderItem[]): void {
    // Sort by priority descending — highest priority placed first (displaced least)
    items.sort((a, b) => b.priority - a.priority);
    const placed: RenderItem[] = [];

    for (const item of items) {
        if (!overlapsAnyPlaced(item, placed)) {
            placed.push(item);
            continue;
        }
        // Try nudging in increasing radii
        let resolved = false;
        for (let radius = NUDGE_STEP; radius <= MAX_DISPLACEMENT; radius += NUDGE_STEP) {
            for (const [dx, dy] of DIRECTIONS) {
                item.renderX = item.originalX + dx * radius;
                item.renderY = item.originalY + dy * radius;
                if (!overlapsAnyPlaced(item, placed)) {
                    resolved = true;
                    break;
                }
            }
            if (resolved) break;
        }
        if (!resolved) {
            // Give up, keep at original position
            item.renderX = item.originalX;
            item.renderY = item.originalY;
        }
        placed.push(item);
    }
}

function drawRenderItem(ctx: CanvasRenderingContext2D, item: RenderItem) {
    const { icon, renderX: x, renderY: y, sizeMultiplier, type, label } = item;
    const size = 34 * sizeMultiplier;
    const markerAspectRatio = 27 / 36;
    const offset = (size * markerAspectRatio) / 2;

    if (!label) {
        ctx.drawImage(icon.backgroundIcon,
            x - offset, y - offset,
            markerAspectRatio * size, size);
        ctx.drawImage(icon.icon,
            x - 10, y - 10,
            20, 20);
    }

    if (label) {
        const fontSize = Math.round(12 * sizeMultiplier);
        ctx.font = `bold ${fontSize}px Roboto, sans-serif`;
        ctx.textAlign = "center";

        ctx.lineWidth = 5;
        ctx.strokeStyle = "rgba(0, 0, 0, 0.8)";
        const labelY = y + (4 * sizeMultiplier);
        ctx.strokeText(label, x, labelY);

        ctx.fillStyle = icon.color;
        ctx.fillText(label, x, labelY);
    }
}

function drawLeaderLine(ctx: CanvasRenderingContext2D, item: RenderItem) {
    const dx = item.renderX - item.originalX;
    const dy = item.renderY - item.originalY;
    if (Math.abs(dx) < 1 && Math.abs(dy) < 1) return; // not displaced

    ctx.save();
    ctx.strokeStyle = item.color;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.moveTo(item.originalX, item.originalY);
    ctx.lineTo(item.renderX, item.renderY);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
}

// --- End Collision Avoidance Helpers ---

type ClickedMarker = {
    marker: MarkerData;
    position: [number, number];
    distance: number;
}

function createCanvasLayerClass(
    markers: MarkerData[],
    icons: {
        [type in MarkerType]: MarkerIcon;
    },
    navigate: (path: string) => void,
    mapData: GlobalMapData,
    showLabelGroups: MarkerType[]
) {
    let interval;
    // Store resolved render items so _onClick can use displaced positions
    let lastResolvedItems: RenderItem[] = [];

    return L.Layer.extend({
        onAdd: function (map: L.Map) {
            this._canvas = L.DomUtil.create('canvas', 'leaflet-canvas-marker-layer');
            this._canvas.style.position = 'absolute';
            this._ctx = this._canvas.getContext('2d');

            map.getPanes().overlayPane.appendChild(this._canvas);

            map.on('zoomend resize viewreset moveend', this._reset, this);
            map.on('movestart', this._movestart, this);
            map.on('moveend', this._moveend, this);
            map.on("click", this._onClick, this);
            this._reset();
        },
        _movestart: function () {
            interval = setInterval(() => {
                this._reset();
            }, 250);
        },
        _moveend: function () {
            clearInterval(interval);
        },
        onRemove: function (map: L.Map) {
            if (this._canvas && this._canvas.parentNode) {
                this._canvas.remove();
            }
            map.off('zoomend resize viewreset moveend', this._reset, this);
            map.off("click", this._onClick, this);
            map.off('movestart', this._movestart, this);
            map.off('moveend', this._moveend, this);
            if (this._popup) {
                map.closePopup(this._popup);
            }
        },
        _reset: function () {
            const map = this._map;
            const topLeft = map.containerPointToLayerPoint([0, 0]);
            const size = map.getSize();
            L.DomUtil.setPosition(this._canvas, topLeft);
            this._canvas.width = size.x;
            this._canvas.height = size.y;
            this._canvas.style.width = size.x + 'px';
            this._canvas.style.height = size.y + 'px';
            this._draw();
        },
        _draw: function (scale = 1) {
            const ctx = this._ctx as CanvasRenderingContext2D;
            if (!ctx) return;
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.save();
            ctx.scale(scale, scale);

            // 1. Build render items
            const renderItems: RenderItem[] = [];
            markers.forEach(marker => {
                const label = showLabelGroups.includes(marker.type) ? marker.name : undefined;
                const sm = getSizeMultiplier(marker.type);
                const icon = icons[marker.type];
                const priority = getPriority(marker.type);

                if (label && marker.positions.length > 0) {
                    // Average positions for labeled markers
                    const sumLat = marker.positions.reduce((sum, pos) => sum + pos[0], 0);
                    const sumLng = marker.positions.reduce((sum, pos) => sum + pos[1], 0);
                    const avgLat = sumLat / marker.positions.length;
                    const avgLng = sumLng / marker.positions.length;
                    const point = this._map.latLngToContainerPoint([avgLat, avgLng]);
                    const x = point.x / scale;
                    const y = point.y / scale;

                    // Measure text width
                    const fontSize = Math.round(12 * sm);
                    ctx.font = `bold ${fontSize}px Roboto, sans-serif`;
                    const textWidth = ctx.measureText(label).width;

                    renderItems.push({
                        marker, originalX: x, originalY: y,
                        renderX: x, renderY: y,
                        width: textWidth + 6, height: fontSize + 6,
                        priority, isLabel: true,
                        color: icon.color, icon, type: marker.type,
                        label, sizeMultiplier: sm,
                        latLng: [avgLat, avgLng]
                    });
                } else {
                    // Individual icon markers
                    marker.positions.forEach(([lat, lng]) => {
                        const point = this._map.latLngToContainerPoint([lat, lng]);
                        const x = point.x / scale;
                        const y = point.y / scale;
                        const size = 34 * sm;
                        const markerAspectRatio = 27 / 36;
                        renderItems.push({
                            marker, originalX: x, originalY: y,
                            renderX: x, renderY: y,
                            width: markerAspectRatio * size, height: size,
                            priority, isLabel: false,
                            color: icon.color, icon, type: marker.type,
                            label: undefined, sizeMultiplier: sm,
                            latLng: [lat, lng]
                        });
                    });
                }
            });

            // 2. Resolve collisions
            resolveCollisions(renderItems);
            lastResolvedItems = renderItems;

            // 3. Draw leader lines first (underneath)
            renderItems.forEach(item => drawLeaderLine(ctx, item));

            // 4. Draw items
            renderItems.forEach(item => drawRenderItem(ctx, item));

            ctx.restore();
        },
        _onClick: function (e) {
            const { lat, lng } = e.latlng;
            const clickPoint = this._map.latLngToContainerPoint([lat, lng]);

            // Use resolved render positions for hit detection
            const clickedMarker = lastResolvedItems.reduce((closest, item) => {
                let hitRadius = 15;
                if (item.type === MarkerType.ZonePortal) hitRadius = 30;
                else if (item.type === MarkerType.Location || item.type === MarkerType.Entrance) hitRadius = 22.5;

                // For labels, use a wider hit area based on text width
                if (item.isLabel) {
                    hitRadius = Math.max(hitRadius, item.width / 2);
                }

                const dx = clickPoint.x - item.renderX;
                const dy = clickPoint.y - item.renderY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < closest.distance && distance < hitRadius) {
                    closest = {
                        marker: item.marker,
                        position: item.latLng,
                        distance
                    };
                }
                return closest;
            }, {
                marker: null,
                position: [0, 0],
                distance: Infinity
            } as ClickedMarker | {
                marker: null;
                position: [number, number];
                distance: number;
            }
            );

            if (!clickedMarker.marker) return;
            if (clickedMarker.marker.type === MarkerType.ZonePortal || clickedMarker.marker.type === MarkerType.Entrance)
                return navigate(`/${mapData[clickedMarker.marker.data.leadsTo].slug}`);
            this._popup = createPopup(clickedMarker, this._popup, this._map);
        }
    });
}

export default function CanvasMarkerLayer() {
    const map = useMap();
    const layerRef = useRef<L.Layer | null>(null);
    const { currentMapData, globalData, mapData } = useContext(MapContext);
    const { hiddenMarkerTypes: hiddenGroups, showLabelMarkerTypes: showLabelGroups, searchQuery } = useAppSelector((state) => state.map);
    const navigate = useNavigate();
    useEffect(() => {
        let canvasLayer;
        const addLayer = async () => {
            if (layerRef.current) {
                layerRef.current.remove();
            }

            const markers = currentMapData.markers
                .filter((marker) => !hiddenGroups.includes(marker.type))
                .filter((marker) => marker.name.toLowerCase().includes(searchQuery.toLowerCase()));



            const iconList = await Promise.all([
                ...Object.entries(globalData.markerTypes).map(async ([type, data]) => {
                    const img = await createImage(data.icon);
                    const backgroundImg = await createImage(colorWrapper(data.color));
                    return [type, {
                        icon: img,
                        backgroundIcon: backgroundImg,
                        color: data.color
                    }]
                })]);
            const icons = Object.fromEntries(iconList) as { [type in MarkerType]: MarkerIcon };

            const CustomCanvasLayer = createCanvasLayerClass(markers, icons, navigate, mapData, showLabelGroups);
            canvasLayer = new CustomCanvasLayer();
            layerRef.current = canvasLayer;
            canvasLayer.addTo(map);
        }
        addLayer();

        return () => canvasLayer?.remove();
    }, [map, currentMapData, hiddenGroups, showLabelGroups, searchQuery, globalData.markerTypes, navigate, mapData]);

    return null;
}

function createPopup(clickedMarker: {
    marker: MarkerData;
    position: [number, number];
},
    popup: L.Popup | null,
    map: L.Map) {
    const container = document.createElement("div");
    createRoot(container).render(<Popup
        markerData={clickedMarker.marker}
        position={clickedMarker.position}
    />);

    if (popup) {
        // Move existing popup instead of creating a new one
        popup.setLatLng(clickedMarker.position).setContent(container).openOn(map);
        return;
    }
    return L.popup({
        minWidth: 200
    })
        .setLatLng(clickedMarker.position)
        .setContent(container)
        .openOn(map);
}
