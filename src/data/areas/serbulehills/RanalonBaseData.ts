import { Area, MapData, MarkerType } from "@localtypes/Map";

const RanalonBaseData: MapData = {
    name: "Ranalon Base",
    slug: "ranalonbase",
    description: "",
    aspectRatio: 1024 / 838,
    imageUrl: (await import("@assets/areas/Map_RanalonBase.png")).default,
    markers: [
        {
            "name": "Chirrra",
            "type": MarkerType.NPC,
            "positions": [
                [
                    342,
                    412
                ]
            ]
        },
        {
            "name": "Den Mother",
            "type": MarkerType.Boss,
            "positions": [
                [
                    794.5,
                    695
                ]
            ]
        },
        {
            "name": "Doctrine-Keeper",
            "type": MarkerType.Boss,
            "positions": [
                [
                    862,
                    115
                ]
            ]
        },
        {
            "name": "Orrrilund",
            "type": MarkerType.NPC,
            "positions": [
                [
                    562.5,
                    606.5
                ]
            ]
        },
        {
            "name": "Serbule Hills Exit",
            "type": MarkerType.Entrance,
            "positions": [
                [
                    203,
                    438
                ]
            ],
            data: { leadsTo: Area.SerbuleHills }
        }
    ],
    group: Area.SerbuleHills,
};

export default RanalonBaseData;
