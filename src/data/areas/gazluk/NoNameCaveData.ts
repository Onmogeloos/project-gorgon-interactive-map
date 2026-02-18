import { Area, MapData } from "@localtypes/Map";

const NoNameCaveData: MapData = {
    name: "No Name Cave",
    slug: "nonamecave",
    description: "",
    imageUrl: (await import("@assets/areas/Map_NoNameCave.png")).default,
    markers: [],
    group: Area.Gazluk,
};

export default NoNameCaveData;
