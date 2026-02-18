import { Area, MapData } from "@localtypes/Map";

const PovusCavesForthragarianCavesData: MapData = {
    name: "Povus Caves Forthragarian Caves",
    slug: "povuscavesforthragariancaves",
    description: "",
    imageUrl: (await import("@assets/areas/Map_PovusCaves_ForthragarianCaves.png")).default,
    markers: [],
    group: Area.Povus,
};

export default PovusCavesForthragarianCavesData;
