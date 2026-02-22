import fs from "fs";
import { coordinateToMapPosition } from "./functions.js";

const MarkerType = {
        Location: "{{location}}",
        NPC: "{{npc}}",
        Boss: "{{boss}}",
        FruitTree: "{{fruitTree}}",
        Altar: "{{altar}}",
        Object: "{{object}}",
        MeditationPillar: "{{meditationPillar}}",
        Entrance: "{{entrance}}",
        ZonePortal: "{{zonePortal}}",
        TeleportPlatform: "{{teleportPlatform}}",
        Enemy: "{{enemy}}"
}


let objects = []


// Map and group by name, merging positions
const grouped = {};
for (const obj of objects) {
    const name = obj.name.replace(/.*\[(.*)\].*/, "[$1]");
    if (!grouped[name]) {
        grouped[name] = { ...obj, name, positions: [...(obj.positions || [])] };
    } else {
        grouped[name].positions = grouped[name].positions.concat(obj.positions || []);
    }
}
const newObjects = Object.values(grouped).sort((a, b) => a.name.localeCompare(b.name));

let string = JSON.stringify(newObjects, null, 2);
Object.entries(MarkerType).forEach(([key, value]) => {
        string = string.replaceAll(`"${value}"`, `MarkerType.${key}`)
});

fs.writeFileSync("scripts/objects.json", string)