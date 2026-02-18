import { Area, MapData } from "@localtypes/Map";

const LabyrinthData: MapData = {
    name: "Labyrinth",
    slug: "labyrinth",
    description: "",
    imageUrl: (await import("@assets/areas/Map_Labyrinth.png")).default,
    markers: [],
    group: Area.Ilmari,
};

export default LabyrinthData;
