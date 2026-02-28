import { Area, MarkerData, MarkerType } from "@localtypes/Map";
import L from "leaflet";
import { createRoot } from "react-dom/client";
import { MarkerIcon } from "./CanvasMarkerLayerWrapper";
import Popup from "./Popup";


type ClickedMarker = {
    marker: MarkerData;
    position: [number, number];
    distance: number;
}

/**
 * Extends a Leaflet layer by adding a canvas element on which markers are drawn.
 * This allows for better performance when rendering a large number of markers, as well as more customization options for marker appearance.
 * The layer listens to map events to update the marker positions and handles click events to show popups with marker information.
 */
export default class CanvasMarkerLayerClass extends L.Layer {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D | null;
    private popup: L.Popup | null = null;
    private interval: any;

    constructor(
        private markers: MarkerData[],
        private icons: { [type in MarkerType]: MarkerIcon },
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
        this.ctx = this.canvas.getContext('2d');
        map.getPanes().overlayPane.appendChild(this.canvas);

        map.on('zoomend resize viewreset moveend', this.reset, this);
        map.on('movestart', this.onMoveStart, this);
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
        this.draw(this._map);
    }

    private draw(map: L.Map, scale = 1) {
        const ctx = this.ctx as CanvasRenderingContext2D;
        if (!ctx) return;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.save();
        ctx.scale(scale, scale);
        this.markers.forEach(marker => {
            marker.positions.forEach(([lat, lng]) => {
                const point = map.latLngToContainerPoint([lat, lng]);
                const iconData = this.icons[marker.type];
                this.drawIcon(ctx, iconData, point, scale);
            });
        });
        ctx.restore();
    }

    private drawIcon(ctx: CanvasRenderingContext2D, icon: MarkerIcon, point: L.Point, scale: number) {
        const size = 34
        const scaledPosition = { x: point.x / scale, y: point.y / scale }
        // The width is 27 and the height is 36 in the original SVG.
        const markerAspectRatio = 27 / 36;
        const offset = (size * markerAspectRatio) / 2;
        // Draw icon background
        ctx.drawImage(icon.backgroundIcon,
            scaledPosition.x - offset,
            scaledPosition.y - offset,
            markerAspectRatio * size,
            size);
        // Draw icon foreground
        ctx.drawImage(icon.icon,
            scaledPosition.x - offset + 3, // x-axis offset
            scaledPosition.y - offset + 3, // y-axis offset
            size - 14, // Width 
            size - 14 // Height
        );
    }

    private onClick(e) {
        const { lat, lng } = e.latlng;
        const clickedMarker = this.getClickedMarker(lat, lng);
        if (!clickedMarker) return;
        // If the clicked marker is a portal or entrance, navigate to the linked area instead of showing a popup
        if (clickedMarker.marker.type === MarkerType.ZonePortal || clickedMarker.marker.type === MarkerType.Entrance)
            return this.navigateToArea(clickedMarker.marker.data.leadsTo);
        this.popup = this.createPopup(clickedMarker, this.popup, this._map);
    }

    /**
     * Finds the marker closest to the clicked location within a certain threshold distance.
     * @param lat The latitude of the clicked location.
     * @param lng The longitude of the clicked location.
     * @returns An object containing the closest marker, its position, and the distance to the clicked location, or null if no marker is close enough.
     */
    getClickedMarker(lat: number, lng: number): ClickedMarker | null {
        return this.markers.reduce<ClickedMarker | null>((closest, marker) => {
            marker.positions.forEach(([mLat, mLng]) => {
                const point = this._map.latLngToContainerPoint([mLat, mLng]);
                const clickPoint = this._map.latLngToContainerPoint([lat, lng]);
                const distance = point.distanceTo(clickPoint);
                if ((distance < (closest?.distance ?? Infinity)) && distance < 15)
                    closest = { marker, position: [mLat, mLng], distance };
            });
            return closest;
        }, null)
    }

    private createPopup(clickedMarker: {
        marker: MarkerData;
        position: [number, number];
    },
        popup: L.Popup | null,
        map: L.Map
    ) {
        const container = document.createElement("div");
        createRoot(container).render(<Popup
            markerData={clickedMarker.marker}
            position={clickedMarker.position}
        />);

        if (popup) {
            // Move existing popup instead of creating a new one
            popup.setLatLng(clickedMarker.position).setContent(container).openOn(map);
            return popup;
        }
        return L.popup({
            minWidth: 200
        })
            .setLatLng(clickedMarker.position)
            .setContent(container)
            .openOn(map);
    }
}