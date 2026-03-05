import { Area, AreaData } from "@localtypes/Map";

const YetiCaveData: AreaData = {
    name: "Yeti Cave",
    slug: "yeticave",
    description: "",
    aspectRatio: 333/1024,
    imageUrl: (await import("@assets/areas/Map_YetiCave.png")).default,
    markers: [],
    group: Area.KurMountains,
};

export default YetiCaveData;
