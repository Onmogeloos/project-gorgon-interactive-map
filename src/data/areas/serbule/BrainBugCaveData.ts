import { Area, MapData } from "@localtypes/Map";

const BrainBugCaveData: MapData = {
    name: "Brain Bug Cave",
    slug: "brainbugcave",
    description: "",
    aspectRatio: 512/307,
    imageUrl: (await import("@assets/areas/Map_BrainBugCave.png")).default,
    markers: [],
    group: Area.Serbule,
};

export default BrainBugCaveData;
