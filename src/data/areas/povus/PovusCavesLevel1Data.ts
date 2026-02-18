import { Area, MapData } from "@localtypes/Map";

const PovusCavesLevel1Data: MapData = {
    name: "Povus Caves Level 1",
    slug: "povuscaveslevel1",
    description: "",
    imageUrl: (await import("@assets/areas/Map_PovusCaves_Level1.png")).default,
    markers: [],
    group: Area.Povus,
};

export default PovusCavesLevel1Data;
