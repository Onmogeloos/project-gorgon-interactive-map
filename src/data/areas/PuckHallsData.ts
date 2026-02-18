import { Area, MapData } from "@localtypes/Map";

const PuckHallsData: MapData = {
    name: "Puck Halls",
    slug: "puckhalls",
    description: "",
    imageUrl: (await import("@assets/areas/Map_PuckHalls.png")).default,
    markers: [],
    group: Area.PuckHalls,
};

export default PuckHallsData;
