import { Area, AreaData, MarkerType } from "@localtypes/Map";

const WinterNexusData: AreaData = {
    name: "Winter Nexus",
    slug: "winternexus",
    description: "",
    imageUrl: (await import("@assets/areas/Map_WinterNexus.png")).default,
    markers: [
        { name: "Dementia Puck", type: MarkerType.Boss, positions: [[570, 811],] },
        { name: "To Second Level", type: MarkerType.Entrance, positions: [[580, 951],], data: { leadsTo: Area.PuckHalls } },
        { name: "Chest", type: MarkerType.Treasure, positions: [[77, 509], [897, 602]] },
        { name: "Trallix' Storage", type: MarkerType.Treasure, positions: [[387, 142.5],] },
        { name: "Fazzi", type: MarkerType.NPC, positions: [[111.5, 129],] },
        { name: "Corey the Croaker", type: MarkerType.NPC, positions: [[133.25, 113.25],] },
        { name: "Exit to Fae Realm", type: MarkerType.Entrance, positions: [[179.5, 79],], data: { leadsTo: Area.FaeRealm } },
        { name: "Exit to Sun Vale", type: MarkerType.Entrance, positions: [[455, 226],], data: { leadsTo: Area.SunVale } },
        {
            name: "Winterprize",
            type: MarkerType.Ore,
            description: `Requires 15 Mining and a Winter Fae Blood`,
            positions: [
                [107, 170], [258, 301],
                [359, 231],
                [420, 421],
                [534, 418],
                [147, 505],
                [544, 157],
                [478, 64],
                [532, 671],
                [513, 832],
                [818, 542],
                [806, 684],
                [933, 687],
                [895, 445],
                [734, 182],
            ]
        },
    ],
    group: Area.SunVale,
};

export default WinterNexusData;
