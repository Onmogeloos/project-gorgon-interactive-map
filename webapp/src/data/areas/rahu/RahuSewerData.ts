import { Area, AreaData } from "@localtypes/Map";

const RahuSewerData: AreaData = {
    name: "Rahu Sewer",
    slug: "rahusewer",
    description: "",
    imageUrl: (await import("@assets/areas/Map_RahuSewer.png")).default,
    markers: [],
    group: Area.Rahu,
};

export default RahuSewerData;
