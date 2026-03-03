import { Area, MarkerData, MarkerType } from "@localtypes/Map";
import L, { LatLng } from "leaflet";
import { createRoot } from "react-dom/client";
import { MarkerIcon, MarkerItemData, MarkerLabel } from "./CanvasMarkerLayerWrapper";
import Popup from "./Popup";


type MarkerElement = {
    marker: MarkerData,
    latlng: LatLng,
    zIndex: number,
    size: { width: number, height: number }
}

/**
 * Extends a Leaflet layer by adding a canvas element on which markers are drawn.
 * This allows for better performance when rendering a large number of markers, as well as more customization options for marker appearance.
 * The layer listens to map events to update the marker positions and handles click events to show popups with marker information.
 */
export default class CanvasMarkerLayerClass extends L.Layer {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private popup: L.Popup | null = null;
    private tooltip: L.Tooltip | null = null;
    private markerElements: MarkerElement[] = []
    private interval: any;

    constructor(
        private markers: MarkerData[],
        private iconData: { [type in MarkerType]: MarkerItemData },
        private navigateToArea: (area: Area) => void,
    ) {
        super();
    }

    /**
     * Called when the layer is added to the map. Initializes the canvas and sets up event listeners for map interactions.
     * @param map The Leaflet map instance to which the layer is being added.
     * @returns The layer instance.
     */
    override onAdd(map: L.Map) {
        this.canvas = L.DomUtil.create('canvas', 'leaflet-canvas-marker-layer');
        this.canvas.style.position = 'absolute';
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
        map.getPanes().overlayPane.appendChild(this.canvas);

        map.on('zoomend resize viewreset moveend', this.reset, this);
        map.on('movestart', this.onMoveStart, this);
        map.on('mousemove', this.onMouseMove, this);
        map.on('moveend', this.onMoveEnd, this);
        map.on('click', this.onClick, this);
        this.reset();
        return this;
    }

