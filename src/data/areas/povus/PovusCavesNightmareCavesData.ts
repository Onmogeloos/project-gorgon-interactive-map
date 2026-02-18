import { Area, MapData } from "@localtypes/Map";

const PovusCavesNightmareCavesData: MapData = {
    name: "Povus Caves Nightmare Caves",
    slug: "povuscavesnightmarecaves",
    description: "",
    imageUrl: (await import("@assets/areas/Map_PovusCaves_NightmareCaves.png")).default,
    markers: [],
    group: Area.Povus,
};

export default PovusCavesNightmareCavesData;
