import { Area, MapData } from "@localtypes/Map";

const YetiCaveData: MapData = {
    name: "Yeti Cave",
    slug: "yeticave",
    description: "",
    imageUrl: (await import("@assets/areas/Map_YetiCave.png")).default,
    markers: [],
    group: Area.KurMountains,
};

export default YetiCaveData;
