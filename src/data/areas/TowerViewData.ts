import { Area, MapData } from "@localtypes/Map";

const TowerViewData: MapData = {
    name: "Tower View",
    slug: "towerview",
    description: "",
    imageUrl: (await import("@assets/areas/Map_TowerView.png")).default,
    markers: [],
    group: Area.TowerView,
};

export default TowerViewData;
