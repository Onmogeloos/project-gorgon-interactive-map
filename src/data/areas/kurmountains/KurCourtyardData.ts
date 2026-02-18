import { Area, MapData } from "@localtypes/Map";

const KurCourtyardData: MapData = {
    name: "Kur Courtyard",
    slug: "kurcourtyard",
    description: "",
    imageUrl: (await import("@assets/areas/Map_KurCourtyard.png")).default,
    markers: [],
    group: Area.KurMountains,
};

export default KurCourtyardData;
