
export type MapData = {
    name: string;
    slug: string;
    description: string;
    imageUrl: string;
    markers: MarkerData[];
    group: Area;
    aspectRatio?: number;
}

export enum MarkerType {
    Altar = "altar",
    Boss = 'boss',
    MiniBoss = 'miniboss',
    UniqueEnemy = 'uniqueenemy',

    Entrance = 'entrance',
    ForageSpots = "foragespots",
    FruitTree = "fruittree",
    Location = 'location',
    MeditationPillar = 'meditationpillar',
    NPC = 'npc',
    Object = 'object',
    Resource = 'resource',
    TeleportPlatform = 'teleportplatform',
    ZonePortal = 'zoneportal',
    Treasure = 'treasure',
    Lore = 'lore',
    PlayerShop = "playershop",
}

export type Coordinate = [number, number];

// Types that require a data property
type MarkerDataWithData =
  | {
      type: MarkerType.Entrance;
      name: string;
      positions: Coordinate[];
      data: { leadsTo: Area };
    }
  | {
      type: MarkerType.ZonePortal;
      name: string;
      positions: Coordinate[];
      data: { leadsTo: Area };
    };

// All other types do not have a data property
export type MarkerData =
  | MarkerDataWithData
  | {
      type: Exclude<MarkerType, MarkerDataWithData extends { type: infer T } ? T : never>;
      name: string;
      positions: Coordinate[];
    };

export enum Area {
    AnagogeIsland = "Anagoge Island",
    Serbule = "Serbule",
    SerbuleHills = "Serbule Hills",
    PhantomIlmariDesert = "Phantom Ilmari Desert",
    Eltibule = "Eltibule",
    SunVale = "Sun Vale",
    KurMountains = "Kur Mountains",
    Ilmari = "Ilmari",
    Rahu = "Rahu",
    Gazluk = "Gazluk",
    FaeRealm = "Fae Realm",
    Povus = "Povus",
    Vidaria = "Vidaria",
    Statehelm = "Statehelm",
    Casino = "Casino",
    BoardedUpBasement = "Boarded Up Basement",
    Borghild = "Borghild",
    BrainBugCave = "Brain Bug Cave",
    CarpalTunnels = "Carpal Tunnels",
    CrystalCavern = "Crystal Cavern",
    DarkChapel = "Dark Chapel",
    EltibuleCrypt = "Eltibule Crypt",
    GoblinDungeon = "Goblin Dungeon",
    GoblinDungeonTopFloor = "Goblin Dungeon Top Floor",
    HogansKeepBasement = "Hogan's Keep Basement",
    KhyruleksCrypt = "Khyrulek's Crypt",
    KurCourtyard = "Kur Courtyard",
    KurTower = "Kur Tower",
    Labyrinth = "Labyrinth",
    MyconianCave = "Myconian Cave",
    NewbieIslandDungeon = "Newbie Island Dungeon",
    NewPrestonbule = "New Prestonbule",
    NoNameCave = "No-name Cave",
    PovusCavesAktaariCave = "Povus Caves Aktaari Cave",
    PovusCavesElvenJudgement = "Povus Caves Elven Judgement",
    PovusCavesErrrukasCave = "Povus Caves Errruka's Cave",
    PovusCavesForthragarianCaves = "Povus Caves Forthragarian Caves",
    PovusCavesLevel1 = "Povus Caves Level 1",
    PovusCavesLevel2 = "Povus Caves Level 2",
    PovusCavesLevel3 = "Povus Caves Level 3",
    PovusCavesLevel4 = "Povus Caves Level 4",
    PovusCavesNightmareCaves = "Povus Caves Nightmare Caves",
    // PuckHalls = "Puck Halls",
    RahuSewer = "Rahu Sewer",
    RanalonBase = "Ranalon Base",
    SerbuleSewer = "Serbule Sewer",
    SnowbloodCave = "Snowblood Cave",
    SpiderCave = "Spider Cave",
    StatehelmCavesSafeHouseA = "Statehelm Caves Safe House A",
    SunValeCave1 = "Sun Vale Cave 1",
    SunValeCave2 = "Sun Vale Cave 2",
    SunValeCave3 = "Sun Vale Cave 3",
    TheWintertide = "The Wintertide",
    // TowerView = "Tower View",
    // WardenCave = "Warden Cave",
    WindyViewCave = "Windy View Cave",
    WinterNexus = "Winter Nexus",
    WolfCave = "Wolf Cave",
    YetiCave = "Yeti Cave",
    AnimalNexus = "Animal Nexus",
}

export type MarkerTypeData = {
    icon: string;
    label: string;
    color: string;
}

export type AllMarkerTypeData = {
    [key in MarkerType]: MarkerTypeData;
}

export type GlobalData = {
    markerTypes: AllMarkerTypeData;
}
export type GlobalMapData = { [key in Area]: MapData }