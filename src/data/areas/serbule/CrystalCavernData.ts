import { Area, MapData, MarkerType } from "@localtypes/Map";

const CrystalCavernData: MapData = {
    name: "Crystal Cavern",
    slug: "crystalcavern",
    description: "",
    aspectRatio: 236 / 512,
    imageUrl: (await import("@assets/areas/Map_CrystalCavern.png")).default,
    markers: [
        {
            "name": "Dalvos's Storage Chest",
            "type": MarkerType.Object,
            "positions": [
                [
                    43.03924676893894,
                    395.01942516846475
                ]
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
        }
    ],
    group: Area.Serbule,
};

export default CrystalCavernData;
