import { Area, GlobalMapData, MarkerType } from "@localtypes/Map";

const VidariaData: GlobalMapData[Area.Vidaria] = {
    name: "Vidaria",
    slug: "vidaria",
    description: "",
    aspectRatio: 1890/2048,
    group: Area.Vidaria,
    minLevel: 90,
    maxLevel: 95,
    imageUrl: (await import("@assets/areas/Map_Vidaria.png")).default,
    markers: [
        {"name":"Teleportation Circle","type":MarkerType.TeleportPlatform,"positions":[[153.6437814365866,358.978931298745]]}
    ],
};

export default VidariaData;
