import { Area, MapData } from "@localtypes/Map";

const RanalonBaseData: MapData = {
    name: "Ranalon Base",
    slug: "ranalonbase",
    description: "",
    aspectRatio: 1024/838,
    imageUrl: (await import("@assets/areas/Map_RanalonBase.png")).default,
    markers: [],
    group: Area.SerbuleHills,
};

export default RanalonBaseData;
