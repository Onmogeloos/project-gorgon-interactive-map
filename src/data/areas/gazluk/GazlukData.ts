import { Area, GlobalMapData, MarkerType } from "@localtypes/Map";

const GazlukData: GlobalMapData[Area.Gazluk] = {
    name: "Gazluk",
    slug: "gazluk",
    description: "",
    group: Area.Gazluk,
    minLevel: 70,
    maxLevel: 80,
    imageUrl: (await import("@assets/areas/Map_AreaGazluk.png")).default,
    aspectRatio: 2037 / 2048,
    markers: [
        {
            "name": "Aralorn",
            "type": MarkerType.NPC,
            "positions": [
                [
                    747.1772214040255,
                    752.9296875
                ]
            ]
        },
        {
            "name": "Aven",
            "type": MarkerType.NPC,
            "positions": [
                [
                    739.8134511536573,
                    745.1171875
                ]
            ]
        },
        {
            "name": "Fluffikins",
            "type": MarkerType.NPC,
            "positions": [
                [
                    748.613647520864,
                    742.67578125
                ]
            ]
        },
        {
            "name": "Trekker",
            "type": MarkerType.NPC,
            "positions": [
                [
                    750.613647520864,
                    744.140625
                ]
            ]
        },
        {
            "name": "Travel to Vidaria",
            "type": MarkerType.ZonePortal,
            "positions": [
                [
                    969.0721649484536,
                    73.73046875
                ]
            ],
            "data": { leadsTo: Area.Vidaria }
        },
        { name: "Animal Camp", type: MarkerType.Location, positions: [[745.5625, 747.9375]] },
        { name: "Teleport Platform", type: MarkerType.TeleportPlatform, positions: [
            [827.15625, 469.1875],
            [94.03125, 561.28125],
            [379.9375, 568.125],
            [598.5, 218.375],
        ] },
        {
            "name": "No-Name Cave",
            "type": MarkerType.Entrance,
            "positions": [
                [
                    251.35002454590085,
                    142.578125
                ]
            ],
            "data": { leadsTo: Area.NoNameCave }
        },
        {
            "name": "Snowblood Shadow Cave",
            "type": MarkerType.Entrance,
            "positions": [
                [
                    477.1723122238586,
                    281.73828125
                ]
            ],
            "data": { leadsTo: Area.SnowbloodCave }
        },
        {
            "name": "Tower View Cave",
            "type": MarkerType.Entrance,
            "positions": [
                [
                    456.0628375061365,
                    676.7578125
                ]
            ],
            "data": { leadsTo: Area.TowerView }
        },
        {
            "name": "Foothills Cave",
            "type": MarkerType.Entrance,
            "positions": [
                [
                    909.6710849288169,
                    301.26953125
                ]
            ],
            "data": { leadsTo: Area.WindyViewCave }
        },
        {
            "name": "Amaluk Valley Cave",
            "type": MarkerType.Entrance,
            "positions": [
                [
                    476.19047619047615,
                    482.421875
                ]
            ],
            "data": { leadsTo: Area.TowerView }
        },
        {
            "name": "Meditation Pillar",
            "type": MarkerType.MeditationPillar,
            "positions": [
                [
                    198.8217967599411,
                    594.23828125
                ],
                [
                    845.8517427589593,
                    217.7734375
                ],
                [
                    670.5940108001964,
                    422.36328125
                ],
                [
                    117.32940598919981,
                    55.17578125
                ],
                [
                    920.9621993127148,
                    844.23828125
                ]
            ]
        },
        {
            "name": "Travel to Kur Mountains",
            "type": MarkerType.ZonePortal,
            "positions": [
                [
                    217.47668139420716,
                    841.796875
                ]
            ],
            "data": { leadsTo: Area.KurMountains }
        },
        {
            "name": "Prestonbule",
            "type": MarkerType.Location,
            "positions": [
                [
                    89.34707903780065,
                    558.59375
                ]
            ]
        },
        {
            "name": "Gazluk Keep",
            "type": MarkerType.Location,
            "positions": [
                [
                    716.7403043691704,
                    416.9921875
                ]
            ]
        },
        {
            "name": "Travel to Povus",
            "type": MarkerType.ZonePortal,
            "positions": [
                [
                    988.2179675994109,
                    749.0234375
                ]
            ],
            "data": { leadsTo: Area.Povus }
        },
        {
            "name": "New Prestonbule Cave",
            "type": MarkerType.Entrance,
            "positions": [
                [
                    104.07461953853704,
                    492.1875
                ]
            ],
            "data": { leadsTo: Area.NewPrestonbule }
        },
        {
            "name": "Windy View Cave",
            "type": MarkerType.Entrance,
            "positions": [
                [
                    803.632793323515,
                    652.83203125
                ]
            ],
            "data": { leadsTo: Area.WindyViewCave }
        },
        {
            "name": "Gazluk Shadow Cave",
            "type": MarkerType.Entrance,
            "positions": [
                [
                    668.1394207167402,
                    304.6875
                ]
            ],
            "data": { leadsTo: Area.SnowbloodCave }
        },
        { name: "Gazluk Watchtower", type: MarkerType.Location, positions: [[853.0625, 373.0625]] },
        {
            name: "Orc Camp", type: MarkerType.Location, positions: [
                [646.5, 235.5],
                [496.25, 242.25],
                [150.75, 255.75],
                [317.25, 395.25]
            ]
        },
    ]
};

export default GazlukData;
