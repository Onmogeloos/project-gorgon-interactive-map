import { MarkerType } from "@localtypes/Map";
import { Box, Checkbox, Typography } from "@mui/material";
import React, { useContext } from "react";
import { MapContext } from "../../main";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setHiddenGroups, setShowLabelGroups } from "../../store/mapSlice";
import { FlexRow } from "../Flex";
import Label from "@components/Label";
import markerWrapper from "@assets/icons/markerwrapper_template.svg?raw";

export default function MarkerToggles() {
    const { globalData } = useContext(MapContext);
    const dispatch = useAppDispatch();
    const hiddenGroups = useAppSelector((state) => state.map.hiddenMarkerTypes);
    const showLabelGroups = useAppSelector((state) => state.map.showLabelMarkerTypes);

    const toggleGroup = (group: MarkerType) => {
        dispatch(setHiddenGroups(
            hiddenGroups.includes(group)
                ? hiddenGroups.filter((g) => g !== group)
                : [...hiddenGroups, group]
        ));
    };

    const toggleLabelGroup = (group: MarkerType) => {
        dispatch(setShowLabelGroups(
            showLabelGroups.includes(group)
                ? showLabelGroups.filter((g) => g !== group)
                : [...showLabelGroups, group]
        ));
    };

    return (
        <Box sx={{ marginBottom: "1rem" }}>
            <Typography variant="h6">Marker types</Typography>
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr auto auto", rowGap: 0.5, columnGap: 2, alignItems: "center", mt: 1, mb: 1 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}></Typography>
                <Typography variant="caption" sx={{ fontWeight: 'bold', textAlign: "center" }}>Show</Typography>
                <Typography variant="caption" sx={{ fontWeight: 'bold', textAlign: "center" }}>Label</Typography>
                {Object.entries(globalData.markerTypes).map(([key, data]) => {
                    return (
                        <React.Fragment key={key}>
                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <Box sx={{ width: 20, height: 26, position: "relative" }}>
                                    <Box dangerouslySetInnerHTML={{ __html: markerWrapper.replace("{{fill}}", data.color) }} sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} />
                                    <Box dangerouslySetInnerHTML={{ __html: data.icon }} sx={{ position: "absolute", top: 2, left: 2, '& svg': { width: 16, height: 16 } }} />
                                </Box>
                                <Box sx={{ flex: 1, cursor: "pointer", m: 0 }}>
                                    <Label htmlFor={`icon-${key}`}>{data.label}</Label>
                                </Box>
                            </Box>
                            <Checkbox
                                size="small"
                                id={`icon-${key}`}
                                checked={!hiddenGroups.includes(key as MarkerType)}
                                onChange={() => toggleGroup(key as MarkerType)}
                                sx={{ p: 0.5, justifySelf: "center" }}
                            />
                            <Checkbox
                                size="small"
                                id={`label-${key}`}
                                checked={showLabelGroups.includes(key as MarkerType)}
                                onChange={() => toggleLabelGroup(key as MarkerType)}
                                sx={{ p: 0.5, justifySelf: "center" }}
                            />
                        </React.Fragment>
                    )
                })}
            </Box>
        </Box>
    );
}
