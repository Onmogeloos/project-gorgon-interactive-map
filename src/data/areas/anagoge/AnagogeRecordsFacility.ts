import { Area, MapData, MarkerType } from "@localtypes/Map";

const data: MapData = {
    name: "Anagoge Records Facility",
    slug: "anagoge-records-facility",
    description: "",
    group: Area.AnagogeIsland,
    imageUrl: (await import("@assets/areas/Map_NewbieIslandDungeon.png")).default,
    markers: [
    ]
};

export default data;