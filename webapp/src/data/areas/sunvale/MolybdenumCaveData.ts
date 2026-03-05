import { Area, AreaData, MarkerType } from "@localtypes/Map";

const SunValeCave2Data: AreaData = {
    name: "Molybdenum Mine",
    slug: "molybdenummine",
    description: "",
    minLevel: 30,
    maxLevel: 40,
    imageUrl: (await import("@assets/areas/Map_SunValeCave2.png")).default,
    markers: [
        { name: "Exit to Sun Vale", type: MarkerType.Entrance, positions: [[539, 144]], data: { leadsTo: Area.SunVale } },
    ],
    group: Area.SunVale,
};

export default SunValeCave2Data;
