import { Area, GlobalMapData } from "@localtypes/Map";

const GazlukData: GlobalMapData[Area.Gazluk] = {
    name: "Gazluk",
    slug: "gazluk",
    description: "",
    group: Area.Gazluk,
    imageUrl: (await import("@assets/areas/Map_AreaGazluk.png")).default,
    markers: [],
};

export default GazlukData;
