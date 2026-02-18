import { Area, MapData } from "@localtypes/Map";

const PovusCavesAktaariCaveData: MapData = {
    name: "Povus Caves Aktaari Cave",
    slug: "povuscavesaktaaricave",
    description: "",
    imageUrl: (await import("@assets/areas/Map_PovusCaves_AktaariCave.png")).default,
    markers: [],
    group: Area.Povus,
};

export default PovusCavesAktaariCaveData;
