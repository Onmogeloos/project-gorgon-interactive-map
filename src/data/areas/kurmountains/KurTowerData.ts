import { Area, MapData } from "@localtypes/Map";

const KurTowerData: MapData = {
    name: "Kur Tower",
    slug: "kurtower",
    description: "",
    imageUrl: (await import("@assets/areas/Map_KurTower.png")).default,
    markers: [],
    group: Area.KurMountains,
};

export default KurTowerData;
