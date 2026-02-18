import { Area, MapData } from "@localtypes/Map";

const PovusCavesLevel4Data: MapData = {
    name: "Povus Caves Level 4",
    slug: "povuscaveslevel4",
    description: "",
    aspectRatio: 1500/700,
    imageUrl: (await import("@assets/areas/Map_PovusCaves_Level4.png")).default,
    markers: [],
    group: Area.Povus,
};

export default PovusCavesLevel4Data;
