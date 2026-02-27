import { Area, MapData, MarkerType } from "@localtypes/Map";

const CarpalTunnelsData: MapData = {
    name: "Carpal Tunnels",
    slug: "carpaltunnels",
    description: "",
    aspectRatio: 452 / 512,
    imageUrl: (await import("@assets/areas/Map_CarpalTunnels.png")).default,
    markers: [
        {
            "name": "Lore Book",
            "type": MarkerType.Lore,
            "positions": [
                [
                    154.51962338446947,
                    713.5097125842324
                ],
                [
                    369.03924676893894,
                    549.0194251684647
                ],
                [
                    85.03924676893894,
                    254.01942516846475
                ]
            ]
        },
        {
            "name": "Sherzat",
            "type": MarkerType.Boss,
            "positions": [
                [
                    370.03924676893894,
                    531.0194251684647
                ]
            ]
        },
        {
            "name": "Stairs to Second Floor",
            "type": MarkerType.Entrance,
            "positions": [
                [
                    530.0392467689392,
                    650.0194251684647
                ]
            ],
            data: { leadsTo: Area.CarpalTunnels }
        },
        {
            "name": "The Big Slime",
            "type": MarkerType.Boss,
            "positions": [
                [
                    88.03924676893894,
                    793.0194251684647
                ]
            ]
        },
        {
            "name": "Zealo",
            "type": MarkerType.NPC,
            "positions": [
                [
                    651.0392467689392,
                    176.01942516846475
                ]
            ]
        }
    ],
    group: Area.Serbule,
};

export default CarpalTunnelsData;
