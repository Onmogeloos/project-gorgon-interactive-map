import { Area, AreaData } from "@localtypes/Map";

const SpiderCaveData: AreaData = {
    name: "Spider Cave",
    slug: "spidercave",
    description: "",
    group: Area.SerbuleHills,
    imageUrl: (await import("@assets/areas/Map_SpiderCave.png")).default,
    markers: [],
};

export default SpiderCaveData;
