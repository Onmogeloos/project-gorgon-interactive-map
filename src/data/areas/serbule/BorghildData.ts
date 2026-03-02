import { Area, AreaData, MarkerType } from "@localtypes/Map";

const BorghildData: AreaData = {
    name: "Borghild",
    slug: "borghild",
    description: "",
    aspectRatio: 395 / 512,
    imageUrl: (await import("@assets/areas/Map_Borghild.png")).default,
    markers: [
        {
            "name": "Borghild Bookshelf",
            "type": MarkerType.Object,
            "positions": [
                [
                    75.51962338446947,
                    586.5097125842324
                ]
            ]
        },
        {
            "name": "Corpse",
            "type": MarkerType.Object,
            "positions": [
                [
                    982,
                    426
                ]
            ]
        },
        {
            "name": "Forgotten Loading Golem",
            "type": MarkerType.Boss,
            "positions": [
                [
                    801,
                    395
                ]
            ]
        },
        {
            "name": "Kiralem",
            "type": MarkerType.Boss,
            "positions": [
                [
                    281.5,
                    594.5
                ]
            ]
        },
        {
            "name": "Trap Chest",
            "type": MarkerType.Object,
            "positions": [
                [
                    317.5,
                    811.5
                ],
                [
                    538,
                    481.5
                ],
                [
                    564.25,
                    509
                ],
                [
                    539,
                    527.25
                ],
                [
                    138.01962338446947,
                    285.5097125842324
                ]
            ]
        },
        {
            "name": "Venenae",
            "type": MarkerType.Boss,
            "positions": [
                [
                    122.01962338446947,
                    585.5097125842324
                ]
            ]
        }
    ],
    group: Area.Serbule,
};

export default BorghildData;
