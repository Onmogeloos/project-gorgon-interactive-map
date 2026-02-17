import { Box, Checkbox, Typography } from "@mui/material";
import { MarkerType } from "@localtypes/Map";
import { useContext } from "react";
import { MapContext } from "../../main";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setHiddenGroups } from "../../store/mapSlice";
import { FlexRow } from "../Flex";

export default function MarkerToggles() {
    const { currentMapData, globalData } = useContext(MapContext);
    const dispatch = useAppDispatch();
    const hiddenGroups = useAppSelector((state) => state.map.hiddenMarkerTypes);

    const toggleGroup = (group: MarkerType) => {
        dispatch(setHiddenGroups(
            hiddenGroups.includes(group) 
                ? hiddenGroups.filter((g) => g !== group)
                : [...hiddenGroups, group]
        ));
    };

    return (
        <Box sx={{marginBottom: "1rem"}}>
            <Typography variant="h6">Markers</Typography>
            <FlexRow $gapX="1rem" $wrap>
                {Object.entries(globalData.markerGroups).map(([key, data]) => (
                    <FlexRow key={key} $alignVertical="center">
                        <Checkbox id={key} checked={!hiddenGroups.includes(key as MarkerType)} onChange={() => toggleGroup(key as MarkerType)} />
                        <label htmlFor={key}>{data.label}</label>
                    </FlexRow>
                ))}
            </FlexRow>
        </Box>
    );
}
