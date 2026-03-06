import { Area, AreaData, MarkerType } from "@localtypes/Map";

const RahuSewerData: AreaData = {
    name: "Rahu Sewer",
    slug: "rahusewer",
    description: "",
    minLevel: 60,
    maxLevel: 60,
    imageUrl: (await import("@assets/areas/Map_RahuSewer.png")).default,
    markers: [

        { name: "Treant Guardian", type: MarkerType.Boss, positions: [[907.625, 744.625],] },
        { name: "Tolmar the Snake Master", type: MarkerType.Boss, positions: [[901.75, 596.25],] },
        { name: "Buttercup", type: MarkerType.MiniBoss, positions: [[879.375, 595.625],] },
        { name: "Chief Glortok", type: MarkerType.NPC, positions: [[753.25, 392.75],] },
        { name: "Stulza", type: MarkerType.NPC, positions: [[735.5, 393.75],] },
        { name: "Bogaku", type: MarkerType.NPC, positions: [[727.25, 410.75],] },
        { name: "Weird Leaves", type: MarkerType.Object, positions: [[633.625, 213.375], [639.625, 457.75],] },
        { name: "Lore book", type: MarkerType.Lore, positions: [[653.125, 195],] },
        { name: "Bogaku's Notebook", type: MarkerType.Lore, positions: [[480.5, 243.5],] },
        { name: "Frothmir", type: MarkerType.Boss, positions: [[493.75, 401.375],] },
        { name: "Fish Overseer (SqueEeak)", type: MarkerType.MiniBoss, positions: [[255.375, 425.875],] },
        { name: "Ratkin General (SquuuEaEak)", type: MarkerType.MiniBoss, positions: [[330.5, 768.75]] },
        { name: "Ratkin King (SqUUeak)", type: MarkerType.Boss, positions: [[338.5, 769],] },
        { name: "Milking Goats", type: MarkerType.Animal, positions: [[326, 341], [338.75, 362.75]] },
        { name: "The Problem Spider", type: MarkerType.Boss, positions: [[213.75, 54.75],] },
    ],
    group: Area.Rahu,
};

export default RahuSewerData;
