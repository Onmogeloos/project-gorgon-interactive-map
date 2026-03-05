import { Area, AreaData } from "@localtypes/Map";

const PovusCavesAktaariCaveData: AreaData = {
    name: "Povus Caves Aktaari Cave",
    slug: "povuscavesaktaaricave",
    description: "",
    imageUrl: (await import("@assets/areas/Map_PovusCaves_AktaariCave.png")).default,
    markers: [],
    group: Area.Povus,
};

export default PovusCavesAktaariCaveData;
