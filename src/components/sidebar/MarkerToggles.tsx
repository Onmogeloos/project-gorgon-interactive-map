import { Box, Button, Checkbox } from "@mui/material";
import { MarkerGroup } from "@types/Map";
import { useContext, useState } from "react";
import { FlexRow } from "../Flex";
import { MapContext } from "../../main";
import { Label } from "@mui/icons-material";
import { useLocation } from "react-router";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setHiddenGroups } from "../../store/mapSlice";

export default function MarkerToggles() {
    const { currentMapData, globalData } = useContext(MapContext);
    const dispatch = useAppDispatch();
    const hiddenGroups = useAppSelector((state) => state.map.hiddenGroups);

    const toggleGroup = (group: MarkerGroup) => {
        dispatch(setHiddenGroups(
            hiddenGroups.includes(group) 
                ? hiddenGroups.filter((g) => g !== group) 
                : [...hiddenGroups, group]
        ));
    };

    return (
        <Box sx={{marginBottom: "1rem"}}>
            <FlexRow $gapX="1rem" $wrap>
                {Object.entries(globalData.markerGroups).map(([key, data]) => (
                    <FlexRow key={key} $alignVertical="center">
                        <Checkbox id={key} checked={!hiddenGroups.includes(key as MarkerGroup)} onChange={() => toggleGroup(key as MarkerGroup)} />
                        <label htmlFor={key}>{data.label}</label>
                    </FlexRow>
                ))}
            </FlexRow>
        </Box>
    );
}
