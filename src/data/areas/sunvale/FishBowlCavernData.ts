import { Area, AreaData, MarkerType } from "@localtypes/Map";

const SunValeCave1Data: AreaData = {
    name: "Fish Bowl Cavern",
    slug: "fishbowlcavern",
    description: "",
    minLevel: 35,
    maxLevel: 40,
    imageUrl: (await import("@assets/areas/Map_SunValeCave1.png")).default,
    markers: [
        { name: "Exit to Sun Vale", type: MarkerType.Entrance, positions: [[804.75, 178.125]], data: { leadsTo: Area.SunVale } },
    ],
    group: Area.SunVale,
};

export default SunValeCave1Data;
