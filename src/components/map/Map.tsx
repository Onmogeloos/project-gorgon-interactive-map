import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useContext } from "react";
import { ImageOverlay, useMapEvents, ZoomControl } from "react-leaflet";
import { MapContext } from "../../main";
import MarkerLayer from "./MarkerLayer";
import { setMapClickPosition } from "@store/mapSlice";

export default function Map() {
    const { currentMapData } = useContext(MapContext);
    const dispatch = useAppDispatch();
    
    useMapEvents({
        click(e) {
            dispatch(setMapClickPosition({
                y: e.latlng.lat,
                x: e.latlng.lng
            }));
        }
    });

    return <>
        <ZoomControl position="topright" />
        <ImageOverlay
            url={currentMapData.imageUrl}
            bounds={[[0, 0], [1000, 1000]]}
        />
        <MarkerLayer />
    </>
}