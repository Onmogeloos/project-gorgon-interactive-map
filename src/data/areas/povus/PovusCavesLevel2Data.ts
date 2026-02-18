import { Area, MapData } from "@localtypes/Map";

const PovusCavesLevel2Data: MapData = {
    name: "Povus Caves Level 2",
    slug: "povuscaveslevel2",
    description: "",
    imageUrl: (await import("@assets/areas/Map_PovusCaves_Level2.png")).default,
    markers: [],
    group: Area.Povus,
};

export default PovusCavesLevel2Data;
