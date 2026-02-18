import { Area, MapData } from "@localtypes/Map";

const SerbuleSewerData: MapData = {
    name: "Serbule Sewer",
    slug: "serbulesewer",
    description: "",
    imageUrl: (await import("@assets/areas/Map_SerbuleSewer.png")).default,
    markers: [],
    group: Area.Serbule,
};

export default SerbuleSewerData;
