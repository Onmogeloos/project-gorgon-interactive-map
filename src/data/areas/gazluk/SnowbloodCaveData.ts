import { Area, MapData } from "@localtypes/Map";

const SnowbloodCaveData: MapData = {
    name: "Snowblood Cave",
    slug: "snowbloodcave",
    description: "",
    imageUrl: (await import("@assets/areas/Map_SnowbloodCave.png")).default,
    markers: [],
    group: Area.Gazluk,
};

export default SnowbloodCaveData;
