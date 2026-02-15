import hexagon from "@assets/icons/hexagon.svg?raw";
import markerWrapper from "@assets/icons/markerwrapper.svg?raw";
import plus from "@assets/icons/plus.svg?raw";
import { MarkerGroup, UniqueMarkerData } from "@types/Map";
import { DivIcon } from "leaflet";
import { useContext } from "react";
import { Marker, Popup } from "react-leaflet";
import { MapContext } from "../../main";
import { useAppSelector } from "../../store/hooks";

const wrapIcon = (svg: string, color: string): string => `
    <div class="icon-wrapper" style="fill: ${color}">
    ${markerWrapper}
    ${svg}
    </div>
`;

export default function MarkerLayer() {
    const { currentMapData } = useContext(MapContext);
    const {hiddenGroups, searchQuery, isMarkerProposalOpen, mapClickPosition} = useAppSelector((state) => state.map);

    return (
        <>
            {currentMapData.uniqueMarkers
                .filter((marker: UniqueMarkerData) => !hiddenGroups.includes(marker.group as MarkerGroup))
                .filter((marker: UniqueMarkerData) => marker.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((marker, index) => (<CustomMarker key={index} markerData={marker} />))}
            {currentMapData.bulkMarkers
                .filter((marker) => !hiddenGroups.includes(marker.group as MarkerGroup))
                .filter((marker) => marker.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((marker, index) => (
                    marker.positions.map((position, posIndex) => (
                        <CustomMarker key={`${index}-${posIndex}`} markerData={{ ...marker, position }} />
                    ))
                ))}
            {isMarkerProposalOpen && mapClickPosition && (
                <Marker position={[mapClickPosition.y, mapClickPosition.x]}
                icon={
                    new DivIcon({
                        html: wrapIcon(plus, "rgb(255, 255, 255)"),
                        iconSize: [32, 32],
                        iconAnchor: [16, 32]
                    })
                }
                />
            )}
        </>
    );
}

function CustomMarker({ markerData }: { markerData: UniqueMarkerData }) {
    const { globalData: { markerGroups } } = useContext(MapContext);
    const group = markerGroups[markerData.group as MarkerGroup];
    return (
        <Marker position={markerData.position}
            icon={
                new DivIcon({
                    html: wrapIcon(group.icon || hexagon, group.color),
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