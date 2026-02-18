import { Area, MapData } from "@localtypes/Map";

const BoardedUpBasementData: MapData = {
    name: "Boarded Up Basement",
    slug: "boardedupbasement",
    description: "",
    imageUrl: (await import("@assets/areas/Map_BoardedUpBasement.png")).default,
    markers: [],
    group: Area.Eltibule,
};

export default BoardedUpBasementData;
