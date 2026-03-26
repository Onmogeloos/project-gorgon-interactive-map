import { Area, AreaData, MarkerType } from "@localtypes/Map";

const RanalonBaseData: AreaData = {
    name: "Ranalon Base",
    slug: "ranalonbase",
    description: "",
    aspectRatio: 1024 / 838,
    imageUrl: (await import("@assets/areas/Map_RanalonBase.png")).default,
    markers: [
        { "name": "Heavy Sack", type: MarkerType.Object, "positions": [[241, 701]] },
        { "name": "Storage Chest", "type": MarkerType.Storage, "positions": [[661, 461], [812, 304]]},
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
        },
        { "name": "Torrri", "type": MarkerType.Boss, "positions": [[238, 732]] },
        { "name": "Storage Chest", "type": MarkerType.Treasure, "positions": [[862, 377]], "description": "Requires a Ranalon Key." },

    ],
    group: Area.SerbuleHills,
};

export default RanalonBaseData;
