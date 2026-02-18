import { GlobalMapData, Area, MarkerType } from "@localtypes/Map";

const PovusData: GlobalMapData[Area.Povus] = {
    name: "Povus",
    slug: "povus",
    description: "",
    aspectRatio: 1890/2048,
    group: Area.Povus,
    imageUrl: (await import("@assets/areas/Map_Povus.png")).default,
    markers: [],
};

export default PovusData;
