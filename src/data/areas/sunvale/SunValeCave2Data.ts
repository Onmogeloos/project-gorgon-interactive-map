import { Area, AreaData } from "@localtypes/Map";

const SunValeCave2Data: AreaData = {
    name: "Sun Vale Cave 2",
    slug: "sunvalecave2",
    description: "",
    imageUrl: (await import("@assets/areas/Map_SunValeCave2.png")).default,
    markers: [],
    group: Area.SunVale,
};

export default SunValeCave2Data;
