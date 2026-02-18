import { GlobalMapData, Area, MarkerType } from "@localtypes/Map";

const VidariaData: GlobalMapData[Area.Vidaria] = {
    name: "Vidaria",
    slug: "vidaria",
    description: "",
    aspectRatio: 1890/2048,
    group: Area.Statehelm,
    imageUrl: (await import("@assets/areas/Map_Vidaria.png")).default,
    markers: [],
};

export default VidariaData;
