import { Area, MapData, MarkerType } from "@localtypes/Map";

const BrainBugCaveData: MapData = {
    name: "Brain Bug Cave",
    slug: "brainbugcave",
    description: "",
    aspectRatio: 512 / 307,
    imageUrl: (await import("@assets/areas/Map_BrainBugCave.png")).default,
    markers: [
        {
            "name": "Commander Ferrows",
            "type": MarkerType.NPC,
            "positions": [
                [
                    675.0392467689392,
                    900.0194251684647
                ]
            ]
        },
        {
            "name": "Instruction Manual",
            "type": MarkerType.Lore,
            "positions": [
                [
                    377.03924676893917,
                    142.01942516846475
                ]
            ]
        },
        {
            "name": "Treasure Chest",
            "type": MarkerType.Treasure,
            "positions": [
                [
                    552.75,
                    565
                ],
                [
                    426.03924676893917,
                    150.01942516846475
                ]
            ]
        }
    ],
    group: Area.Serbule,
};

export default BrainBugCaveData;
