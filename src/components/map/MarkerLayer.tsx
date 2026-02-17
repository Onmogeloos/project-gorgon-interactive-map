import hexagon from "@assets/icons/hexagon.svg?raw";
import markerWrapper from "@assets/icons/markerwrapper.svg?raw";
import plus from "@assets/icons/plus.svg?raw";
import { FlexColumn, FlexRow } from "@components/Flex";
import { MarkerType } from "@localtypes/Map";
import { Typography } from "@mui/material";
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
    const { hiddenMarkerTypes: hiddenGroups, searchQuery, isMarkerProposalOpen, mapClickPosition } = useAppSelector((state) => state.map);

    return (
        <>
            {currentMapData.markers
                .filter((marker) => !hiddenGroups.includes(marker.type))
                .filter((marker) => marker.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((marker) => (
                    marker.position.map((position) => (
                        <CustomMarker key={`${marker.name}-${position}`} name={marker.name} type={marker.type} position={position} />
                    ))
                ))}
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
        </>
    );
}

function CustomMarker({ 
    name,
    type,
    position
 }: { 
    name: string;
    type: MarkerType;
    position: [number, number];
}) {
    const { globalData: { markerGroups } } = useContext(MapContext);
    const groupData = markerGroups[type];
    const toWiki = (name: string) => `https://wiki.projectgorgon.com/w/index.php?search=${name}`
    return (
        <Marker position={position}
            icon={
                new DivIcon({
                    html: wrapIcon(groupData.icon || hexagon, groupData.color),
                    iconSize: [36, 36],
                    iconAnchor: [18, 18]
                })
            }
        >
            <Popup>
                <FlexRow>
                    <FlexColumn>
                        <Typography variant="h6">{name}</Typography>
                        <Typography variant="body1">{groupData.label}</Typography>
                        <Typography variant="body2">
                            Wiki: <a href={toWiki(name)}>{name}</a>
                            <br/>
                            Position: {`[${position[0]}, ${position[1]}]`}
                        </Typography>
                    </FlexColumn>
                </FlexRow>
            </Popup>
        </Marker>
    );
}