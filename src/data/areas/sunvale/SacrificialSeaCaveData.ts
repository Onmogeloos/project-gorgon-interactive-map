import { Area, AreaData, MarkerType } from "@localtypes/Map";

const SunValeCave3Data: AreaData = {
    name: "Sacrificial Sea Cave",
    slug: "sacrificialseacave",
    description: "",
    minLevel: 40,
    maxLevel: 45,
    imageUrl: (await import("@assets/areas/Map_SunValeCave3.png")).default,
    markers: [
        { name: "Exit to Sun Vale", type: MarkerType.Entrance, positions: [[192.625, 287.25]], data: { leadsTo: Area.SunVale } },
    ],
    group: Area.SunVale,
};

export default SunValeCave3Data;
