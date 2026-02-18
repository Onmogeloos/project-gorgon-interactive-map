import { Area, MapData, MarkerType } from "@localtypes/Map";

const data: MapData = {
    name: "Serbule Hills",
    slug: "serbulehills",
    description: "",
    group: Area.SerbuleHills,
    imageUrl: (await import("@assets/areas/Map_AreaSerbule2.png")).default,
    markers: [
        {
            name: "Paul Vaughn",
            type: MarkerType.NPC,
            position: [
                [868.75, 205]
            ],
        },
        {
            name: "Stables Golem",
            type: MarkerType.NPC,
            position: [
                [869.25, 183.75]
            ],
        },
        {
            name: "Teleport platform",
            type: MarkerType.TeleportPlatform,
            position: [
                [874.75, 209.5]
            ]
        },
        {
            name: "Path to Serbule",
            position: [[988, 95]],
            type: MarkerType.ZonePortal
        },
        {
            name: "Serbule Hills Spider Cave",
            type: MarkerType.Entrance,
            position: [
                [949.25, 362]
            ],
        },
        {
            name: "Apple tree",
            type: MarkerType.FruitTree,
            position: [
                [855, 55.5],
                [855.25, 48.25],
                [875, 21],
                [937.75, 20.75],
                [941.25, 33.5],
                [973.5, 78],
                [906.25, 121.75],
                [895, 241.75],
                [936, 306.5]
            ]
        }
    ]
};

export default data;