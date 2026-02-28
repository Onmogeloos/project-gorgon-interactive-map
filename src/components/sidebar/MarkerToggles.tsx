import { MarkerType } from "@localtypes/Map";
import { Box, Checkbox, Typography } from "@mui/material";
import { useContext } from "react";
import { MapContext } from "../../main";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setHiddenMarkerTypes } from "../../store/mapSlice";
import { FlexRow } from "../Flex";
import styled from "styled-components";

const Label = styled.label<{ $active: boolean }>`
    cursor: pointer;
    text-decoration: ${(props) => (props.$active ? "none" : "line-through")};
`

const Icon = styled.img`
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
    // Recolor using filter
    filter: grayscale(100%) brightness(0) invert(1);
`

export default function MarkerToggles() {
    const { globalData } = useContext(MapContext);
    const dispatch = useAppDispatch();
    const hiddenGroups = useAppSelector((state) => state.map.hiddenMarkerTypes);

    const toggleGroup = (group: MarkerType) => {
        dispatch(setHiddenMarkerTypes(
            hiddenGroups.includes(group)
                ? hiddenGroups.filter((g) => g !== group)
                : [...hiddenGroups, group]
        ));
    };

    return (
        <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="h6" sx={{marginBottom: "1rem"}}>Marker types</Typography>
            <FlexRow $wrap $gapY="0.5rem">
                {Object.entries(globalData.markerTypes).map(([key, data]) => (
                    <Box key={key} sx={{ display: "flex", alignItems: "center", width: "50%" }}>
                        <Checkbox sx={{ display: "none" }} id={key} onChange={() => toggleGroup(key as MarkerType)} />
                        <Icon src={data.iconElement} alt={data.label} />
                        <Label $active={!hiddenGroups.includes(key as MarkerType)} htmlFor={key}>{data.label}</Label>
                    </Box>
                ))}
            </FlexRow>
        </Box>
    );
}
