import { GlobalMapData, Area, MarkerType } from "@localtypes/Map";

const KurMountainsData: GlobalMapData[Area.KurMountains] = {
    name: "Kur Mountains",
    slug: "kurmountains",
    description: "",
    group: Area.KurMountains,
    minLevel: 30,
    maxLevel: 50,
    imageUrl: (await import("@assets/areas/Map_AreaKurMountains.png")).default,
    markers: [],
};

export default KurMountainsData;
