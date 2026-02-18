import { Area, MapData } from "@localtypes/Map";

const SpiderCaveData: MapData = {
    name: "Spider Cave",
    slug: "spidercave",
    description: "",
    group: Area.AnagogeIsland,
    imageUrl: (await import("@assets/areas/Map_SpiderCave.png")).default,
    markers: [],
};

export default SpiderCaveData;
