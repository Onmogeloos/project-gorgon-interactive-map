import { Area, MapData } from "@localtypes/Map";

const BorghildData: MapData = {
    name: "Borghild",
    slug: "borghild",
    description: "",
    imageUrl: (await import("@assets/areas/Map_Borghild.png")).default,
    markers: [],
    group: Area.Serbule,
};

export default BorghildData;
