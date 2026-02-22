import { MapData, Area, MarkerType } from "@localtypes/Map";

const data: MapData = {
    name: "Eltibule",
    slug: "eltibule",
    description: "",
    group: Area.Eltibule,
    imageUrl: (await import("@assets/areas/Map_AreaEltibule.png")).default,
    aspectRatio: 2048 / 2033,
    markers: [
        {
            name: "Pudding",
            type: MarkerType.Boss,
            positions: [
                [480.3125, 880.1875]
            ]
        },
        {
            "name": "Dark Chapel Entrance",
            "type": MarkerType.Entrance,
            "positions": [
                [
                    857.5,
                    222.375
                ]
            ]
        },
        {
            "name": "Jumjab",
            "type": MarkerType.NPC,
            "positions": [
                [
                    919.75,
                    307.5
                ]
            ]
        },
        {
            "name": "Teleport Platform",
            "type": MarkerType.TeleportPlatform,
            "positions": [
                [
                    780.8125,
                    179.375
                ]
            ]
        }
    ],
};

export default data;