import { Area, MapData, MarkerType } from "@localtypes/Map";

const data: MapData = {
    name: "Serbule Hills",
    slug: "serbulehills",
    description: "",
    group: Area.SerbuleHills,
    aspectRatio: 2048 / 1988,
    imageUrl: (await import("@assets/areas/Map_AreaSerbule2.png")).default,
    markers: [
        {
            name: "Paul Vaughn",
            type: MarkerType.NPC,
            positions: [
                [858.25, 205.125]
            ],
        },
        {
            name: "Stables Golem",
            type: MarkerType.NPC,
            positions: [
                [858.5625, 184.5625]
            ],
        },
        {
            name: "Teleport platform",
            type: MarkerType.TeleportPlatform,
            positions: [
                [863.5625, 209.25]
            ]
        },
        {
            name: "Path to Serbule",
            positions: [[988, 95]],
            type: MarkerType.ZonePortal,
            data: { leadsTo: Area.Serbule }
        },
        {
            name: "Serbule Hills Spider Cave",
            type: MarkerType.Entrance,
            positions: [
                [935.1875, 362]
            ],
            data: { leadsTo: Area.SpiderCave }
        },
        {
            name: "Apple tree",
            description: `
            Min forage level: 0
            `,
            type: MarkerType.FruitTree,
            positions: [
                [959.8125, 76.4375],
                [928.3125, 32.8125],
                [923.8125, 20.5],
                [890.25, 121.75],

                [867.25, 18.5],

                [844.125, 55.625],
                [845, 49.125]
            ]
        },
        {
            "name": "Control Bowl",
            "type": MarkerType.Location,
            "positions": [
                [
                    359.75,
                    237
                ]
            ]
        },
        {
            "name": "Gershok",
            "type": MarkerType.NPC,
            "positions": [
                [
                    716,
                    559
                ]
            ]
        },
        {
            "name": "Meditation Pillar",
            "type": MarkerType.MeditationPillar,
            "positions": [
                [
                    722,
                    561
                ]
            ]
        },
        {
            "name": "The Wooly Bastard",
            "type": MarkerType.Boss,
            "positions": [
                [
                    461,
                    253
                ]
            ]
        }
    ]
};

export default data;