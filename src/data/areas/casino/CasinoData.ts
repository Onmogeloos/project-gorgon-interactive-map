import { Area, MapData } from "@localtypes/Map";

const CasinoData: MapData = {
    name: "Casino",
    slug: "casino",
    description: "",
    imageUrl: (await import("@assets/areas/Map_AreaCasino.png")).default,
    markers: [],
    group: Area.Casino,
};

export default CasinoData;
