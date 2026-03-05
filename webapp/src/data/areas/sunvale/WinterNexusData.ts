import { Area, AreaData } from "@localtypes/Map";

const WinterNexusData: AreaData = {
    name: "Winter Nexus",
    slug: "winternexus",
    description: "",
    imageUrl: (await import("@assets/areas/Map_WinterNexus.png")).default,
    markers: [],
    group: Area.SunVale,
};

export default WinterNexusData;
