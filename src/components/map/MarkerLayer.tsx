import hexagon from "@assets/icons/hexagon.svg?raw";
import markerWrapper from "@assets/icons/markerwrapper.svg?raw";
import plus from "@assets/icons/plus.svg?raw";
import { MarkerType, UniqueMarkerData } from "@localtypes/Map";
import { DivIcon } from "leaflet";
import { useContext, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import { MapContext } from "../../main";
import { useAppSelector } from "../../store/hooks";
import { Typography } from "@mui/material";
import { FlexColumn, FlexRow } from "@components/Flex";

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
            {currentMapData.uniqueMarkers
                .filter((marker: UniqueMarkerData) => !hiddenGroups.includes(marker.group as MarkerType))
                .filter((marker: UniqueMarkerData) => marker.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((marker, index) => (<CustomMarker key={index} markerData={marker} />))}
            {currentMapData.bulkMarkers
                .filter((marker) => !hiddenGroups.includes(marker.group as MarkerType))
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
                            iconSize: [36, 36],
                            iconAnchor: [18, 18]
                        })
                    }
                />
            )}
        </>
    );
}

function CustomMarker({ markerData }: { markerData: UniqueMarkerData }) {
    const [image, setImage] = useState<string | null>(null);
    const { globalData: { markerGroups } } = useContext(MapContext);
    const group = markerGroups[markerData.group as MarkerType];
    const toWiki = (name: string) => `https://wiki.projectgorgon.com/w/index.php?search=${name}`
    return (
        <Marker position={markerData.position}
            icon={
                new DivIcon({
                    html: wrapIcon(group.icon || hexagon, group.color),
                    iconSize: [36, 36],
                    iconAnchor: [18, 18]
                })
            }
        >
            <Popup>
                <FlexRow>
                    <FlexColumn>
                        {image && <img src={image} alt={markerData.name} />}
                        <Typography variant="h6">{markerData.name}</Typography>
                        <Typography variant="body1">{group.label}</Typography>
                        <Typography variant="body2">
                            Wiki: <a href={toWiki(markerData.name)}>{markerData.name}</a>
                            <br/>
                            Position: {`[${markerData.position[0]}, ${markerData.position[1]}]`}
                        </Typography>
                    </FlexColumn>
                </FlexRow>
            </Popup>
        </Marker>
    );
}