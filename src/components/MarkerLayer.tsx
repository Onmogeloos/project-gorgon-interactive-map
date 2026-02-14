import { Marker, Popup } from "react-leaflet";
import { MapData, MarkerData, MarkerGroup } from "@types/Map";
import { DivIcon, icon, Icon } from "leaflet";
import { useContext } from "react";
import { MapContext } from "../main";
import markerWrapper from "@assets/icons/markerwrapper.svg?raw"
import hexagon from "@assets/icons/hexagon.svg?raw";

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