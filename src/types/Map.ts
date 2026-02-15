
export type MapData = {
    name: string;
    slug: string;
    description: string;
    imageUrl: string;
    uniqueMarkers: UniqueMarkerData[];
    bulkMarkers: BulkMarkerData[];
    zones: ZoneData[];
}

export enum MarkerType {
    Boss = 'boss',
    Resource = 'resource',
    Entrance = 'entrance',
    NPC = 'npc',
    Location = 'location',
    Object = 'object',
    ZonePortal = 'mapgate',
    MeditationPillar = 'meditationpillar',
    Statue = 'statue',
    TeleportPlatform = 'teleportpad',
    FruitTree = "Forage",
    ForageSpots = "ForageSpots"
}

export type Coordinate = [number, number];

export type UniqueMarkerData = {
    name: string;
    group: MarkerType;
    position: Coordinate;
}

export type BulkMarkerData = {
    name: string;
    group: MarkerType;
    positions: Coordinate[];
}

export type ZoneData = {
    name: string;
    type: ZoneType;
    polygonPoints: Coordinate[];
}

export enum ZoneType {
    Enemies = "enemies"
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
    markerGroups: {[key in MarkerType]?: {
        icon: string;
        label: string;
        color: string;
    }},
    zoneTypes: {[key in ZoneType]?: {
        label: string;
        color: string;
    }}
}
export type GlobalMapData = {[key in Maps]: MapData}