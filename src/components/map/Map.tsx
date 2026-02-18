import { useAppDispatch } from "@store/hooks";
import { setMapClickPosition } from "@store/mapSlice";
import { useContext, useEffect, useState } from "react";
import { ImageOverlay, useMapEvents, ZoomControl } from "react-leaflet";
import { MapContext } from "../../main";
import MarkerLayer from "./MarkerLayer";

export default function Map() {
    const { currentMapData } = useContext(MapContext);
    const dispatch = useAppDispatch();
    const [imageBounds, setImageBounds] = useState<[[number, number], [number, number]]>([[0, 0], [1000, 1000]]);
    
    // Vibe-coded image bounds calculation to maintain aspect ratio and center the image.
    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            const aspectRatio = img.naturalWidth / img.naturalHeight;
            let height, width;
            
            // Fit image within 1000x1000 while maintaining aspect ratio
            if (aspectRatio > 1) {
                // Landscape: width is limiting factor
                width = 1000;
                height = width / aspectRatio;
            } else {
                // Portrait or square: height is limiting factor
                height = 1000;
                width = height * aspectRatio;
            }
            
            // Center the image within the 1000x1000 viewport
            const offsetY = (1000 - height) / 2;
            const offsetX = (1000 - width) / 2;
            setImageBounds([
                [offsetY, offsetX],
                [offsetY + height, offsetX + width]
            ]);
        };
        img.src = currentMapData.imageUrl;
    }, [currentMapData.imageUrl]);
    
    useMapEvents({
        click(e) {
            dispatch(setMapClickPosition({
                y: e.latlng.lat,
                x: e.latlng.lng
            }));
            console.log(`[${e.latlng.lat}, ${e.latlng.lng}]`);
        }
    });

    return <>
        <ZoomControl position="topright" />
        <ImageOverlay
            url={currentMapData.imageUrl}
            bounds={imageBounds}
        />
        {/* <ZoneLayer /> */}
        <MarkerLayer />
    </>
}