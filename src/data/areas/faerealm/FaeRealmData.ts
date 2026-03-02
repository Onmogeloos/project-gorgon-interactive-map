import { GlobalMapData, Area, MarkerType } from "@localtypes/Map";

const FaeRealmData: GlobalMapData[Area.FaeRealm] = {
    name: "Fae Realm",
    slug: "faerealm",
    description: "",
    group: Area.FaeRealm,
    minLevel: 70,
    maxLevel: 80,
    imageUrl: (await import("@assets/areas/Map_AreaFaeRealm1.png")).default,
    markers: [
        {
            name: "Agrashab",
            type: MarkerType.NPC,
            "positions": [
                [
                    940,
                    435
                ]
            ],
            description: `The god of trolls.`
        },
        {
            name: "Backfat",
            type: MarkerType.NPC,
            "positions": [
                [
                    932,
                    219
                ]
            ]
        },
        {
            name: "Bendith the Banished",
            type: MarkerType.NPC,
            "positions": [
                [
                    918,
                    207
                ]
            ]
        },
        {
            name: "Crelpin",
            type: MarkerType.NPC,
            "positions": [
                [
                    960,
                    184
                ]
            ]
        },
        {
            name: "Felmer",
            type: MarkerType.NPC,
            "positions": [
                [
                    963,
                    214
                ]
            ]
        },
        {
            name: "Floxie",
            type: MarkerType.NPC,
            "positions": [
                [
                    964,
                    172
                ]
            ]
        },
        {
            name: "Midge the Apothecary",
            type: MarkerType.NPC,
            "positions": [
                [
                    967,
                    192
                ]
            ]
        },
        {
            name: "Noita the Green",
            type: MarkerType.NPC,
            "positions": [
                [
                    933,
                    230
                ]
            ]
        },
        {
            name: "Pegast",
            type: MarkerType.NPC,
            "positions": [
                [
                    971,
                    207
                ]
            ]
        },
        {
            name: "Raina",
            type: MarkerType.NPC,
            "positions": [
                [
                    950,
                    201
                ]
            ]
        },
        {
            name: "Solgribue",
            type: MarkerType.NPC,
            "positions": [
                [
                    920,
                    228
                ]
            ]
        },
        {
            name: "Uriana",
            type: MarkerType.NPC,
            "positions": [
                [
                    628,
                    178
                ]
            ]
        },
        {
            name: "Shortcut to Sun Vale",
            type: MarkerType.ZonePortal,
            "positions": [
                [
                    937,
                    182
                ]
            ],
            data: { leadsTo: Area.SunVale }
        },
        {
            name: "Winter Nexus Portal",
            type: MarkerType.ZonePortal,
            "positions": [
                [
                    932,
                    242
                ]
            ],
            data: { leadsTo: Area.WinterNexus }
        },
        {
            name: "Meditation Pillar",
            type: MarkerType.MeditationPillar,
            "positions": [
                [
                    51,
                    480
                ],
                [
                    816,
                    607
                ],
                [
                    437,
                    220
                ],
                [
                    636,
                    570
                ],
                [
                    718,
                    832
                ],
                [
                    130,
                    740
                ]
            ]
        },
        {
            name: "Portal to The Wintertide",
            type: MarkerType.ZonePortal,
            "positions": [
                [
                    234,
                    861
                ]
            ],
            data: { leadsTo: Area.AnagogeIsland }
        },
        {
            name: "Fae Mollusc", type: MarkerType.Animal, positions: [
                [764.5, 71.25],
                [307, 335],
                [119, 475],
                [178.5, 738.5],
                [191, 836],
                [230, 921.5],
                [581.5, 705.5],
                [685, 463],
                [783.5, 919],
                [953.5, 844],
            ]
        },
        {
            name: "Shocking Droach", type: MarkerType.MiniBoss, positions: [
                [603, 266.25],
                [480, 459.5]
            ]
        },

        { name: "Fire Droach", type: MarkerType.MiniBoss, positions: [[205, 484.25], [328.5, 764]] },
        { name: "Ogamboe", type: MarkerType.NPC, positions: [[310.25, 650.75]] },
        { name: "Bloodhunter Bee", type: MarkerType.MiniBoss, positions: [[674, 652], [595.75, 916.5]] },
        { name: "Ancient Fire Elemental", type: MarkerType.Boss, positions: [[159, 158]] },
        { name: "Ancient Cold Elemental", type: MarkerType.Boss, positions: [[106.25, 839]] },
    ]
};

export default FaeRealmData;
