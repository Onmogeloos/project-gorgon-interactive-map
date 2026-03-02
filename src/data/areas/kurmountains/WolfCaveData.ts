import { Area, AreaData } from "@localtypes/Map";

const WolfCaveData: AreaData = {
    name: "Wolf Cave",
    slug: "wolfcave",
    description: "",
    aspectRatio: 819/1024,
    imageUrl: (await import("@assets/areas/Map_WolfCave.png")).default,
    markers: [],
    group: Area.KurMountains,
};

export default WolfCaveData;
