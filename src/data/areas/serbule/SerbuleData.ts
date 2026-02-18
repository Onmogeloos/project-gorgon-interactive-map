import { Area, MapData, MarkerType } from "@localtypes/Map";

const data: MapData = {
    name: "Serbule",
    slug: "serbule",
    description: "",
    group: Area.Serbule,
    imageUrl: (await import("@assets/areas/Map_AreaSerbule.png")).default,
    markers: [
        {
            "name": "Stables",
            type: MarkerType.Location,
            position: [[
                557.75,
                527.125
            ]]
        },
        {
            "name": "Echur",
            type: MarkerType.NPC,
            position: [[
                469.75,
                538.125
            ]]
        },
        {
            "name": "Sir Coth",
            type: MarkerType.NPC,
            position: [[559.40625, 515.625]]
        },
        {
            "name": "Roshun the Traitor",
            type: MarkerType.NPC,
            position: [[863.8125, 347.125]]
        },
        {
            "name": "Lugnir",
            type: MarkerType.NPC,
            position: [[
                424.875,
                614
            ]]
        },
        {
            "name": "Apple tree",
            type: MarkerType.FruitTree,
            position: [
                [622.625, 118],
                [903.5, 186]
            ]
        },
        {
            "name": "Nelson Ballard",
            type: MarkerType.NPC,
            position: [[
                508.625,
                516.125
            ]]
        },
        {
            "name": "Velkort",
            type: MarkerType.NPC,
            position: [[
                518.625,
                518.5
            ]]
        },
        {
            "name": "Altar",
            type: MarkerType.Altar,
            position: [
                [513.25, 548.25],
                [480.5, 545.5],
                [251.6875, 269],
                [493.375, 717.625]

            ]
        },
        {
            "name": "Tadion",
            type: MarkerType.NPC,
            position: [[
                424.75,
                558.5
            ]]
        },
        {
            "name": "Dye Monster",
            type: MarkerType.NPC,
            position: [[
                240.25,
                390.125
            ]]
        },
        {
            "name": "Mushroom Jack",
            type: MarkerType.NPC,
            position: [[
                523.875,
                532
            ]]
        },
        {
            "name": "Storage Machine",
            type: MarkerType.Object,
            position: [[
                509.375,
                506.625
            ]]
        },
        {
            "name": "Tyxr the Guardian Elemental",
            type: MarkerType.Boss,
            position: [[
                290.5,
                771
            ]]
        },
        {
            "name": "Elzehatal",
            type: MarkerType.Boss,
            position: [[
                418,
                75.75
            ]]
        },
        {
            "name": "Marna",
            type: MarkerType.NPC,
            position: [[
                496.75,
                513
            ]]
        },
        {
            "name": "Gisli",
            type: MarkerType.NPC,
            position: [[
                553.25,
                524.25
            ]]
        },
        {
            "name": "Zeratak",
            type: MarkerType.NPC,
            position: [
                [877.4375, 330.5]
            ]
        },
        {
            "name": "Elahil",
            type: MarkerType.NPC,
            position: [[
                508,
                533.75
            ]]
        },
        {
            "name": "Selphie",
            type: MarkerType.NPC,
            position: [[
                419.25,
                564.5
            ]]
        },
        {
            "name": "Mr. Squeaky",
            type: MarkerType.Boss,
            position: [[
                749,
                190.5
            ]]
        },
        {
            "name": "Charles Thompson",
            type: MarkerType.NPC,
            position: [[
                237.125,
                392.5
            ]]
        },
        {
            "name": "Joeh",
            type: MarkerType.NPC,
            position: [[
                497.625,
                518.625
            ]]
        },
        {
            "name": "Hulon",
            type: MarkerType.NPC,
            position: [[
                512.75,
                506
            ]]
        },
        {
            "name": "Therese",
            type: MarkerType.NPC,
            position: [[
                452.25,
                534.5
            ]]
        },
        {
            "name": "Harry the Wolf",
            type: MarkerType.NPC,
            position: [[
                441,
                534
            ]]
        },
        {
            "name": "Transmutation Table",
            type: MarkerType.Object,
            position: [[
                495.625,
                513.375
            ]]
        },
        {
            "name": "Azalak",
            type: MarkerType.NPC,
            position: [
                [865.9375, 337.625]
            ]
        },
        {
            "name": "Flia",
            type: MarkerType.NPC,
            position: [[
                418,
                780
            ]]
        },
        {
            "name": "Meditation Pillar",
            type: MarkerType.MeditationPillar,
            position: [[
                467,
                535.75
            ]]
        },
        {
            "name": "Bahdba",
            type: MarkerType.NPC,
            position: [[
                272,
                799.5
            ]]
        },
        {
            "name": "Larsan",
            type: MarkerType.NPC,
            position: [[543.09375, 509.21875]]
        },
        {
            "name": "Pennoc",
            type: MarkerType.NPC,
            position: [[502.625, 529.40625]]
        },
        {
            name: "Brain Bug Cave",
            position: [
                [875.75, 167.5]
            ],
            type: MarkerType.Entrance
        },
        {
            name: "Meditation Pillar (NW)",
            position: [
                [852.625, 219.75]
            ],
            type: MarkerType.MeditationPillar
        },
        {
            name: "Crystal Cavern",
            position: [
                [
                    780,
                    420
                ]
            ],
            type: MarkerType.Entrance
        },
        {
            name: "Path to Eltibule",
            position: [
                [927.5625, 357.0625]
            ],
            type: MarkerType.ZonePortal
        },
        {
            name: "Old Fangsworth",
            position: [
                [
                    914.25,
                    568.75
                ]
            ],
            type: MarkerType.Boss
        },
        {
            name: "Fitz the Boatman",
            position: [
                [934.8125, 669.4375]
            ],
            type: MarkerType.NPC
        },
        {
            name: "Juri the Boatman",
            position: [
                [930.125, 688.6875]
            ],
            type: MarkerType.NPC
        },
        {
            name: "Borghild",
            position: [
                [748.4375, 893.3125]
            ],
            type: MarkerType.Entrance
        },
        {
            name: "Teleport Pad (NE)",
            position: [
                [757.28125, 877.25]
            ],
            type: MarkerType.TeleportPlatform
        },
        {
            name: "Meditation Pillar (NE)",
            position: [
                // [
                //     740, // 0,9951013513513514
                //     895 // 0.981284916
                // ],
                [736.375, 878.25]
            ],
            type: MarkerType.MeditationPillar
        },
        {
            name: "Serbule Sewers",
            position: [
                [650.1875, 688.8125]
            ],
            type: MarkerType.Entrance
        },
        {
            name: "Old Snouty",
            position: [
                [
                    520,
                    780
                ]
            ],
            type: MarkerType.Boss
        },
        {
            name: "Mushroom circle",
            position: [
                [489.375, 859]
            ],
            type: MarkerType.Object
        },
        {
            name: "Serbule Keep & Market",
            position: [
                [
                    411.75,
                    579.25
                ]
            ],
            type: MarkerType.Location
        },
        {
            name: "Teleport Pad (Central)",
            position: [
                [551.75, 508.375]
            ],
            type: MarkerType.TeleportPlatform
        },
        {
            name: "Meditation Pillar (Central)",
            position: [
                [581.90625, 432.375]
            ],
            type: MarkerType.MeditationPillar
        },
        {
            name: "Carpal Tunnels",
            position: [
                [
                    448,
                    165
                ]
            ],
            type: MarkerType.Entrance
        },
        {
            name: "Giant Mushrooms",
            position: [
                [586, 57.5]
            ],
            type: MarkerType.Entrance
        },
        {
            name: "Serbule Graveyard",
            position: [
                [119.5, 113.8125]
            ],
            type: MarkerType.Location
        },
        {
            name: "Serbule Crypt",
            position: [
                [103.75, 94.25]
            ],
            type: MarkerType.Location
        },
        {
            name: "Gluzax",
            position: [
                [
                    151.75,
                    307.5
                ]
            ],
            type: MarkerType.Boss
        },
        {
            name: "Teleport Pad (South)",
            position: [
                [
                    188,
                    602
                ]
            ],
            type: MarkerType.TeleportPlatform
        },
        {
            name: "Salmpo",
            position: [
                [
                    124,
                    535
                ]
            ],
            type: MarkerType.NPC
        },
        {
            name: "Path to Serbule Hills",
            position: [
                [
                    80,
                    780
                ]
            ],
            type: MarkerType.ZonePortal
        },
        {
            name: "Fainor",
            position: [
                [
                    534.125,
                    498
                ]
            ],
            type: MarkerType.NPC
        },
        {
            name: "Rita",
            position: [
                [
                    528.4375,
                    504.46875
                ]
            ],
            type: MarkerType.NPC
        },
        {
            name: "Blanche",
            position: [
                [
                    525,
                    505.5
                ]
            ],
            type: MarkerType.NPC
        }
    ]
};

export default data;