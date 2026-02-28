import markerBackground from "@assets/icons/markerwrapper_template.svg?raw";
import { MarkerType } from "@localtypes/Map";
import { useAppSelector } from "@store/hooks";
import { useContext, useEffect, useRef, useState } from "react";
import { useMap } from "react-leaflet";
import { useNavigate } from "react-router";
import { MapContext } from "../../main";
import CanvasMarkerLayerClass from "./CanvasMarkerLayer";

export type MarkerIcon = {
    icon: HTMLImageElement;
    backgroundIcon: HTMLImageElement;
}

/**
 * A React component that integrates a custom Leaflet layer for rendering markers on a map using a canvas element.
 * The component manages the lifecycle of the canvas layer, including adding and removing it from the map, and updating it based on changes to marker data and map interactions.
 * @returns A React component that renders a canvas marker layer on a Leaflet map.
 */
export default function CanvasMarkerLayer() {
    const map = useMap();
    const layerRef = useRef<CanvasMarkerLayerClass | null>(null);
    const { currentMapData, globalData, mapData } = useContext(MapContext);
    const { hiddenMarkerTypes: hiddenGroups, searchQuery } = useAppSelector((state) => state.map);
    const navigate = useNavigate();
    const [icons, setIcons] = useState<{ [type in MarkerType]: MarkerIcon } | null>(null);

    useEffect(() => {
        const loadIcons = async () => {
            const iconList = await Promise.all([
                ...Object.entries(globalData.markerTypes).map(async ([type, data]) => {
                    // Fill the marker background by interpolating the color into the SVG template
                    const colorBackground = (color: string): string => markerBackground.replace("{{fill}}", color);
                    return [
                        type,
                        {
                            icon: await createImage(data.icon),
                            backgroundIcon: await createImage(colorBackground(data.color))
                        }]
                })]);
            setIcons(Object.fromEntries(iconList));
        };
        loadIcons();
    }, [globalData.markerTypes]);

    useEffect(() => {
        let canvasLayer: CanvasMarkerLayerClass | null = null;
        const addLayer = async () => {
            if (!icons) return;

            const markers = (currentMapData.markers ?? [])
                .filter((marker) => !hiddenGroups.includes(marker.type))
                .filter((marker) => marker.name?.toLowerCase().includes(searchQuery.toLowerCase()));

            canvasLayer = new CanvasMarkerLayerClass(
                markers,
                icons!,
                (area) => {
                    const areaData = mapData[area];
                    if (areaData) navigate(areaData.slug);
                });
            layerRef.current = canvasLayer;
            canvasLayer.addTo(map);
        };
        addLayer();

        return () => {
            if (layerRef.current) {
                layerRef.current.remove();
                layerRef.current = null;
            }
        };
    }, [map, currentMapData, hiddenGroups, searchQuery, globalData.markerTypes, navigate, mapData, globalData, icons]);
    return null;
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
