import { MarkerType } from "@localtypes/Map";
import { Box, Checkbox, Typography } from "@mui/material";
import { useContext } from "react";
import { MapContext } from "../../main";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setHiddenGroups } from "../../store/mapSlice";
import { FlexRow } from "../Flex";
import Label from "@components/Label";

export default function MarkerToggles() {
    const { globalData } = useContext(MapContext);
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
            <FlexRow $wrap>
                {Object.entries(globalData.markerGroups).map(([key, data]) => (
                    <Box key={key} sx={{ display: "flex", alignItems: "center", width: "50%" }}>
                        <Checkbox size="small" id={key} checked={!hiddenGroups.includes(key as MarkerType)} onChange={() => toggleGroup(key as MarkerType)} />
                        <Label htmlFor={key}>{data.label}</Label>
                    </Box>
                ))}
            </FlexRow>
        </Box>
    );
}
