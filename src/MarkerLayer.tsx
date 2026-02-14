import { Marker, Popup } from "react-leaflet";
import { MapData } from "./Mapdata";

export default function MarkerLayer({
    mapData
}: {
    mapData: MapData
}) {
    return (
        <>
            {
                mapData.markers.map((marker, index) => (
                    <Marker key={index} position={marker.position}>
                        <Popup>
                            {marker.name} ({marker.group})
                        </Popup>
                    </Marker>
                ))
            }
        </>
    );
}