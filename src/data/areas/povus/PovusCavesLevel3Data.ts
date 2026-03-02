import { Area, AreaData } from "@localtypes/Map";

const PovusCavesLevel3Data: AreaData = {
    name: "Povus Caves Level 3",
    slug: "povuscaveslevel3",
    description: "",
    imageUrl: (await import("@assets/areas/Map_PovusCaves_Level3.png")).default,
    markers: [],
    group: Area.Povus,
};

export default PovusCavesLevel3Data;
