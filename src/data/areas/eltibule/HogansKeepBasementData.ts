import { Area, MapData } from "@localtypes/Map";

const HogansKeepBasementData: MapData = {
    name: "Hogan's Keep Basement",
    slug: "hoganskeepbasement",
    description: "",
    imageUrl: (await import("@assets/areas/Map_HogansKeepBasement.png")).default,
    markers: [],
    group: Area.Eltibule,
};

export default HogansKeepBasementData;
