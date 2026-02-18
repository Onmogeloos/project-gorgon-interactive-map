import { Area, MapData } from "@localtypes/Map";

const WinterNexusData: MapData = {
    name: "Winter Nexus",
    slug: "winternexus",
    description: "",
    imageUrl: (await import("@assets/areas/Map_WinterNexus.png")).default,
    markers: [],
    group: Area.SunVale,
};

export default WinterNexusData;
