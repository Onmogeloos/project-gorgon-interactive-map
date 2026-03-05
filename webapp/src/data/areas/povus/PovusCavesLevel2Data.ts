import { Area, AreaData } from "@localtypes/Map";

const PovusCavesLevel2Data: AreaData = {
    name: "Povus Caves Level 2",
    slug: "povuscaveslevel2",
    description: "",
    imageUrl: (await import("@assets/areas/Map_PovusCaves_Level2.png")).default,
    markers: [],
    group: Area.Povus,
};

export default PovusCavesLevel2Data;
