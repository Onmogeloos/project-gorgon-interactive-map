import { Area, AreaData } from "@localtypes/Map";

const PovusCavesNightmareCavesData: AreaData = {
    name: "Povus Caves Nightmare Caves",
    slug: "povuscavesnightmarecaves",
    description: "",
    imageUrl: (await import("@assets/areas/Map_PovusCaves_NightmareCaves.png")).default,
    markers: [],
    group: Area.Povus,
};

export default PovusCavesNightmareCavesData;
