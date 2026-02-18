import { Area, MapData } from "@localtypes/Map";

const StatehelmCavesSafeHouseAData: MapData = {
    name: "Statehelm Caves Safe House A",
    slug: "statehelmcavessafehousea",
    description: "",
    imageUrl: (await import("@assets/areas/Map_StatehelmCaves_SafeHouseA.png")).default,
    markers: [],
    group: Area.Statehelm,
};

export default StatehelmCavesSafeHouseAData;
