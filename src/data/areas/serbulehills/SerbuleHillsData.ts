import { Area, MapData, MarkerType } from "@localtypes/Map";

const data: MapData = {
    name: "Serbule Hills",
    slug: "serbulehills",
    description: "",
    group: Area.SerbuleHills,
    aspectRatio: 2048/1988,
    imageUrl: (await import("@assets/areas/Map_AreaSerbule2.png")).default,
    markers: [
        {
            name: "Paul Vaughn",
            type: MarkerType.NPC,
            position: [
                [858.25, 205.125]
            ],
        },
        {
            name: "Stables Golem",
            type: MarkerType.NPC,
            position: [
                [858.5625, 184.5625]
            ],
        },
        {
            name: "Teleport platform",
            type: MarkerType.TeleportPlatform,
            position: [
                [863.5625, 209.25]
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
                [935.1875, 362]
            ],
        },
        {
            name: "Apple tree",
            type: MarkerType.FruitTree,
            position: [
                [959.8125, 76.4375],
                [928.3125, 32.8125],
                [923.8125, 20.5],
                [890.25, 121.75],

                [867.25, 18.5],

                [844.125, 55.625],
                [845, 49.125],
                // [895, 241.75],
                // [936, 306.5]

            ]
        }
    ]
};

export default data;