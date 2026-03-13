import { Area, AreaData, MarkerType } from "@localtypes/Map";

const MyconianCaveData: AreaData = {
    name: "Myconian Cave",
    slug: "myconianCave",
    description: "",
    aspectRatio: 541 / 1024,
    imageUrl: (await import("@assets/areas/Map_MyconianCave.png")).default,
    markers: [
        { "name": "Senzur", type: MarkerType.Boss, "positions": [[321, 317.5]] },
        { "name": "Chest", "type": MarkerType.Treasure, "positions": [[587.5, 256.5], [231.5, 460.5]] },
        { "name": "Tremor", "type": MarkerType.Boss, "positions": [[719.5, 296.75]] },
        { "name": "Adventurer's Pack", "type": MarkerType.Treasure, "positions": [[792.125, 513.25]] },
        {
            "name": "Greta",
            "type": MarkerType.Boss,
            "positions": [
                [
                    240.51962338446947,
                    438.5097125842324
                ]
            ]
        },
        {
            "name": "Jaw",
            "type": MarkerType.NPC,
            "positions": [
                [
                    868.5196233844696,
                    527.5097125842324
                ]
            ]
        },
        {
            "name": "Mu",
            "type": MarkerType.NPC,
            "positions": [
                [
                    827.5196233844696,
                    530.5097125842324
                ]
            ]
        },
        {
            "name": "Poe",
            "type": MarkerType.NPC,
            "positions": [
                [
                    61.01962338446947,
                    530.5097125842324
                ]
            ]
        },
        {
            "name": "Serbule Exit",
            "type": MarkerType.Entrance,
            "positions": [
                [
                    846.5196233844696,
                    490.0097125842324
                ]
            ],
            data: { leadsTo: Area.Serbule }
        },
        {
            "name": "Tidal",
            "type": MarkerType.Boss,
            "positions": [
                [
                    134.01962338446947,
                    710.0097125842324
                ]
            ]
        },
        {
            "name": "Voo",
            "type": MarkerType.NPC,
            "positions": [
                [
                    855.0196233844696,
                    528.5097125842324
                ]
            ]
        },
        {
            "name": "Way",
            "type": MarkerType.NPC,
            "positions": [
                [
                    816.0196233844696,
                    529.0097125842324
                ]
            ]
        },
        {
            "name": "Yoy",
            "type": MarkerType.NPC,
            "positions": [
                [
                    305.51962338446947,
                    646.0097125842324
                ]
            ]
        }
    ],
    group: Area.Serbule,
};

export default MyconianCaveData;
