import { Area, AreaData, MarkerType } from "@localtypes/Map";

const SpiderCaveData: AreaData = {
    name: "Spider Cave",
    slug: "spidercave",
    description: "",
    group: Area.SerbuleHills,
    imageUrl: (await import("@assets/areas/Map_SpiderCave.png")).default,
    markers: [
        { name: "Megaspider", type: MarkerType.Boss, positions: [[624.5, 75.5]] },
        { name: "Battered Shield", type: MarkerType.Object, positions: [[522.5, 412.5]] },
        { name: "Campsite", type: MarkerType.Camp, positions: [[171.875, 730]] },
        { name: "Chest", type: MarkerType.Treasure, positions: [[298.625, 886.25]] },
        { name: "Serbule Hills Exit", type: MarkerType.Entrance, positions: [[388, 849]], data: { leadsTo: Area.SerbuleHills } },
        { name: "Anagoge Records Facility", type: MarkerType.Entrance, positions: [[14.5, 738]], data: { leadsTo: Area.NewbieIslandDungeon } },
    ],
};

export default SpiderCaveData;
