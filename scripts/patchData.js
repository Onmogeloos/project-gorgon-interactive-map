import fs from "fs";
import { coordinateToMapPosition } from "./functions.js";

const MarkerType = {
  Location: "location",
  NPC: "npc",
  Boss: "boss",
  FruitTree: "fruittree",
  Altar: "altar",
  Object: "object",
  MeditationPillar: "meditationpillar",
  Entrance: "entrance",
  ZonePortal: "zoneportal",
  TeleportPlatform: "teleportplatform",
  Enemy: "enemy",
  Elite: "elite"
}


let objects = []


// Group by name and combine positions.
// E.g. {name: "Bla", type: "npc", positions: [[1,2]], map: "serbule"}
const grouped = {};
for (const obj of objects) {
  const name = obj.name;
  grouped[name] = {
    name,
    type: obj.type,
    positions: [...grouped?.[name]?.positions ?? [], obj.position],
    map: obj.map
  }
}
const groupedList = Object.values(grouped).sort((a, b) => a.name.localeCompare(b.name));

// Group by map.
// E.g. {"serbule": {name: "Bla", type: "npc", positions: [[1,2]], map: "serbule"}}
const groupedByMap = {};
for (const obj of groupedList) {
  const map = obj.map;
  groupedByMap[map] = [...groupedByMap?.[map] ?? [], obj]
}

// Maps to correct type.
// E.g. {"serbule": [{name: "Bla", type: "npc", positions: [[1,2]]}]}
const mapDatasGroupedByMap = {}
for (const obj of groupedList) {
  mapDatasGroupedByMap[obj.map] = [...mapDatasGroupedByMap?.[obj.map] ?? [], {
    name: obj.name,
    type: obj.type,
    positions: obj.positions
  }]
}

// Write to file as string, replacing type values with enum references.
Object.entries(mapDatasGroupedByMap).forEach(([map, objects]) => {
  let jsonString = JSON.stringify(objects, null, 2);

  // Patch string values to enum references.
  Object.entries(MarkerType).forEach(([key, value]) => {
    jsonString = jsonString.replaceAll(`"type": "${value}",`, `"type": MarkerType.${key},`)
  });

  fs.writeFileSync(`./scripts/data/${map}.js`, jsonString);
})