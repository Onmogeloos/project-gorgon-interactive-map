import { MapData, Area, MarkerType } from "@localtypes/Map";

const data: MapData = {
    name: "Eltibule",
    slug: "eltibule",
    description: "",
    group: Area.Eltibule,
    imageUrl: (await import("@assets/areas/Map_AreaEltibule.png")).default,
    aspectRatio: 2048/2033,
    markers: [
        {
            name: "Pudding",
            type: MarkerType.Boss,
            positions: [
                [480.3125, 880.1875]
            ]
        },
    ],
};

export default data;