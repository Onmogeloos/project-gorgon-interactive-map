import { AreaData, Area, MarkerType } from "@localtypes/Map";

const data: AreaData = {
    name: "Eltibule",
    slug: "eltibule",
    description: "",
    group: Area.Eltibule,
    imageUrl: (await import("@assets/areas/Map_AreaEltibule.png")).default,
    aspectRatio: 2048 / 2033,
    minLevel: 20,
    maxLevel: 50,
    markers: [
        {
            name: "Pudding",
            type: MarkerType.Boss,
            positions: [
                [480.3125, 880.1875]
            ]
        },
        {
            "name": "Dark Chapel Statue",
            "type": MarkerType.Statue,
            "positions": [
                [857.5, 222.375],
                [414.25, 66.375],
                [110.5, 252.5],
                [120.125, 636.375],
                [191.875, 825.5],
                [580.6875, 934.125],
                [862.6875, 877.5],
                [929.03125, 583],
            ]
        },
        {
            "name": "Jumjab",
            "type": MarkerType.NPC,
            "positions": [
                [
                    919.75,
                    307.5
                ]
            ]
        },
        {
            "name": "Teleport Platform",
            "type": MarkerType.TeleportPlatform,
            "positions": [
                [
                    780.8125,
                    179.375
                ],
                [583.0625, 311.9375],
                [591.375, 99.28125],
                [946, 482.625],
                [538.4375, 822.75]
            ]
        },
        {
            name: "Animal Nexus",
            type: MarkerType.Location,
            positions: [
                [932, 692.6875]
            ]
        },

        {
            "name": "Orange tree",
            "type": MarkerType.FruitTree,
            description: `
            Min foraging level: 20
            `,
            "positions": [
                [
                    484,
                    522.5625
                ],
                [
                    774.625,
                    498.5
                ],
                [
                    759.625,
                    414
                ],
                [485, 509.75],
                [496, 508],
                [372.125, 510.75],
                [320.5, 522.375],
                [292.125, 536.25],
                [293.625, 522.25]
            ]
        },
        { "name": "Yasinda", "type": MarkerType.NPC, "positions": [[948.125, 459]] },
        {
            "name": "Red Wing Casino", type: MarkerType.ZonePortal, "positions": [[122.375, 135]],
            data: { leadsTo: Area.Casino }
        },
        { "name": "Secret Chest", type: MarkerType.Treasure, "positions": [[599, 599.75]] },
        { "name": "Statue", type: MarkerType.Statue, "positions": [[335, 478.375]] },
        {
            "name": "Eltibule Keep",
            "type": MarkerType.Location,
            "positions": [[585.5, 639]]
        },
        {
            "name": "Hogan's Keep Basement",
            "type": MarkerType.Entrance,
            "positions": [[975.0625, 487.3125]],
            data: { leadsTo: Area.HogansKeepBasement }
        },
        {
            "name": "Path to Kur Mountains",
            "type": MarkerType.ZonePortal,
            "positions": [[994.25, 485.25]],
            data: { leadsTo: Area.KurMountains }
        },
        {
            "name": "Waterfall",
            "type": MarkerType.Location,
            "positions": [[603, 36]]
        },
        {
            "name": "Boarded up Basement",
            "type": MarkerType.Entrance,
            "positions": [[311.125, 264.125]],
            data: { leadsTo: Area.BoardedUpBasement }
        },
        {
            "name": "Path to Serbule",
            "type": MarkerType.ZonePortal,
            "positions": [[13.5, 614]],
            data: { leadsTo: Area.Serbule }
        },
        {
            "name": "Goblin Dungeon",
            "type": MarkerType.Entrance,
            "positions": [[592.0625, 624.1875]],
            data: { leadsTo: Area.GoblinDungeonTopFloor }
        },
        {
            name: "Cat altar",
            type: MarkerType.Altar,
            positions: [[867.625, 739.5]],
        },
        {
            name: "Fugorg",
            type: MarkerType.Boss,
            positions: [[341.75, 475.4375]],
        },
        {
            name: "House",
            type: MarkerType.Location,
            positions: [[370.6875, 596.9375]],
        },
        { name: "Helena Veilmoor", type: MarkerType.NPC, positions: [[924.125, 455.1875]] },
        { name: "Jesina", type: MarkerType.NPC, positions: [[580.9375, 322.1875]] },
        { name: "Sie Antry", type: MarkerType.NPC, positions: [[580.09375, 321.28125]] },
        { name: "Goblin Dungeon Exit", type: MarkerType.Entrance, positions: [[633.09375, 408.28125]], data: { leadsTo: Area.GoblinDungeon } },

        { name: "Eltibule Crypt", type: MarkerType.Entrance, positions: [[534.25, 638.5625]], data: { leadsTo: Area.EltibuleCrypt } },
    ],
};

export default data;