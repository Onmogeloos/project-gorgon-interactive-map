import { useAppDispatch } from "@store/hooks";
import { setMapClickPosition } from "@store/mapSlice";
import { useContext, useMemo } from "react";
import { ImageOverlay, useMapEvents, ZoomControl } from "react-leaflet";
import { MapContext } from "../../main";
import MarkerLayer from "./MarkerLayer";

export default function Map() {
    const { currentMapData } = useContext(MapContext);
    const dispatch = useAppDispatch();

    const aspectRatio = currentMapData?.aspectRatio ?? 1;
    const { height, width } = useMemo(() => {
        return aspectRatio > 1
            ? { width: 1000, height: 1000 / aspectRatio }
            : { height: 1000, width: 1000 * aspectRatio };
    }, [aspectRatio]);

    // Center the image within the 1000x1000 viewport
    const offsetY = (1000 - height) / 2;
    const offsetX = (1000 - width) / 2;
    const imageBounds = [
        [offsetY, offsetX],
        [offsetY + height, offsetX + width]
    ] as [[number, number], [number, number]];

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
            key={JSON.stringify(imageBounds)}
            url={currentMapData.imageUrl}
            bounds={imageBounds}
        />
        <MarkerLayer />
    </>
}