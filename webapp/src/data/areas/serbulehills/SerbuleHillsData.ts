import { Area, AreaData, MarkerType } from "@localtypes/Map";

const data: AreaData = {
    name: "Serbule Hills",
    slug: "serbulehills",
    description: "",
    group: Area.SerbuleHills,
    minLevel: 1,
    maxLevel: 30,
    aspectRatio: 2048 / 1988,
    imageUrl: (await import("@assets/areas/Map_AreaSerbule2.png")).default,
    markers: [
        { name: "Bloodmaw", type: MarkerType.Boss, positions: [[93.5, 349.5]] },
        { name: "Mushroom Circle", type: MarkerType.MushroomCircle, positions: [[160.5625, 324.875], [921.5, 902.5]] },
        { name: "Altar", type: MarkerType.Altar, positions: [[133.5, 137.625], [61.8125, 969.5625], [261.59375, 546.09375]] },
        { name: "The Big Widow", type: MarkerType.Boss, positions: [[338.4375, 406.375]] },
        { name: "Logging Camp", type: MarkerType.Camp, positions: [[793, 825.5], [816.25, 855], [771, 905.25]] },
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
            "name": "Meditation Pillar",
            "type": MarkerType.MeditationPillar,
            "positions": [
                [810.4375, 119.8125],
                [710.78125, 571.5],
                [
                    279.17505030181087,
                    261.23046875
                ],
                [105.6875, 661.0625],
                [
                    905.9356136820926,
                    758.7890625
                ],
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
        },
        {
            "name": "Brianna Willer",
            "type": MarkerType.NPC,
            "positions": [
                [
                    666.4989939637827,
                    53.22265625
                ]
            ]
        },
        {
            "name": "Cleo Conyer",
            "type": MarkerType.NPC,
            "positions": [
                [880.59375, 192.375]
            ]
        },
        {
            "name": "Durstin Tallow",
            "type": MarkerType.NPC,
            "positions": [
                [871.90625, 195.3125]
            ]
        },
        {
            "name": "Gershok",
            "type": MarkerType.NPC,
            "positions": [
                [
                    703.2193158953722,
                    566.40625
                ]
            ]
        },
        {
            "name": "Jaime Fatholm",
            "type": MarkerType.NPC,
            "positions": [
                [883.9375, 195.71875]
            ]
        },
        {
            "name": "Julius Patton",
            "type": MarkerType.NPC,
            "positions": [
                [
                    757.0422535211268,
                    174.8046875
                ]
            ],
            description: `Skill Trainer: Gardening`
        },
        {
            "name": "Lana Songtree",
            "type": MarkerType.NPC,
            "positions": [
                [874.625, 195.625]
            ]
        },
        {
            "name": "Baroness Marith Felgard",
            "type": MarkerType.NPC,
            "positions": [
                [
                    595.5734406438633,
                    168.9453125
                ]
            ]
        },
        {
            "name": "Merriana",
            "type": MarkerType.NPC,
            "positions": [
                [
                    409.9597585513078,
                    128.90625
                ]
            ]
        },
        {
            "name": "Rappanel",
            "type": MarkerType.NPC,
            "positions": [
                [877.84375, 195.84375]
            ]
        },
        {
            "name": "Sammie Grimspine",
            "type": MarkerType.NPC,
            "positions": [
                [
                    530.6841046277666,
                    113.76953125
                ]
            ]
        },
        {
            "name": "Trasen",
            "type": MarkerType.NPC,
            "positions": [
                [
                    414.486921529175,
                    133.7890625
                ]
            ]
        },
        {
            "name": "Tyler Green",
            "type": MarkerType.NPC,
            "positions": [
                [883.1875, 190.3125]
            ]
        },
        {
            "name": "Ranalon Base",
            "type": MarkerType.Entrance,
            "positions": [
                [
                    538.2293762575453,
                    590.8203125
                ]
            ],
            data: { leadsTo: Area.RanalonBase }
        },
    ]
};

export default data;