import { GlobalData, GlobalMapData, Maps, MarkerGroup } from "@types/Map";

export async function loadGlobalData(): Promise<GlobalData> {
    return {
        icons: {
            [MarkerGroup.Boss]: (await import("@assets/icons/boss.svg?raw")).default,
            [MarkerGroup.Resource]: (await import("@assets/icons/user.svg?raw")).default,
            [MarkerGroup.Entrance]: (await import("@assets/icons/cave.svg?raw")).default,
            [MarkerGroup.NPC]: (await import("@assets/icons/user.svg?raw")).default,
            [MarkerGroup.Location]: (await import("@assets/icons/marker.svg?raw")).default,
            [MarkerGroup.Object]: (await import("@assets/icons/hexagon.svg?raw")).default,
            [MarkerGroup.MapGate]: (await import("@assets/icons/road.svg?raw")).default,
            [MarkerGroup.TeleportPad]: (await import("@assets/icons/teleport.svg?raw")).default,
            [MarkerGroup.MeditationPillar]: (await import("@assets/icons/meditate.svg?raw")).default
        }
    }
}

export async function loadMapData(): Promise<GlobalMapData> {
    return {
        [Maps.AnagogeIsland]: {
            name: "Anagoge island",
            slug: "anagoge",
            description: "",
            imageUrl: (await import("@assets/maps/Map_AreaNewbieIsland.png")).default,
            markers: [
                {
                    name: "Anagoge Dock",
                    position: [950, 310],
                    group: MarkerGroup.Location
                },
                {
                    name: "Riger",
                    position: [820, 230],
                    group: MarkerGroup.NPC
                },
                {
                    name: "Obelisk (North)",
                    position: [780, 520],
                    group: MarkerGroup.Object
                },
                {
                    name: "Sturdy Chest",
                    position: [780, 610],
                    group: MarkerGroup.Object
                },
                {
                    name: "Lawara",
                    position: [770, 600],
                    group: MarkerGroup.NPC
                },
                {
                    name: "Strange Platform",
                    position: [718, 637],
                    group: MarkerGroup.Object
                },
                {
                    name: "Statue",
                    position: [600, 500],
                    group: MarkerGroup.Object
                },
                {
                    name: "Elmetaph",
                    position: [660, 320],
                    group: MarkerGroup.NPC
                },
                {
                    name: "Obelisk (East)",
                    position: [620, 760],
                    group: MarkerGroup.Object
                },
                {
                    name: "Obelisk (West)",
                    position: [420, 170],
                    group: MarkerGroup.Object
                },
                {
                    name: "Anagoge Records Facility",
                    position: [370, 285],
                    group: MarkerGroup.Location
                },
                {
                    name: "Teleport Pad",
                    position: [290, 410],
                    group: MarkerGroup.TeleportPad
                },
                {
                    name: "Obelisk (South)",
                    position: [210, 510],
                    group: MarkerGroup.Object
                },
                {
                    name: "Pedestal Puzzle",
                    position: [340, 830],
                    group: MarkerGroup.Object
                },
                {
                    name: "Enchanted Dummy",
                    position: [230, 840],
                    group: MarkerGroup.NPC
                }
            ]
        },
        [Maps.Serbule]: {
            name: "Serbule",
            slug: "serbule",
            description: "",
            imageUrl: (await import("@assets/maps/Map_AreaSerbule.png")).default,
            markers: [
                {
                    name: "Brain Bug Cave",
                    position: [880, 110],
                    group: MarkerGroup.Entrance
                },
                {
                    name: "Meditation Pillar (NW)",
                    position: [855, 205],
                    group: MarkerGroup.MeditationPillar
                },
                {
                    name: "Crystal Cavern",
                    position: [780, 420],
                    group: MarkerGroup.Entrance
                },
                {
                    name: "Path to Eltibule",
                    position: [946.25, 346.25],
                    group: MarkerGroup.MapGate
                },
                {
                    name: "Old Fangsworth",
                    position: [914.25, 568.75],
                    group: MarkerGroup.Boss
                },
                {
                    name: "Fitz the Boatman",
                    position: [940, 675],
                    group: MarkerGroup.NPC
                },
                {
                    name: "Juri the Boatman",
                    position: [930, 695],
                    group: MarkerGroup.NPC
                },
                {
                    name: "Borghild",
                    position: [750, 910],
                    group: MarkerGroup.Entrance
                },
                {
                    name: "Teleport Pad (NE)",
                    position: [760, 895],
                    group: MarkerGroup.TeleportPad
                },
                {
                    name: "Meditation Pillar (NE)",
                    position: [740, 895],
                    group: MarkerGroup.MeditationPillar
                },
                {
                    name: "Serbule Sewers",
                    position: [655, 695],
                    group: MarkerGroup.Entrance
                },
                {
                    name: "Old Snouty",
                    position: [520, 780],
                    group: MarkerGroup.Boss
                },
                {
                    name: "Mushroom circle",
                    position: [500, 882],
                    group: MarkerGroup.Object
                },
                {
                    name: "Serbule Keep & Market",
                    position: [411.75, 579.25],
                    group: MarkerGroup.Location
                },
                {
                    name: "Teleport Pad (Central)",
                    position: [555, 508],
                    group: MarkerGroup.TeleportPad
                },
                {
                    name: "Meditation Pillar (Central)",
                    position: [580, 430],
                    group: MarkerGroup.MeditationPillar
                },
                {
                    name: "Carpal Tunnels",
                    position: [448, 165],
                    group: MarkerGroup.Location
                },
                {
                    name: "Giant Mushrooms",
                    position: [585.75, 22.5],
                    group: MarkerGroup.Location
                },
                {
                    name: "Serbule Graveyard",
                    position:[132, 116.5],
                    group: MarkerGroup.Location
                },
                {
                    name: "Serbule Crypt",
                    position: [104, 76],
                    group: MarkerGroup.Location
                },
                {
                    name: "Gluzax",
                    position: [
                        151.75,
                        307.5
                    ],
                    group: MarkerGroup.Boss
                },
                {
                    name: "Teleport Pad (South)",
                    position: [188, 602],
                    group: MarkerGroup.Object
                },
                {
                    name: "Salmpo",
                    position: [124, 535],
                    group: MarkerGroup.NPC
                },
                {
                    name: "Path to Serbule Hills",
                    position: [80, 780],
                    group: MarkerGroup.MapGate
                }
            ]
        },
        [Maps.SerbuleHills]: {
            name: "Serbule Hills",
            slug: "serbulehills",
            description: "",
            imageUrl: (await import("@assets/maps/Map_AreaSerbule2.png")).default,
            markers: []
        }
    };
}