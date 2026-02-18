import { Area, MapData } from "@localtypes/Map";

const WolfCaveData: MapData = {
    name: "Wolf Cave",
    slug: "wolfcave",
    description: "",
    aspectRatio: 819/1024,
    imageUrl: (await import("@assets/areas/Map_WolfCave.png")).default,
    markers: [],
    group: Area.KurMountains,
};

export default WolfCaveData;
