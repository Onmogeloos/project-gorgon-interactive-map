import { GlobalMapData, Area, MarkerType } from "@localtypes/Map";

const FaeRealmData: GlobalMapData[Area.FaeRealm] = {
    name: "Fae Realm",
    slug: "faerealm",
    description: "",
    group: Area.FaeRealm,
    imageUrl: (await import("@assets/areas/Map_AreaFaeRealm1.png")).default,
    markers: [],
};

export default FaeRealmData;
