import markerBackground from "@assets/icons/markerwrapper_template.svg?raw";
import { MarkerType } from "@localtypes/Map";
import { useAppSelector } from "@store/hooks";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useMap } from "react-leaflet";
import { useNavigate } from "react-router";
import { MapContext } from "../../main";
import CanvasMarkerLayer from "./CanvasMarkerLayer";

export type MarkerIcon = {
    icon: HTMLImageElement;
    backgroundIcon: HTMLImageElement;
    color: string;
    type: "icon"
    zIndex?: number;
}

export type MarkerLabel = {
    type: "label"
    color: string;
    text: string;
    scale: number;
    zIndex?: number;
}

export type MarkerItemData = MarkerIcon | MarkerLabel;

/**
 * A React component that integrates a custom Leaflet layer for rendering markers on a map using a canvas element.
 * The component manages the lifecycle of the canvas layer, including adding and removing it from the map, and updating it based on changes to marker data and map interactions.
 * @returns A React component that renders a canvas marker layer on a Leaflet map.
 */
export default function CanvasMarkerLayerWrapper() {
    const map = useMap();
    const layerRef = useRef<CanvasMarkerLayer | null>(null);
    const { currentMapData, globalData, mapData } = useContext(MapContext);
    const { hiddenMarkerTypes: hiddenGroups, searchQuery } = useAppSelector((state) => state.map);
    const navigate = useNavigate();
    const [icons, setIcons] = useState<{ [type in MarkerType]: MarkerItemData } | null>(null);

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
                            backgroundIcon: await createImage(colorBackground(data.color)),
                            color: data.color,
                            type: data.type,
                            scale: data.scale ?? 1,
                            zIndex: data.zIndex ?? 0
                        } as MarkerItemData]
                })]);
            setIcons(Object.fromEntries(iconList));
        };
        loadIcons();
    }, [globalData.markerTypes]);

    const markers = useMemo(() => {
        if (!currentMapData.markers) return [];
        return currentMapData.markers
            .filter((marker) => !hiddenGroups.includes(marker.type))
            .filter((marker) => marker.name?.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [currentMapData.markers, hiddenGroups, searchQuery]);

    useEffect(() => {
        let canvasLayer: CanvasMarkerLayer | null = null;
        const addLayer = async () => {
            if (!icons) return;
            canvasLayer = new CanvasMarkerLayer(
                markers,
                icons,
                (area) => {
                    const areaData = mapData[area];
                    if (areaData) navigate(`/${areaData.slug}`);
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
    }, [map, currentMapData, hiddenGroups, searchQuery, globalData.markerTypes, navigate, mapData, globalData, icons, markers]);
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
