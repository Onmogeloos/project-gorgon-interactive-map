import { Area, AreaData } from "@localtypes/Map";

const GoblinDungeonTopFloorData: AreaData = {
    name: "Goblin Dungeon Top Floor",
    slug: "goblindungeontopfloor",
    description: "",
    aspectRatio: 800/800,
    imageUrl: (await import("@assets/areas/Map_GoblinDungeon_TopFloor.png")).default,
    markers: [],
    group: Area.Eltibule,
};

export default GoblinDungeonTopFloorData;
