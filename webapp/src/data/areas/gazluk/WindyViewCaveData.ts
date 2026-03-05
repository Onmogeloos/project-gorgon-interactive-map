import { Area, AreaData } from "@localtypes/Map";

const WindyViewCaveData: AreaData = {
    name: "Windy View Cave",
    slug: "windyviewcave",
    description: "",
    aspectRatio: 1024/646,
    imageUrl: (await import("@assets/areas/Map_WindyViewCave.png")).default,
    markers: [],
    group: Area.Gazluk,
};

export default WindyViewCaveData;
