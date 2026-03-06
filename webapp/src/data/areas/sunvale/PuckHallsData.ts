import { Area, MarkerType, AreaData } from "@localtypes/Map";

const PuckHallsData: AreaData = {
    name: "Puck Halls",
    slug: "puckhalls",
    description: "",
    aspectRatio: 439 / 512,
    imageUrl: (await import("@assets/areas/Map_PuckHalls.png")).default,
    markers: [
        { name: "To Winter Nexus", type: MarkerType.Entrance, positions: [[925, 353],], data: { leadsTo: Area.WinterNexus } },
        { name: "Chest", type: MarkerType.Treasure, positions: [[666, 869], [702, 525], [620, 137], [538, 529], [179, 407],] },
        { name: "Despair Puck", type: MarkerType.Boss, positions: [[230, 329],] },
        { name: "Gorgos", type: MarkerType.Boss, positions: [[670.25, 138.25],] },
        {
            name: "Winterprize",
            type: MarkerType.Ore,
            description: `Requires 15 Mining and a Winter Fae Blood`,
            positions: [
                [620, 782],
                [576, 430],
                [814, 352],
                [618, 186],
                [370, 236],
                [292, 392],
            ]
        },
    ],
    group: Area.SunVale,
};

export default PuckHallsData;
