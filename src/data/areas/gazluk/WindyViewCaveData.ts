import { Area, MapData } from "@localtypes/Map";

const WindyViewCaveData: MapData = {
    name: "Windy View Cave",
    slug: "windyviewcave",
    description: "",
    imageUrl: (await import("@assets/areas/Map_WindyViewCave.png")).default,
    markers: [],
    group: Area.Gazluk,
};

export default WindyViewCaveData;
