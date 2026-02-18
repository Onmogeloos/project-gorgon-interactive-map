import { Area, MapData } from "@localtypes/Map";

const GoblinDungeonData: MapData = {
    name: "Goblin Dungeon",
    slug: "goblindungeon",
    description: "",
    aspectRatio: 398/1024,
    imageUrl: (await import("@assets/areas/Map_GoblinDungeon.png")).default,
    markers: [],
    group: Area.Eltibule,
};

export default GoblinDungeonData;