    /**
     * Called when the layer is removed from the map. Cleans up the canvas and removes event listeners.
     * @param map The Leaflet map instance from which the layer is being removed.
     * @returns The layer instance.
     */
    override onRemove(map: L.Map) {
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.remove();
        }
        map.off('zoomend resize viewreset moveend', this.reset, this);
        map.off('click', this.onClick, this);
        map.off('movestart', this.onMoveStart, this);
        map.off('mousemove', this.onMouseMove, this);
        map.off('moveend', this.onMoveEnd, this);
        if (this.popup) {
            map.closePopup(this.popup);
        }
        return this;
    }

    private onMoveStart() {
        // Don't rerender each move event for better performance.
        this.interval = setInterval(() => {
            this.reset();
        }, 250);
    }

    private async onMouseMove(e) {
        const elementAtCursor = this.getMarkerAt(e.latlng);

        // Remove existing tooltip
        if (this.tooltip) {
            this._map.removeLayer(this.tooltip);
            this.tooltip = null;
        }
        // If hoverMarker is not found, reset cursor and return
        if (!elementAtCursor) {
            this.canvas.style.cursor = "default";
            return;
        }
        this.canvas.style.cursor = "pointer";

        if (this.iconData[elementAtCursor.marker.type].type === "label")
            return;

        this.tooltip = this.drawTooltip(elementAtCursor);
    }

    private drawTooltip(element: MarkerElement) {
        // Create new tooltip
        const tooltip = L.tooltip({
            permanent: false,
            direction: "top",
            className: "custom-tooltip"
        });
        tooltip.setLatLng(element.latlng).setContent(element.marker.name).addTo(this._map);
        return tooltip;
    }

    private onMoveEnd() {
        clearInterval(this.interval);
    }

    private reset() {
        const topLeft = this._map.containerPointToLayerPoint([0, 0]);
        const size = this._map.getSize();
        L.DomUtil.setPosition(this.canvas, topLeft);
        this.canvas.width = size.x;
        this.canvas.height = size.y;
        this.canvas.style.width = size.x + 'px';
        this.canvas.style.height = size.y + 'px';
        this.draw();
    }

    private draw() {
        const ctx = this.ctx as CanvasRenderingContext2D;
        if (!ctx) return;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.save();
        ctx.scale(1, 1);

        // Get the current map bounds and pixel size
        const bounds = this._map.getBounds();
        const size = this._map.getSize();
        
        // Helper to check if a latlng is visible in the current view
        const isLatLngVisible = (latlng: L.LatLng) => {
            if (!bounds.contains(latlng)) return false;
            const point = this._map.latLngToContainerPoint(latlng);
            return (
                point.x >= 0 && point.x <= size.x &&
                point.y >= 0 && point.y <= size.y
            );
        };

        Object.entries(this.iconData)
            // Draw higher zIndex first
            .sort((a, b) => (a[1].zIndex ?? 0) - (b[1].zIndex ?? 0))
            .forEach(([type, iconData]) => {
                this.markers
                    .filter(marker => marker.type === type)
                    .forEach(marker => {
                        marker.positions
                            .map(([lat, lng]) => new LatLng(lat, lng))
                            .filter(isLatLngVisible)
                            .forEach(latlng => {
                                switch (iconData.type) {
                                    case "icon":
                                        this.drawIcon(marker, iconData, latlng);
                                        break;
                                    case "label":
                                        this.drawLabel(marker, iconData, latlng);
                                        break;
                                }
                            });
                    });
            });
        ctx.restore();
    }

    private drawLabel(marker: MarkerData, iconData: MarkerLabel, latlng: LatLng) {
        const point = this._map.latLngToContainerPoint(latlng);
        const ctx = this.ctx;
        const sizeMultiplier = iconData.scale;
        const fontSize = Math.round(12 * sizeMultiplier);
        ctx.font = `bold ${fontSize}px Roboto, sans-serif`;
        ctx.textAlign = "center";

        ctx.lineWidth = 5;
        ctx.strokeStyle = "rgba(0, 0, 0, 0.8)";
        const labelY = point.y + (4 * sizeMultiplier);
        ctx.strokeText(marker.name, point.x, labelY);

        ctx.fillStyle = iconData.color;
        ctx.fillText(marker.name, point.x, labelY);

        this.markerElements.push({
            marker,
            zIndex: iconData.zIndex ?? 0,
            latlng,
            size: {
                width: ctx.measureText(marker.name).width,
                height: fontSize
            }
        });
    }

    private drawIcon(marker: MarkerData, iconData: MarkerIcon, latlng: LatLng) {
        const point = this._map.latLngToContainerPoint(latlng);
        const size = 34
        // The width is 27 and the height is 36 in the original SVG.
        const markerAspectRatio = 27 / 36;
        const offset = (size * markerAspectRatio) / 2;
        // Draw icon background
        const ctx = this.ctx;
        ctx.drawImage(iconData.backgroundIcon,
            point.x - offset,
            point.y - offset,
            markerAspectRatio * size,
            size);
        // Draw icon foreground
        ctx.drawImage(iconData.icon,
            point.x - offset + 3, // x-axis offset
            point.y - offset + 3, // y-axis offset
            size - 14, // Width 
            size - 14 // Height
        );

        this.markerElements.push({
            marker,
            latlng,
            zIndex: iconData.zIndex ?? 0,
            size: {
                width: size,
                height: size
            }
        });
    }

    private onClick(e) {
        const clickedMarker = this.getMarkerAt(e.latlng);
        if (!clickedMarker) return;
        // If the clicked marker is a portal or entrance, navigate to the linked area instead of showing a popup
        if (clickedMarker.marker.type === MarkerType.ZonePortal || clickedMarker.marker.type === MarkerType.Entrance)
            return this.navigateToArea(clickedMarker.marker.data.leadsTo);
        // Display popup
        this.popup = this.createPopup(clickedMarker, this.popup, this._map);
    }

    getMarkerAt(latlng: LatLng): MarkerElement | null {
        return this.markerElements
            .sort((a, b) => a.zIndex - b.zIndex)
            .reduce((closest, element) => {
                const markerPoint = this._map.latLngToContainerPoint(element.latlng);
                const clickPoint = this._map.latLngToContainerPoint(latlng);

                // Calculate hitbox bounds
                const halfWidth = element.size.width / 2;
                const halfHeight = element.size.height / 2;
                const withinX = clickPoint.x >= (markerPoint.x - halfWidth) && clickPoint.x <= (markerPoint.x + halfWidth);
                const withinY = clickPoint.y >= (markerPoint.y - halfHeight) && clickPoint.y <= (markerPoint.y + halfHeight);
                return withinX && withinY ? element : closest;
            }, null);
    }

    private createPopup(
        clickedMarker: MarkerElement,
        popup: L.Popup | null,
        map: L.Map
    ) {
        const container = document.createElement("div");
        createRoot(container).render(<Popup
            markerData={clickedMarker.marker}
            markerPosition={clickedMarker.latlng}
            navigateToArea={this.navigateToArea}
        />);

        if (popup) {
            // Move existing popup instead of creating a new one
            popup.setLatLng(clickedMarker.latlng).setContent(container).openOn(map);
            return popup;
        }
        return L.popup({
            minWidth: 200
        })
            .setLatLng(clickedMarker.latlng)
            .setContent(container)
            .openOn(map);
    }
}