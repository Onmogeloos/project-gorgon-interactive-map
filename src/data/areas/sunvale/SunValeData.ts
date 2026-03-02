import { Area, GlobalMapData } from "@localtypes/Map";

const SunValeData: GlobalMapData[Area.SunVale] = {
    name: "Sun Vale",
    slug: "sunvale",
    description: "",
    group: Area.SunVale,
    minLevel: 30,
    maxLevel: 45,
    imageUrl: (await import("@assets/areas/Map_AreaSunVale.png")).default,
    markers: [],
};

export default SunValeData;
