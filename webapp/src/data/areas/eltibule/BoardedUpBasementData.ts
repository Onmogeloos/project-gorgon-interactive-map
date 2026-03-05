import { Area, AreaData } from "@localtypes/Map";

const BoardedUpBasementData: AreaData = {
    name: "Boarded Up Basement",
    slug: "boardedupbasement",
    description: "",
    aspectRatio: 205/512,
    imageUrl: (await import("@assets/areas/Map_BoardedUpBasement.png")).default,
    markers: [],
    group: Area.Eltibule,
};

export default BoardedUpBasementData;
