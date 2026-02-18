import { Area, MapData } from "@localtypes/Map";

const WolfCaveData: MapData = {
    name: "Wolf Cave",
    slug: "wolfcave",
    description: "",
    imageUrl: (await import("@assets/areas/Map_WolfCave.png")).default,
    markers: [],
    group: Area.KurMountains,
};

export default WolfCaveData;
