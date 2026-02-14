import { Box, Button, Checkbox } from "@mui/material";
import { MarkerGroup } from "@types/Map";
import { useContext, useState } from "react";
import { FlexRow } from "../Flex";
import { MapContext } from "../../main";
import { Label } from "@mui/icons-material";
import { useLocation } from "react-router";

const MarkerGroupData: {[key in MarkerGroup]: {
    label: string
}} = {
    [MarkerGroup.Boss]: { label: "Bosses" },
    [MarkerGroup.Resource]: { label: "Resources" },
    [MarkerGroup.Entrance]: { label: "Entrances" },
    [MarkerGroup.NPC]: { label: "NPCs" },
    [MarkerGroup.Location]: { label: "Locations" },
    [MarkerGroup.Object]: { label: "Objects" },
    [MarkerGroup.MapGate]: { label: "Map entrances" },
    [MarkerGroup.MeditationPillar]: { label: "Meditation Pillars" },
    [MarkerGroup.TeleportPad]: { label: "Teleport Pads" },
    [MarkerGroup.Statue]: { label: "Statues" }
}

export default function MarkerToggles() {
    const { currentMapData } = useContext(MapContext);
    const [activeGroups, setActiveGroups] = useState<MarkerGroup[]>(Object.values(MarkerGroup));

    const toggleGroup = (group: MarkerGroup) => {
        setActiveGroups((prev) =>
            prev.includes(group) ? prev.filter((g) => g !== group) : [...prev, group]
        );
    };

    return (
        <Box sx={{marginBottom: "1rem"}}>
            <FlexRow $gapX="1rem" $wrap>
                {Object.entries(MarkerGroupData).map(([key, data]) => (
                    <FlexRow key={key} $alignVertical="center">
                        <Checkbox id={key} checked={activeGroups.includes(key as MarkerGroup)} onChange={() => toggleGroup(key as MarkerGroup)} />
                        <label htmlFor={key}>{data.label}</label>
                    </FlexRow>
                ))}
            </FlexRow>
        </Box>
    );
}
