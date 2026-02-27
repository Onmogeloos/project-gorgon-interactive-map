import { Area, MapData, MarkerType } from "@localtypes/Map";

const EltibuleCryptData: MapData = {
    name: "Eltibule Crypt",
    slug: "eltibulecrypt",
    description: "",
    aspectRatio: 256/205,
    imageUrl: (await import("@assets/areas/Map_EltibuleCrypt.png")).default,
    markers: [
        { name: "James Eltibule", type: MarkerType.Boss, positions: [[585, 183]] },
        { name: "Serisa Eltibule", type: MarkerType.Boss, positions: [[585, 238]] },
        { name: "Exit to Eltibule", type: MarkerType.Entrance, positions: [[705.5, 813]], data: { leadsTo: Area.Eltibule } },
        { name: "Urn", type: MarkerType.Treasure, positions: [
            [240, 208],
            [240, 288],
            [240, 368],
            [240, 448],
            [240, 528],
            [240, 608],
        ] },
    ],
    group: Area.Eltibule,
};

export default EltibuleCryptData;
