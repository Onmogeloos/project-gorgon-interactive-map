import { Box, Checkbox, Typography } from "@mui/material";
import { MarkerType, ZoneType } from "@localtypes/Map";
import { useContext } from "react";
import { MapContext } from "../../main";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setHiddenZoneTypes } from "../../store/mapSlice";
import { FlexRow } from "../Flex";

export default function ZoneToggles() {
    const { currentMapData, globalData } = useContext(MapContext);
    const dispatch = useAppDispatch();
    const hiddenZoneTypes = useAppSelector((state) => state.map.hiddenZoneTypes);

    const toggleGroup = (group: ZoneType) => {
        dispatch(setHiddenZoneTypes(
            hiddenZoneTypes.includes(group) 
                ? hiddenZoneTypes.filter((g) => g !== group) 
                : [...hiddenZoneTypes, group]
        ));
    };

    return (
        <Box sx={{marginBottom: "1rem"}}>
            <Typography variant="h6">Zones</Typography>
            <FlexRow $gapX="1rem" $wrap>
                {Object.entries(globalData.zoneTypes).map(([key, data]) => (
                    <FlexRow key={key} $alignVertical="center">
                        <Checkbox id={key} checked={!hiddenZoneTypes.includes(key as ZoneType)} onChange={async () => toggleGroup(key as ZoneType)} />
                        <label htmlFor={key}>{data.label}</label>
                    </FlexRow>
                ))}
            </FlexRow>
        </Box>
    );
}
