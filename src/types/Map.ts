
export type MapData = {
    name: string;
    slug: string;
    description: string;
    imageUrl: string;
    markers: MarkerData[];
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
    TeleportPad = 'teleportpad'
}

export type Coordinate = [number, number];

export type MarkerData = {
    name: string;
    group: MarkerGroup;
    position: Coordinate;
}

export enum Maps {
    AnagogeIsland = "Anagoge Island",
    Serbule = "Serbule",
    SerbuleHills = "Serbule Hills"
}

export type GlobalData = {
    icons: {[key in MarkerGroup]?: string;}
}
export type GlobalMapData = {[key in Maps]: MapData}