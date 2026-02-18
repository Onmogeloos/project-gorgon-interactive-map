import { Area, MapData, MarkerType } from "@localtypes/Map";

const data: MapData = {
    name: "Anagoge Island",
    slug: "anagoge",
    description: "",
    group: Area.AnagogeIsland,
    imageUrl: (await import("@assets/areas/Map_AreaNewbieIsland.png")).default,
    markers: [
        {
            name: "Anagoge Dock",
            position: [[950, 310]],
            type: MarkerType.Location
        },
        {
            name: "Riger",
            position: [[820, 230]],
            type: MarkerType.NPC
        },
        {
            name: "Obelisk (North)",
            position: [[780, 520]],
            type: MarkerType.Object
        },
        {
            name: "Sturdy Chest",
            position: [[780, 610]],
            type: MarkerType.Object
        },
        {
            name: "Lawara",
            position: [[770, 600]],
            type: MarkerType.NPC
        },
        {
            name: "Strange Platform",
            position: [[718, 637]],
            type: MarkerType.Object
        },
        {
            name: "Statue",
            position: [[600, 500]],
            type: MarkerType.Object
        },
        {
            name: "Elmetaph",
            position: [[660, 320]],
            type: MarkerType.NPC
        },
        {
            name: "Obelisk (East)",
            position: [[620, 760]],
            type: MarkerType.Object
        },
        {
            name: "Obelisk (West)",
            position: [[420, 170]],
            type: MarkerType.Object
        },
        {
            name: "Anagoge Records Facility",
            position: [[370, 285]],
            type: MarkerType.Location
        },
        {
            name: "Teleport Pad",
            position: [[290, 410]],
            type: MarkerType.TeleportPlatform
        },
        {
            name: "Obelisk (South)",
            position: [[210, 510]],
            type: MarkerType.Object
        },
        {
            name: "Pedestal Puzzle",
            position: [[340, 830]],
            type: MarkerType.Object
        },
        {
            name: "Enchanted Dummy",
            position: [[230, 840]],
            type: MarkerType.NPC
        }
    ]
};

export default data;