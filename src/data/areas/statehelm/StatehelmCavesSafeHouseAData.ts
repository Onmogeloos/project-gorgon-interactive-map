import { Area, AreaData } from "@localtypes/Map";

const StatehelmCavesSafeHouseAData: AreaData = {
    name: "Statehelm Caves Safe House A",
    slug: "statehelmcavessafehousea",
    description: "",
    imageUrl: (await import("@assets/areas/Map_StatehelmCaves_SafeHouseA.png")).default,
    markers: [],
    group: Area.Statehelm,
};

export default StatehelmCavesSafeHouseAData;
