import { Area, AreaData, MarkerType } from "@localtypes/Map";

const GoblinDungeonTopFloorData: AreaData = {
    name: "Goblin Dungeon Top Floor",
    slug: "goblindungeontopfloor",
    description: "",
    aspectRatio: 800 / 800,
    imageUrl: (await import("@assets/areas/Map_GoblinDungeon_TopFloor.png")).default,
    markers: [
        { "name": "Dwarven Chest", "type": MarkerType.Storage, "positions": [[154, 844]] },
    ],
    group: Area.Eltibule,
};

export default GoblinDungeonTopFloorData;
