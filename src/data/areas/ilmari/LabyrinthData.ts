import { Area, AreaData } from "@localtypes/Map";

const LabyrinthData: AreaData = {
    name: "Labyrinth",
    slug: "labyrinth",
    description: "",
    imageUrl: (await import("@assets/areas/Map_Labyrinth.png")).default,
    markers: [],
    group: Area.Ilmari,
};

export default LabyrinthData;
