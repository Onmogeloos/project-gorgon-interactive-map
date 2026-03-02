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
            "name": "Meditation Pillar",
            "type": MarkerType.MeditationPillar,
            "positions": [
                [
                    819.4164989939638,
                    119.62890625
                ],
                [
                    710.7645875251509,
                    571.2890625
                ],
                [
                    279.17505030181087,
                    261.23046875
                ],
                [
                    93.56136820925553,
                    660.64453125
                ],
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
                [
                    891.851106639839,
                    192.87109375
                ]
            ]
        },
        {
            "name": "Durstin Tallow",
            "type": MarkerType.NPC,
            "positions": [
                [
                    883.2997987927565,
                    195.3125
                ]
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
                [
                    894.8692152917505,
                    195.80078125
                ]
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
            ]
        },
        {
            "name": "Lana Songtree",
            "type": MarkerType.NPC,
            "positions": [
                [
                    885.8148893360161,
                    195.80078125
                ]
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
            "name": "Paul Vaughn",
            "type": MarkerType.NPC,
            "positions": [
                [
                    869.215291750503,
                    204.58984375
                ]
            ]
        },
        {
            "name": "Rappanel",
            "type": MarkerType.NPC,
            "positions": [
                [
                    888.3299798792757,
                    196.2890625
                ]
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
            "name": "Stables Golem",
            "type": MarkerType.NPC,
            "positions": [
                [
                    869.215291750503,
                    184.5703125
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
                [
                    892.3541247484909,
                    190.4296875
                ]
            ]
        },
        {
            "name": "Tunnel to Ranalon Base",
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