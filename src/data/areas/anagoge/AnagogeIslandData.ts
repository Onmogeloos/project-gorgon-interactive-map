import { Area, AreaData, MarkerType } from "@localtypes/Map";

const data: AreaData = {
    name: "Anagoge Island",
    slug: "anagoge",
    description: "",
    group: Area.AnagogeIsland,
    imageUrl: (await import("@assets/areas/Map_AreaNewbieIsland.png")).default,
    markers: [
        {
            name: "Anagoge Dock",
            positions: [[950, 310]],
            type: MarkerType.Location
        },
        {
            name: "Riger",
            positions: [[820, 230]],
            type: MarkerType.NPC
        },
        {
            name: "Obelisk (North)",
            positions: [[780, 520]],
            type: MarkerType.Object
        },
        {
            name: "Sturdy Chest",
            positions: [[780, 610]],
            type: MarkerType.Object
        },
        {
            name: "Lawara",
            positions: [[770, 600]],
            type: MarkerType.NPC
        },
        {
            name: "Strange Platform",
            positions: [[718, 637]],
            type: MarkerType.Object
        },
        {
            name: "Statue",
            positions: [[600, 500]],
            type: MarkerType.Object
        },
        {
            name: "Elmetaph",
            positions: [[660, 320]],
            type: MarkerType.NPC
        },
        {
            name: "Obelisk (East)",
            positions: [[620, 760]],
            type: MarkerType.Object
        },
        {
            name: "Obelisk (West)",
            positions: [[420, 170]],
            type: MarkerType.Object
        },
        {
            name: "Anagoge Records Facility",
            positions: [[370, 285]],
            type: MarkerType.Location
        },
        {
            name: "Teleport Pad",
            positions: [[290, 410]],
            type: MarkerType.TeleportPlatform
        },
        {
            name: "Obelisk (South)",
            positions: [[210, 510]],
            type: MarkerType.Object
        },
        {
            name: "Pedestal Puzzle",
            positions: [[340, 830]],
            type: MarkerType.Object
        },
        {
            name: "Enchanted Dummy",
            positions: [[230, 840]],
            type: MarkerType.NPC
        }
    ]
};

export default data;