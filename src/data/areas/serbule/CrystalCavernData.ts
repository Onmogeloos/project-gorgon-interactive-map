import { Area, AreaData, MarkerType } from "@localtypes/Map";

const CrystalCavernData: AreaData = {
    name: "Crystal Cavern",
    slug: "crystalcavern",
    description: "",
    aspectRatio: 236 / 512,
    imageUrl: (await import("@assets/areas/Map_CrystalCavern.png")).default,
    markers: [
        {
            "name": "Abandoned Storage Chest",
            "type": MarkerType.Object,
            "positions": [
                [948.75, 384.75]
            ]
        },
        {
            "name": "Maronesa",
            "type": MarkerType.Boss,
            "positions": [
                [
                    754.0392467689392,
                    669.0194251684647
                ]
            ]
        },
        { name: "Lore Book", type: MarkerType.Lore, positions: [[904, 397.75]] },
        { name: "Lore Book", type: MarkerType.Lore, positions: [[800, 515.5]] },
        { name: "Exit to Serbule", type: MarkerType.Entrance, positions: [[75.75, 391.5]], data: { leadsTo: Area.Serbule } },
    ],
    group: Area.Serbule,
};

export default CrystalCavernData;
