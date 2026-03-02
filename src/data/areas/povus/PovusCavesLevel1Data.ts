import { Area, AreaData } from "@localtypes/Map";

const PovusCavesLevel1Data: AreaData = {
    name: "Povus Caves Level 1",
    slug: "povuscaveslevel1",
    description: "",
    aspectRatio: 2000/1720,
    imageUrl: (await import("@assets/areas/Map_PovusCaves_Level1.png")).default,
    markers: [],
    group: Area.Povus,
};

export default PovusCavesLevel1Data;
