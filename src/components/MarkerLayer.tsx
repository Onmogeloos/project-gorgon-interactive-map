import hexagon from "@assets/icons/hexagon.svg?raw";
import markerWrapper from "@assets/icons/markerwrapper.svg?raw";
import { MapData, MarkerData, MarkerGroup } from "@types/Map";
import { DivIcon } from "leaflet";
import { useContext } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { MapContext } from "../main";

const wrapIcon = (svg: string): string => `
    <div class="icon-wrapper">
    ${markerWrapper}
    ${svg}
    </div>
`;

export default function MarkerLayer({
    mapData
}: {
    mapData: MapData
}) {
    useMapEvents({
        click(e) {
            console.log(`[${e.latlng.lat}, ${e.latlng.lng}],`);
        },
    });
    return (
        <>
            {mapData.markers.map((marker, index) => (<CustomMarker key={index} markerData={marker} />))}
        </>
    );
}

function CustomMarker({ markerData }: { markerData: MarkerData }) {
    const { globalData: { icons } } = useContext(MapContext);
    return (
        <Marker position={markerData.position}
            icon={
                new DivIcon({
                    html: wrapIcon(icons[markerData.group as MarkerGroup] || hexagon),
                    iconSize: [32, 32],
                    iconAnchor: [16, 16]
                })
            }
        >
            <Popup>
                {markerData.name} ({markerData.group})
            </Popup>
        </Marker>
    );
}