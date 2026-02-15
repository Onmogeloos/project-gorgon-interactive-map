import { GlobalData, GlobalMapData, Maps, MarkerGroup } from "@types/Map";

export async function loadGlobalData(): Promise<GlobalData> {
    return {
        markerGroups: {
            [MarkerGroup.Boss]: {
                icon: (await import("@assets/icons/boss.svg?raw")).default,
                label: "Bosses",
                color: "#e74c3c"
            },
            [MarkerGroup.Resource]: {
                icon: (await import("@assets/icons/user.svg?raw")).default,
                label: "Resources",
                color: "#27ae60"
            },
            [MarkerGroup.Entrance]: {
                icon: (await import("@assets/icons/cave.svg?raw")).default,
                label: "Entrances",
                color: "#6d6d6d"
            },
            [MarkerGroup.NPC]: {
                icon: (await import("@assets/icons/user.svg?raw")).default,
                label: "NPCs",
                color: "#f1c40f"
            },
            [MarkerGroup.Location]: {
                icon: (await import("@assets/icons/marker.svg?raw")).default,
                label: "Locations",
                color: "#3498db"
            },
            [MarkerGroup.Object]: {
                icon: (await import("@assets/icons/hexagon.svg?raw")).default,
                label: "Objects",
                color: "#95a5a6"
            },
            [MarkerGroup.MapGate]: {
                icon: (await import("@assets/icons/road.svg?raw")).default,
                label: "Map Gates",
                color: "#d35400"
            },
            [MarkerGroup.TeleportPad]: {
                icon: (await import("@assets/icons/teleport.svg?raw")).default,
                label: "Teleport Pads",
                color: "#2ecc71"
            },
            [MarkerGroup.MeditationPillar]: {
                icon: (await import("@assets/icons/meditate.svg?raw")).default,
                label: "Meditation Pillars",
                color: "#9b59b6"
            },
            [MarkerGroup.Forage]: {
                icon: (await import("@assets/icons/plant.svg?raw")).default,
                label: "Forage",
                color: "#27ae60"
            },
        }
    }
}

export async function loadMapData(): Promise<GlobalMapData> {
    return {
        [Maps.AnagogeIsland]: {
            name: "Anagoge Island",
            slug: "anagoge",
            description: "",
            imageUrl: (await import("@assets/maps/Map_AreaNewbieIsland.png")).default,
            uniqueMarkers: [
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
            ],
            bulkMarkers: []
        },
        [Maps.Serbule]: {
            name: "Serbule",
            slug: "serbule",
            description: "",
            imageUrl: (await import("@assets/maps/Map_AreaSerbule.png")).default,
            uniqueMarkers: [
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
                    position: [132, 116.5],
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
            ],
            bulkMarkers: []
        },
        [Maps.SerbuleHills]: {
            name: "Serbule Hills",
            slug: "serbulehills",
            description: "",
            imageUrl: (await import("@assets/maps/Map_AreaSerbule2.png")).default,
            uniqueMarkers: [
                {
                    name: "Path to Serbule",
                    position: [988, 95],
                    group: MarkerGroup.MapGate
                },
                {
                    name: "Path to Serbule Hills",
                    position: [80, 780],
                    group: MarkerGroup.MapGate
                }
            ],
            bulkMarkers: [
                {
                    name: "Apple tree",
                    group: MarkerGroup.Forage,
                    positions: [
                        [855, 55.5],
                        [855.25, 48.25],
                        [875, 21],
                        [937.75, 20.75],
                        [941.25, 33.5],
                        [973.5, 78],
                        [906.25, 121.75],
                    ]
                }
            ]
        },
        [Maps.PhantomIlmariDesert]: {
            name: "Phantom Ilmari Desert",
            slug: "phantomilmari",
            description: "",
            imageUrl: (await import("@assets/maps/Map_AreaDesert1.png")).default,
            uniqueMarkers: [],
            bulkMarkers: []
        },
        [Maps.Eltibule]: {
            name: "Eltibule",
            slug: "eltibule",
            description: "",
            imageUrl: (await import("@assets/maps/Map_AreaEltibule.png")).default,
            uniqueMarkers: [],
            bulkMarkers: []
        },
        [Maps.SunVale]: {
            name: "Sun Vale",
            slug: "sunvale",
            description: "",
            imageUrl: (await import("@assets/maps/Map_AreaSunvale.png")).default,
            uniqueMarkers: [],
            bulkMarkers: []
        },
        [Maps.KurMountains]: {
            name: "Kur Mountains",
            slug: "kurmountains",
            description: "",
            imageUrl: (await import("@assets/maps/Map_AreaKurMountains.png")).default,
            uniqueMarkers: [],
            bulkMarkers: []
        },
        [Maps.Ilmari]: {
            name: "Ilmari",
            slug: "ilmari",
            description: "",
            imageUrl: (await import("@assets/maps/Map_AreaDesert1.png")).default,
            uniqueMarkers: [],
            bulkMarkers: []
        },
        [Maps.Rahu]: {
            name: "Rahu",
            slug: "rahu",
            description: "",
            imageUrl: (await import("@assets/maps/Map_AreaRahu.png")).default,
            uniqueMarkers: [],
            bulkMarkers: []
        },
        [Maps.Gazluk]: {
            name: "Gazluk",
            slug: "gazluk",
            description: "",
            imageUrl: (await import("@assets/maps/Map_AreaGazluk.png")).default,
            uniqueMarkers: [],
            bulkMarkers: []
        },
        [Maps.FaeRealm]: {
            name: "Fae Realm",
            slug: "faerealm",
            description: "",
            imageUrl: (await import("@assets/maps/Map_AreaFaeRealm1.png")).default,
            uniqueMarkers: [],
            bulkMarkers: []
        },
        [Maps.Povus]: {
            name: "Povus",
            slug: "povus",
            description: "",
            imageUrl: (await import("@assets/maps/Map_Povus.png")).default,
            uniqueMarkers: [],
            bulkMarkers: []
        },
        [Maps.Vidaria]: {
            name: "Vidaria",
            slug: "vidaria",
            description: "",
            imageUrl: (await import("@assets/maps/Map_Vidaria.png")).default,
            uniqueMarkers: [],
            bulkMarkers: []
        },
        [Maps.Statehelm]: {
            name: "Statehelm",
            slug: "statehelm",
            description: "",
            imageUrl: (await import("@assets/maps/Map_AreaStatehelm.png")).default,
            uniqueMarkers: [],
            bulkMarkers: []
        },
    };
}