import { Area, AreaData, MarkerType } from "@localtypes/Map";

const KhyruleksCryptData: AreaData = {
    name: "Khyrulek's Crypt",
    slug: "khyrulekscrypt",
    description: "",
    aspectRatio: 525 / 1024,
    imageUrl: (await import("@assets/areas/Map_KhyruleksCrypt.png")).default,
    markers: [
        {
            "name": "Blue Crystal",
            "type": MarkerType.Object,
            "positions": [
                [
                    525.0392467689392,
                    639.0194251684647
                ]
            ]
        },
        {
            "name": "Entrance Return Portal",
            "type": MarkerType.ZonePortal,
            "positions": [
                [
                    838.0392467689392,
                    417.01942516846475
                ]
            ],
            data: { leadsTo: Area.Serbule }
        },
        {
            "name": "Feverdance",
            "type": MarkerType.Boss,
            "positions": [
                [
                    664.0392467689392,
                    444.01942516846475
                ]
            ]
        },
        { "name": "Chest", "type": MarkerType.Treasure, "positions": [[394.5, 713.5]] },
        {
            "name": "Gilded Chest Puzzle",
            "type": MarkerType.Object,
            "positions": [
                [
                    167.03924676893894,
                    714.0194251684647
                ]
            ]
        },
        {
            "name": "Khyrulek",
            "type": MarkerType.Boss,
            "positions": [
                [
                    683.0392467689392,
                    712.0194251684647
                ]
            ]
        },
        {
            "name": "Khyrulek Portal",
            "type": MarkerType.ZonePortal,
            "positions": [
                [
                    707.0392467689392,
                    711.0194251684647
                ]
            ],
            data: { leadsTo: Area.KhyruleksCrypt }
        },
        {
            "name": "Khyrulek's True Form",
            "type": MarkerType.Boss,
            "positions": [
                [
                    696.0392467689392,
                    446.01942516846475
                ]
            ]
        },
        {
            "name": "Megaspider",
            "type": MarkerType.Boss,
            "positions": [
                [
                    545.0392467689392,
                    545.0194251684647
                ]
            ]
        },
        {
            "name": "Nameless Guardian",
            "type": MarkerType.Boss,
            "positions": [
                [
                    281.03924676893894,
                    466.01942516846475
                ]
            ]
        },
        {
            "name": "Nameless Statue Puzzle",
            "type": MarkerType.Object,
            "positions": [
                [
                    275.03924676893894,
                    428.01942516846475
                ]
            ]
        },
        {
            "name": "Omegaspider",
            "type": MarkerType.Boss,
            "positions": [
                [
                    853.0392467689392,
                    586.0194251684647
                ]
            ]
        },
        {
            "name": "Pulsing Crystal",
            "type": MarkerType.NPC,
            "positions": [
                [
                    697.0392467689392,
                    380.01942516846475
                ]
            ]
        },
        {
            "name": "Rhino Guardian",
            "type": MarkerType.Boss,
            "positions": [
                [
                    171.03924676893894,
                    443.01942516846475
                ]
            ]
        },
        {
            "name": "Serbule Sewers Portal",
            "type": MarkerType.Entrance,
            "positions": [
                [
                    466.03924676893917,
                    487.01942516846475
                ]
            ],
            data: { leadsTo: Area.SerbuleSewer }
        },
        {
            "name": "Sir Arif",
            "type": MarkerType.NPC,
            "positions": [
                [
                    405.03924676893917,
                    446.01942516846475
                ]
            ]
        },
        {
            "name": "Strange Spider",
            "type": MarkerType.NPC,
            "positions": [
                [
                    180.03924676893894,
                    471.01942516846475
                ]
            ]
        },
        {
            "name": "Superspider",
            "type": MarkerType.Boss,
            "positions": [
                [
                    870.0392467689392,
                    428.01942516846475
                ]
            ]
        },
        {
            "name": "Ursula",
            "type": MarkerType.Boss,
            "positions": [
                [
                    566.0392467689392,
                    301.01942516846475
                ]
            ]
        },
        {
            "name": "Ursula's Secret Room",
            "type": MarkerType.Location,
            "positions": [
                [
                    219.03924676893894,
                    758.0194251684647
                ]
            ]
        }
    ],
    group: Area.Serbule,
};

export default KhyruleksCryptData;
