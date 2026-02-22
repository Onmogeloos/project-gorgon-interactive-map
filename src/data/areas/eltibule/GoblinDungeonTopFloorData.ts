import { Area, MapData } from "@localtypes/Map";

const GoblinDungeonTopFloorData: MapData = {
    name: "Goblin Dungeon Top Floor",
    slug: "goblindungeontopfloor",
    description: "",
    aspectRatio: 800/800,
    imageUrl: (await import("@assets/areas/Map_GoblinDungeon_TopFloor.png")).default,
    markers: [],
    group: Area.Eltibule,
};

export default GoblinDungeonTopFloorData;
