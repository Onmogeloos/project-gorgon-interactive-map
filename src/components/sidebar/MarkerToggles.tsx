import { MarkerType, MarkerTypeData, MarkerTypeGroup } from "@localtypes/Map";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import styled from "styled-components";
import { MapContext } from "../../main";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setHiddenMarkerTypes } from "../../store/mapSlice";
import { FlexColumn, FlexRow } from "../Flex";

const LabelToggle = styled(Typography) <{ $active: boolean }>`
    cursor: pointer;
    color: ${(props) => (props.$active ? "inherit" : props.theme.palette.text.disabled)};
    text-decoration: ${(props) => (props.$active ? "none" : "line-through")};
    &:hover {
        color: ${props => props.theme.palette.primary.main};
    }
`

const IconContainer = styled.div<{ $active?: boolean }>`
    cursor: pointer;
    width: 1rem;
    height: 1rem;
    margin-right: 1rem;
`

const MarkerTypeContainer = styled(Box) <{ $active: boolean }>`
    cursor: pointer;
    fill: ${(props) => (props.$active ? "currentColor" : props.theme.palette.text.disabled)};
    color: ${(props) => (props.$active ? "inherit" : props.theme.palette.text.disabled)};
    > *:not(.marker-toggle-count) {
        text-decoration: ${(props) => (props.$active ? "none" : "line-through")};
    }
    &:hover {
        fill: ${props => props.theme.palette.primary.main};
        color: ${props => props.theme.palette.primary.main};
    }
`

export default function MarkerToggles() {
    const { globalData } = useContext(MapContext);
    const dispatch = useAppDispatch();


    const entries = Object.entries(globalData.markerTypes)
        .sort(([_, a], [__, b]) => a.label.localeCompare(b.label)) as [MarkerType, MarkerTypeData][];
    const groups = new Set(entries.map(([_, data]) => data.group));

    const hideAll = () => {
        dispatch(setHiddenMarkerTypes(entries.map(([type, _]) => type)));
    };
    const displayAll = () => {
        dispatch(setHiddenMarkerTypes([]));
    };

    return (
        <Box sx={{ marginBottom: "1rem" }}>
            <Box sx={{ marginBottom: "1rem" }}>
                <FlexRow $alignVertical="center">
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6">Marker types</Typography>
                    </Box>
                    <LabelToggle
                        $active={true}
                        onClick={displayAll}
                        sx={{ marginRight: "1rem", marginBottom: "0 !important" }}
                        variant="body2">Show all</LabelToggle>
                    <LabelToggle
                        $active={true}
                        onClick={hideAll}
                        sx={{ marginBottom: "0 !important" }}
                        variant="body2">Hide all</LabelToggle>
                </FlexRow >
            </Box>
            <FlexColumn $gapY="0.5rem">
                {
                    [...groups].map((group, i) => <Box
                        key={group}>
                        <GroupColumn
                            group={group}
                            entries={entries.filter(([_, data]) => data.group === group)} />
                    </Box>)
                }
            </FlexColumn >
        </Box >
    );
}

export function GroupColumn({ group, entries }: { group: MarkerTypeGroup, entries: [MarkerType, MarkerTypeData][] }) {
    const { currentMapData, globalData: { markerTypeGroups } } = useContext(MapContext);
    const dispatch = useAppDispatch();
    const hiddenTypes = useAppSelector((state) => state.map.hiddenMarkerTypes);
    const allHidden = entries.every(([type, _]) => hiddenTypes.includes(type));

    const toggleType = (type: MarkerType) => {
        dispatch(setHiddenMarkerTypes(
            hiddenTypes.includes(type)
                ? hiddenTypes.filter((g) => g !== type)
                : [...hiddenTypes, type]
        ));
    };

    const toggleGroupType = () => {
        const groupTypes = entries.map(([type, _]) => type);
        dispatch(setHiddenMarkerTypes(
            allHidden
                ? hiddenTypes.filter((g) => !groupTypes.includes(g))
                : [...hiddenTypes, ...groupTypes.filter((type) => !hiddenTypes.includes(type))]
        ));
    };

    return <>
        <LabelToggle $active={!allHidden} onClick={toggleGroupType}>{markerTypeGroups[group].label}</LabelToggle>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {
                entries.map(([type, data], i) => {
                    const count = currentMapData.markers
                        .filter((marker) => marker.type === type)
                        .map((marker) => marker.positions.length)
                        .reduce((a, b) => a + b, 0);
                    const isActive = !hiddenTypes.includes(type);
                    const IconElement = data.IconElement
                    return <MarkerTypeContainer
                        key={type}
                        onClick={() => toggleType(type)}
                        $active={isActive}
                        sx={{ display: "flex", width: "50%" }}>
                        <Box sx={{ paddingTop: "2px" }}>
                            <IconContainer $active={isActive}>
                                <IconElement />
                            </IconContainer>
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                            <LabelToggle
                                $active={isActive}>{data.label}</LabelToggle>
                        </Box>
                        <Box className="marker-toggle-count">
                            <Typography variant="caption" sx={{ paddingRight: "1rem" }}>{count}</Typography>
                        </Box>
                    </MarkerTypeContainer>;
                })
            }
        </Box >
    </>;
}

