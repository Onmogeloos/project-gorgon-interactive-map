import { Area, MapData } from "@localtypes/Map";

const RahuSewerData: MapData = {
    name: "Rahu Sewer",
    slug: "rahusewer",
    description: "",
    imageUrl: (await import("@assets/areas/Map_RahuSewer.png")).default,
    markers: [],
    group: Area.Rahu,
};

export default RahuSewerData;
