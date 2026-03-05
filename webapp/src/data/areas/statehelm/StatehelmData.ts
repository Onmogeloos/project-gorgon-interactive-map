import { Area, GlobalMapData } from "@localtypes/Map";

const StatehelmData: GlobalMapData[Area.Statehelm] = {
    name: "Statehelm",
    slug: "statehelm",
    description: "",
    minLevel: 95,
    maxLevel: 100,
    group: Area.Statehelm,
    imageUrl: (await import("@assets/areas/Map_AreaStatehelm.png")).default,
    markers: [],
};

export default StatehelmData;
