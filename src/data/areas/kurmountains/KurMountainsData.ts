import { GlobalMapData, Area, MarkerType } from "@localtypes/Map";

const KurMountainsData: GlobalMapData[Area.KurMountains] = {
    name: "Kur Mountains",
    slug: "kurmountains",
    description: "",
    group: Area.KurMountains,
    imageUrl: (await import("@assets/areas/Map_AreaKurMountains.png")).default,
    markers: [],
};

export default KurMountainsData;
