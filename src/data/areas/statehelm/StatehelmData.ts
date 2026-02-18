import { GlobalMapData, Area, MarkerType } from "@localtypes/Map";

const StatehelmData: GlobalMapData[Area.Statehelm] = {
    name: "Statehelm",
    slug: "statehelm",
    description: "",
    group: Area.Statehelm,
    imageUrl: (await import("@assets/areas/Map_AreaStatehelm.png")).default,
    markers: [],
};

export default StatehelmData;
