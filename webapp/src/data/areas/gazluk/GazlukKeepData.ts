import { Area, GlobalMapData } from "@localtypes/Map";

const GazlukData: GlobalMapData[Area.Gazluk] = {
    name: "Gazluk Keep 1",
    slug: "gazlukkeep",
    description: "",
    group: Area.Gazluk,
    imageUrl: (await import("@assets/areas/FortGazluk1.png")).default,
    markers: [],
};

export default GazlukData;
