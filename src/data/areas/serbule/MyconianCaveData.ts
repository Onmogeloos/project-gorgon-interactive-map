import { Area, MapData } from "@localtypes/Map";

const MyconianCaveData: MapData = {
    name: "Myconian Cave",
    slug: "myconianCave",
    description: "",
    imageUrl: (await import("@assets/areas/Map_MyconianCave.png")).default,
    markers: [],
    group: Area.Serbule,
};

export default MyconianCaveData;
