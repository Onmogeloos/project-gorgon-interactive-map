import { Area, AreaData } from "@localtypes/Map";

const SunValeCave1Data: AreaData = {
    name: "Sun Vale Cave 1",
    slug: "sunvalecave1",
    description: "",
    imageUrl: (await import("@assets/areas/Map_SunValeCave1.png")).default,
    markers: [],
    group: Area.SunVale,
};

export default SunValeCave1Data;
