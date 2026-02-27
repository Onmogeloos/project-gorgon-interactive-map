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

function drawIcon(ctx: CanvasRenderingContext2D, icon: MarkerIcon, point: L.Point, scale: number) {
    const size = 34
    const scaledPosition = { x: point.x / scale, y: point.y / scale }
    // The width is 27 and the height is 36 in the original SVG.
    const markerAspectRatio = 27 / 36;
    const offset = (size * markerAspectRatio) / 2;
    ctx.drawImage(icon.backgroundIcon,
        scaledPosition.x - offset,
        scaledPosition.y - offset,
        markerAspectRatio * size,
        size);
    ctx.drawImage(icon.icon,
        scaledPosition.x - offset + 3, // x-axis offset
        scaledPosition.y - offset + 3, // y-axis offset
        size - 14, // Width 
        size - 14 // Height
    );
}

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
) {
    let interval;
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
            markers.forEach(marker => {
                marker.positions.forEach(([lat, lng]) => {
                    const point = this._map.latLngToContainerPoint([lat, lng]);
                    const icon = icons[marker.type];
                    drawIcon(ctx, icon, point, scale);
                });
            });
            ctx.restore();
        },
        _onClick: function (e) {
            const { lat, lng } = e.latlng;
            const clickedMarker = markers.reduce((closest, marker) => {
                marker.positions.forEach(([mLat, mLng]) => {
                    const point = this._map.latLngToContainerPoint([mLat, mLng]);
                    const clickPoint = this._map.latLngToContainerPoint([lat, lng]);
                    const distance = point.distanceTo(clickPoint);
                    if ((distance < closest.distance) && distance < 15)
                        closest = { marker, position: [mLat, mLng], distance };
                });
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
    const { hiddenMarkerTypes: hiddenGroups, searchQuery } = useAppSelector((state) => state.map);
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
                        backgroundIcon: backgroundImg
                    }]
                })]);
            const icons = Object.fromEntries(iconList) as { [type in MarkerType]: MarkerIcon };

            const CustomCanvasLayer = createCanvasLayerClass(markers, icons, navigate, mapData);
            canvasLayer = new CustomCanvasLayer();
            layerRef.current = canvasLayer;
            canvasLayer.addTo(map);
        }
        addLayer();

        return () => canvasLayer?.remove();
    }, [map, currentMapData, hiddenGroups, searchQuery, globalData.markerTypes]);

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
