import { Area, MapData } from "@localtypes/Map";

const BoardedUpBasementData: MapData = {
    name: "Boarded Up Basement",
    slug: "boardedupbasement",
    description: "",
    aspectRatio: 205/512,
    imageUrl: (await import("@assets/areas/Map_BoardedUpBasement.png")).default,
    markers: [],
    group: Area.Eltibule,
};

export default BoardedUpBasementData;
