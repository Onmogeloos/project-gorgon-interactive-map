import { Area, MapData } from "@localtypes/Map";

const RanalonBaseData: MapData = {
    name: "Ranalon Base",
    slug: "ranalonbase",
    description: "",
    imageUrl: (await import("@assets/areas/Map_RanalonBase.png")).default,
    markers: [],
    group: Area.SerbuleHills,
};

export default RanalonBaseData;
