import { Area, AreaData } from "@localtypes/Map";

const SunValeCave3Data: AreaData = {
    name: "Sun Vale Cave 3",
    slug: "sunvalecave3",
    description: "",
    imageUrl: (await import("@assets/areas/Map_SunValeCave3.png")).default,
    markers: [],
    group: Area.SunVale,
};

export default SunValeCave3Data;
