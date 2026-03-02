import { Area, GlobalMapData, MarkerType } from "@localtypes/Map";
import { m } from "react-router/dist/development/index-react-server-client-1TI9M9o1";

const PovusData: GlobalMapData[Area.Povus] = {
    name: "Povus",
    slug: "povus",
    description: "",
    aspectRatio: 1890 / 2048,
    group: Area.Povus,
    minLevel: 75,
    maxLevel: 85,
    imageUrl: (await import("@assets/areas/Map_Povus.png")).default,
    markers: [
        {
            "name": "Brugo the Wise",
            "type": MarkerType.NPC,
            "positions": [
                [
                    699.70703125,
                    196.2962962962963
                ]
            ]
        },
        {
            "name": "Dachak the Digger",
            "type": MarkerType.NPC,
            "positions": [
                [322.125, 624.125]
            ]
        },
        {
            "name": "Dog Ear",
            "type": MarkerType.NPC,
            "positions": [
                [
                    323.2421875,
                    521.6931216931217
                ]
            ]
        },
        {
            "name": "Errruka the Benefactor",
            "type": MarkerType.NPC,
            "positions": [
                [882.1875, 562.5]
            ]
        },
        {
            "name": "Ferand Deftwhisper",
            "type": MarkerType.NPC,
            "positions": [
                [339.625, 642.75]
            ]
        },
        {
            "name": "Gerrux",
            "type": MarkerType.NPC,
            "positions": [
                [299.1875, 619.1875]
            ]
        },
        {
            "name": "Grakelsput",
            "type": MarkerType.NPC,
            "positions": [
                [
                    707.51953125,
                    197.8835978835979
                ]
            ]
        },
        {
            "name": "Justin Fargold",
            "type": MarkerType.NPC,
            "positions": [
                [314.8125, 629.25]
            ]
        },
        {
            "name": "Leah Bowman",
            "type": MarkerType.NPC,
            "positions": [
                [309.4375, 615.125]
            ]
        },
        {
            "name": "Moku",
            "type": MarkerType.NPC,
            "positions": [
                [331.875, 609.125]
            ]
        },
        {
            "name": "Mope",
            "type": MarkerType.NPC,
            "positions": [
                [166, 862.75]
            ]
        },
        {
            "name": "Shala",
            "type": MarkerType.NPC,
            "positions": [
                [308.625, 638.0625]
            ]
        },
        {
            "name": "Tast",
            "type": MarkerType.NPC,
            "positions": [
                [625.875, 539.5]
            ]
        },
        {
            "name": "Tremmond Blackhammer",
            "type": MarkerType.NPC,
            "positions": [
                [328.0625, 634.625]
            ]
        },
        {
            "name": "Tryaka",
            "type": MarkerType.NPC,
            "positions": [
                [291.5, 640.625]
            ]
        },
        {
            "name": "Wobbuk",
            "type": MarkerType.NPC,
            "positions": [
                [185.125, 679.5]
            ]
        },
        {
            "name": "Travel to Gazluk",
            "type": MarkerType.ZonePortal,
            "positions": [
                [
                    46.38671875,
                    845.5026455026456
                ]
            ],
            data: { leadsTo: Area.Gazluk }
        },
        // {
        //     "name": "Murky Tunnel",
        //     "type": MarkerType.Entrance,
        //     "positions": [
        //         [
        //             881.34765625,
        //             566.1375661375662
        //         ]
        //     ],
        // },
        {
            name: "Teleport Platform",
            type: MarkerType.TeleportPlatform,
            positions: [
                [440.84375, 737.40625],
            ]
        },
        {
            "name": "Mushroom Circle",
            "type": MarkerType.MushroomCircle,
            "positions": [
                [522.6875, 491.3125],
[136.15625, 322.96875],
                [822.5, 652.75],
            ]
        },
        {
            "name": "Old Fruitless",
            "type": MarkerType.Boss,
            "positions": [
                [166.375, 127.375]
            ]
        },
        {
            "name": "Travel to Rahu",
            "type": MarkerType.ZonePortal,
            "positions": [
                [588.625, 942.125]
            ],
            data: { leadsTo: Area.Rahu }
        },
        {
            "name": "Meditation Pillar",
            "type": MarkerType.MeditationPillar,
            "positions": [
                [127.25, 759.625],
                [320.75, 319.5],
                [542.375, 149.125],
                [855.125, 348.125],
            ]
        }
    ]
};

export default PovusData;
