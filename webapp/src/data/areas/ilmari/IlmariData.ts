import { Area, GlobalMapData } from "@localtypes/Map";

const IlmariData: GlobalMapData[Area.Ilmari] = {
    name: "Ilmari",
    slug: "ilmari",
    description: "",
    group: Area.Ilmari,
    minLevel: 50,
    maxLevel: 60,
    imageUrl: (await import("@assets/areas/Map_AreaDesert1.png")).default,
    markers: [],
};

export default IlmariData;
