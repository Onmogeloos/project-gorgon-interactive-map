import { GlobalData, GlobalMapData, Maps, MarkerType, ZoneType } from "@localtypes/Map";

export async function loadGlobalData(): Promise<GlobalData> {
    return {
        markerGroups: {
            [MarkerType.Boss]: {
                icon: (await import("@assets/icons/boss.svg?raw")).default,
                label: "Bosses",
                color: "#e74c3c"
            },
            [MarkerType.Resource]: {
                icon: (await import("@assets/icons/user.svg?raw")).default,
                label: "Resources",
                color: "#27ae60"
            },
            [MarkerType.Entrance]: {
                icon: (await import("@assets/icons/cave.svg?raw")).default,
                label: "Entrances",
                color: "#6d6d6d"
            },
            [MarkerType.NPC]: {
                icon: (await import("@assets/icons/user.svg?raw")).default,
                label: "NPCs",
                color: "#2d95d2"
            },
            [MarkerType.Location]: {
                icon: (await import("@assets/icons/marker.svg?raw")).default,
                label: "Locations",
                color: "#9e9e9e"
            },
            [MarkerType.Object]: {
                icon: (await import("@assets/icons/hexagon.svg?raw")).default,
                label: "Objects",
                color: "#70553e"
            },
            [MarkerType.ZonePortal]: {
                icon: (await import("@assets/icons/road.svg?raw")).default,
                label: "Zone Portals",
                color: "#d35400"
            },
            [MarkerType.TeleportPlatform]: {
                icon: (await import("@assets/icons/teleport.svg?raw")).default,
                label: "Teleport Platforms",
                color: "#2ecc71"
            },
            [MarkerType.MeditationPillar]: {
                icon: (await import("@assets/icons/meditate.svg?raw")).default,
                label: "Meditation Pillars",
                color: "#9b59b6"
            },
            [MarkerType.FruitTree]: {
                icon: (await import("@assets/icons/fruittree.svg?raw")).default,
                label: "Fruit trees",
                color: "#27ae60"
            },
            [MarkerType.ForageSpots]: {
                icon: (await import("@assets/icons/plant.svg?raw")).default,
                label: "Foraging Spots",
                color: "#27ae60"
            },
        },
        zoneTypes: {
            [ZoneType.Enemies]: {
                label: "Enemy zones",
                color: "#e74c3c"
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
            ],
            zones: []
        },
        [Maps.Serbule]: {
            name: "Serbule",
            slug: "serbule",
            description: "",
            imageUrl: (await import("@assets/maps/Map_AreaSerbule.png")).default,
            markers: [
                {
                    name: "Brain Bug Cave",
                    position: [[880, 110]],
                    type: MarkerType.Entrance
                },
                {
                    name: "Meditation Pillar (NW)",
                    position: [[855, 205]],
                    type: MarkerType.MeditationPillar
                },
                {
                    name: "Crystal Cavern",
                    position: [[780, 420]],
                    type: MarkerType.Entrance
                },
                {
                    name: "Path to Eltibule",
                    position: [[946.25, 346.25]],
                    type: MarkerType.ZonePortal
                },
                {
                    name: "Old Fangsworth",
                    position: [[914.25, 568.75]],
                    type: MarkerType.Boss
                },
                {
                    name: "Fitz the Boatman",
                    position: [[940, 675]],
                    type: MarkerType.NPC
                },
                {
                    name: "Juri the Boatman",
                    position: [[930, 695]],
                    type: MarkerType.NPC
                },
                {
                    name: "Borghild",
                    position: [[750, 910]],
                    type: MarkerType.Entrance
                },
                {
                    name: "Teleport Pad (NE)",
                    position: [[760, 895]],
                    type: MarkerType.TeleportPlatform
                },
                {
                    name: "Meditation Pillar (NE)",
                    position: [[740, 895]],
                    type: MarkerType.MeditationPillar
                },
                {
                    name: "Serbule Sewers",
                    position: [[655, 695]],
                    type: MarkerType.Entrance
                },
                {
                    name: "Old Snouty",
                    position: [[520, 780]],
                    type: MarkerType.Boss
                },
                {
                    name: "Mushroom circle",
                    position: [[500, 882]],
                    type: MarkerType.Object
                },
                {
                    name: "Serbule Keep & Market",
                    position: [[411.75, 579.25]],
                    type: MarkerType.Location
                },
                {
                    name: "Teleport Pad (Central)",
                    position: [[555, 508]],
                    type: MarkerType.TeleportPlatform
                },
                {
                    name: "Meditation Pillar (Central)",
                    position: [[580, 430]],
                    type: MarkerType.MeditationPillar
                },
                {
                    name: "Carpal Tunnels",
                    position: [[448, 165]],
                    type: MarkerType.Entrance
                },
                {
                    name: "Giant Mushrooms",
                    position: [[585.75, 22.5]],
                    type: MarkerType.Entrance
                },
                {
                    name: "Serbule Graveyard",
                    position: [[132, 116.5]],
                    type: MarkerType.Location
                },
                {
                    name: "Serbule Crypt",
                    position: [[104, 76]],
                    type: MarkerType.Location
                },
                {
                    name: "Gluzax",
                    position: [[151.75, 307.5]],
                    type: MarkerType.Boss
                },
                {
                    name: "Teleport Pad (South)",
                    position: [[188, 602]],
                    type: MarkerType.TeleportPlatform
                },
                {
                    name: "Salmpo",
                    position: [[124, 535]],
                    type: MarkerType.NPC
                },
                {
                    name: "Path to Serbule Hills",
                    position: [[80, 780]],
                    type: MarkerType.ZonePortal
                },
                {
                    name: "Fainor",
                    position: [[534.125, 498]],
                    type: MarkerType.NPC
                }, {
                    name: "Rita",
                    position: [[528.4375, 504.46875]],
                    type: MarkerType.NPC
                },
                {
                    name: "Blanche",
                    position: [[525, 505.5]],
                    type: MarkerType.NPC
                },
                {
                    name: "Velkort",
                    position: [[543.59375, 510.875]],
                    type: MarkerType.NPC
                }
            ],
            zones: [
                {
                    name: "Tigers",
                    type: ZoneType.Enemies,
                    polygonPoints: [
                        [832.5, 421.75],
                        [912.5, 371],
                        [968.25, 386.75],
                        [991.5, 575.5],
                        [876.5, 652.5],
                        [782, 623],
                        [751.5, 664],
                        [728.5, 670],
                        [733, 504],
                        [792, 491],
                        [836.5, 442.5],
                    ]
                },
                {
                    name: "Augmented Mantis Slaves",
                    type: ZoneType.Enemies,
                    polygonPoints: [
                        [137.5, 10.5],
                        [200.5, 90],
                        [206.5, 165.5],
                        [179.5, 281],
                        [224.5, 369],
                        [329.5, 381.5],
                        [346.5, 238.5],
                        [470.5, 186],
                        [490.5, 6],
                        [141.5, 2.5],
                    ]
                }
            ]
        },
        [Maps.SerbuleHills]: {
            name: "Serbule Hills",
            slug: "serbulehills",
            description: "",
            imageUrl: (await import("@assets/maps/Map_AreaSerbule2.png")).default,
            markers: [
                {
                    name: "Path to Serbule",
                    position: [[988, 95]],
                    type: MarkerType.ZonePortal
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
                    ]
                }
            ],
            zones: []
        },
        [Maps.PhantomIlmariDesert]: {
            name: "Phantom Ilmari Desert",
            slug: "phantomilmari",
            description: "",
            imageUrl: (await import("@assets/maps/Map_AreaDesert1.png")).default,
            markers: [
                {
                    name: "Miravelle",
                    position: [[353.625, 494.625]],
                    type: MarkerType.NPC
                }
            ],
            zones: []
        },
        [Maps.Eltibule]: {
            name: "Eltibule",
            slug: "eltibule",
            description: "",
            imageUrl: (await import("@assets/maps/Map_AreaEltibule.png")).default,
            markers: [],
            zones: []
        },
        [Maps.SunVale]: {
            name: "Sun Vale",
            slug: "sunvale",
            description: "",
            imageUrl: (await import("@assets/maps/Map_AreaSunVale.png")).default,
            markers: [],
            zones: []
        },
        [Maps.KurMountains]: {
            name: "Kur Mountains",
            slug: "kurmountains",
            description: "",
            imageUrl: (await import("@assets/maps/Map_AreaKurMountains.png")).default,
            markers: [],
            zones: []
        },
        [Maps.Ilmari]: {
            name: "Ilmari",
            slug: "ilmari",
            description: "",
            imageUrl: (await import("@assets/maps/Map_AreaDesert1.png")).default,
            markers: [],
            zones: []
        },
        [Maps.Rahu]: {
            name: "Rahu",
            slug: "rahu",
            description: "",
            imageUrl: (await import("@assets/maps/Map_AreaRahu.png")).default,
            markers: [],
            zones: []
        },
        [Maps.Gazluk]: {
            name: "Gazluk",
            slug: "gazluk",
            description: "",
            imageUrl: (await import("@assets/maps/Map_AreaGazluk.png")).default,
            markers: [],
            zones: []
        },
        [Maps.FaeRealm]: {
            name: "Fae Realm",
            slug: "faerealm",
            description: "",
            imageUrl: (await import("@assets/maps/Map_AreaFaeRealm1.png")).default,
            markers: [],
            zones: []
        },
        [Maps.Povus]: {
            name: "Povus",
            slug: "povus",
            description: "",
            imageUrl: (await import("@assets/maps/Map_Povus.png")).default,
            markers: [],
            zones: []
        },
        [Maps.Vidaria]: {
            name: "Vidaria",
            slug: "vidaria",
            description: "",
            imageUrl: (await import("@assets/maps/Map_Vidaria.png")).default,
            markers: [],
            zones: []
        },
        [Maps.Statehelm]: {
            name: "Statehelm",
            slug: "statehelm",
            description: "",
            imageUrl: (await import("@assets/maps/Map_AreaStatehelm.png")).default,
            markers: [],
            zones: []
        },
    };
}