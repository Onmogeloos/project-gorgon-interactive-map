import { Area, AreaData, MarkerType } from "@localtypes/Map";

const HogansKeepBasementData: AreaData = {
    name: "Hogan's Keep Basement",
    slug: "hoganskeepbasement",
    description: "",
    imageUrl: (await import("@assets/areas/Map_HogansKeepBasement.png")).default,
    markers: [
        { name: "Eltibule Exit", type: MarkerType.Entrance, positions: [[843.75, 315.75],], data: { leadsTo: Area.Eltibule } },
        { name: "Ultashk", type: MarkerType.NPC, positions: [[772, 307.5],] },
        { name: "Malvol", type: MarkerType.NPC, positions: [[769, 378.25],] },
        { name: "Gorvessa", type: MarkerType.NPC, positions: [[821.5, 378.5],] },
        { name: "Gribburn", type: MarkerType.NPC, positions: [[844.75, 361.75],] },
        { name: "Bluntjaw the Bear", type: MarkerType.MiniBoss, positions: [[782.25, 723],] },
        { name: "Junk box", type: MarkerType.Treasure, positions: [[490, 225],] },
        { name: "Minizhemu", type: MarkerType.MiniBoss, positions: [[281.75, 350.5],] },
        { name: "Storeroom Supervisor", type: MarkerType.MiniBoss, positions: [[351.5, 512.5],] },
        { name: "Bobbikins", type: MarkerType.MiniBoss, positions: [[145, 277.25],] },
        { name: "Rubgag", type: MarkerType.MiniBoss, positions: [[185, 855.5],] },
        { name: "Rubgag's chest", type: MarkerType.Treasure, positions: [[240.5, 867.75],] },
        { name: "Stove", type: MarkerType.MiniBoss, positions: [[292, 732],] },
    ],
    group: Area.Eltibule,
};

export default HogansKeepBasementData;
