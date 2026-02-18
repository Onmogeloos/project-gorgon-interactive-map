import { MapData, Area, MarkerType } from "@localtypes/Map";

const data: MapData = {
    name: "Eltibule",
    slug: "eltibule",
    description: "",
    group: Area.Eltibule,
    imageUrl: (await import("@assets/areas/Map_AreaEltibule.png")).default,
    markers: [
        {
            name: "Pudding",
            type: MarkerType.Boss,
            position: [
                [480.3125, 880.1875]
            ]
        },
    ],
};

export default data;