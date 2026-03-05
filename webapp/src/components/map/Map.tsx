import markerWrapper from "@assets/icons/markerwrapper.svg?raw";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { setMapClickPosition } from "@store/mapSlice";
import { DivIcon } from "leaflet";
import { Marker } from "react-leaflet";
import { useContext, useMemo } from "react";
import { ImageOverlay, useMapEvents, ZoomControl } from "react-leaflet";
import { MapContext } from "../../main";
import CanvasMarkerLayer from "./CanvasMarkerLayerWrapper";
import plus from "@assets/icons/plus.svg?raw";

const wrapIcon = (svg: string, color: string): string => `
    <div class="icon-wrapper" style="fill: ${color}">
    ${markerWrapper}
    ${svg}
    </div>
`;


export default function Map() {
    const { currentMapData } = useContext(MapContext);
    const isMarkerProposalOpen = useAppSelector(state => state.map.isMarkerProposalOpen);
    const mapClickPosition = useAppSelector(state => state.map.mapClickPosition);
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
            console.log(`{ name: "", type: MarkerType., positions: [ [${e.latlng.lat}, ${e.latlng.lng}], ] },`)
        }
    });

    return <>
        <ZoomControl position="topright" />
        <ImageOverlay
            key={JSON.stringify(imageBounds)}
            url={currentMapData.imageUrl}
            bounds={imageBounds}
        />
        {isMarkerProposalOpen && mapClickPosition && (
            <Marker position={[mapClickPosition.y, mapClickPosition.x]}
                icon={
                    new DivIcon({
                        html: wrapIcon(plus, "rgb(255, 255, 255)"),
                        iconSize: [36, 36],
                        iconAnchor: [18, 18]
                    })
                }
            />
        )}
        <CanvasMarkerLayer />
    </>
}