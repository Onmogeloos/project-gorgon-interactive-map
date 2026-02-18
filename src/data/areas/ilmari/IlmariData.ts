import { Area, GlobalMapData } from "@localtypes/Map";

const IlmariData: GlobalMapData[Area.Ilmari] = {
    name: "Ilmari",
    slug: "ilmari",
    description: "",
    group: Area.Ilmari,
    imageUrl: (await import("@assets/areas/Map_AreaDesert1.png")).default,
    markers: [],
};

export default IlmariData;
