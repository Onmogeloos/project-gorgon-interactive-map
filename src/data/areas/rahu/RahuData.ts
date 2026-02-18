import { GlobalMapData, Area, MarkerType } from "@localtypes/Map";

const RahuData: GlobalMapData[Area.Rahu] = {
    name: "Rahu",
    slug: "rahu",
    description: "",
    group: Area.Rahu,
    aspectRatio: 1720/1772,
    imageUrl: (await import("@assets/areas/Map_AreaRahu.png")).default,
    markers: [],
};

export default RahuData;
