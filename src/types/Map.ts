
export type MapData = {
    name: string;
    slug: string;
    description: string;
    imageUrl: string;
    uniqueMarkers: UniqueMarkerData[];
    bulkMarkers: BulkMarkerData[]
}

export enum MarkerGroup {
    Boss = 'boss',
    Resource = 'resource',
    Entrance = 'entrance',
    NPC = 'npc',
    Location = 'location',
    Object = 'object',
    MapGate = 'mapgate',
    MeditationPillar = 'meditationpillar',
    Statue = 'statue',
    TeleportPad = 'teleportpad',
    Forage = "Forage"
}

export type Coordinate = [number, number];

export type UniqueMarkerData = {
    name: string;
    group: MarkerGroup;
    position: Coordinate;
}

export type BulkMarkerData = {
    name: string;
    group: MarkerGroup;
    positions: Coordinate[];
}

export enum Maps {
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
}

export type GlobalData = {
    markerGroups: {[key in MarkerGroup]?: {
        icon: string;
        label: string;
        color: string;
    }}
}
export type GlobalMapData = {[key in Maps]: MapData}