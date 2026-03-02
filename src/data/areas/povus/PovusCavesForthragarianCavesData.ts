import { Area, AreaData } from "@localtypes/Map";

const PovusCavesForthragarianCavesData: AreaData = {
    name: "Povus Caves Forthragarian Caves",
    slug: "povuscavesforthragariancaves",
    description: "",
    imageUrl: (await import("@assets/areas/Map_PovusCaves_ForthragarianCaves.png")).default,
    markers: [],
    group: Area.Povus,
};

export default PovusCavesForthragarianCavesData;
