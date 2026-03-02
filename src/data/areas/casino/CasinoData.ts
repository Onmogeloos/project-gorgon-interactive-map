import { Area, AreaData } from "@localtypes/Map";

const CasinoData: AreaData = {
    name: "Casino",
    slug: "casino",
    description: "",
    minLevel: 30,
    maxLevel: 50,
    imageUrl: (await import("@assets/areas/Map_AreaCasino.png")).default,
    markers: [],
    group: Area.Casino,
};

export default CasinoData;
