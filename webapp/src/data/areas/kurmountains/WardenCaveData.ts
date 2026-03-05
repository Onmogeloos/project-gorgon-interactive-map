import { Area, AreaData, MarkerType, } from "@localtypes/Map";

const WardenCaveData: AreaData = {
    name: "Warden Cave",
    slug: "wardencave",
    description: "",
    imageUrl: (await import("@assets/areas/Map_WardenCave.png")).default,
    markers: [
        { name: "Exit to Kur Mountains", type: MarkerType.Entrance, positions: [[656, 744.5],], data: { leadsTo: Area.KurMountains } },
        // { "name": "Warden Alert Beacon", "type": MarkerType.Object, "positions": [[860, 150]] },
        { "name": "Pickles", "type": MarkerType.NPC, "positions": [[854, 300]] },
        // { "name": "Work Stove", "type": MarkerType.Object, "positions": [[750, 160]] },
        { "name": "Warden Storage", "type": MarkerType.Treasure, "positions": [[783, 429]] },
        { "name": "Rubi", "type": MarkerType.NPC, "positions": [[703.5, 559.5]] },
        { "name": "Cassie", "type": MarkerType.NPC, "positions": [[674.5, 579]] },
        { "name": "Campfire", "type": MarkerType.Campfire, "positions": [ [707, 599]] },
        { "name": "Barnaby", "type": MarkerType.NPC, "positions": [[677.5, 611]] },
        { "name": "Milton", "type": MarkerType.NPC, "positions": [[595.5, 589.5]] },
        { "name": "Tangle", "type": MarkerType.NPC, "positions": [ [642.5, 536]] },
        { "name": "Sugar", "type": MarkerType.NPC, "positions": [[632, 704.5]] },
    ],
    group: Area.KurMountains,
};

export default WardenCaveData;
