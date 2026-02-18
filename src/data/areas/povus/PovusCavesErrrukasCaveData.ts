import { Area, MapData } from "@localtypes/Map";

const PovusCavesErrrukasCaveData: MapData = {
    name: "Povus Caves Errruka's Cave",
    slug: "povuscaveserrrukascave",
    description: "",
    imageUrl: (await import("@assets/areas/Map_PovusCaves_ErrrukasCave.png")).default,
    markers: [],
    group: Area.Povus,
};

export default PovusCavesErrrukasCaveData;
