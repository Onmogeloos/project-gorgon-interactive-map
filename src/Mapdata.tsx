
export type MapData = {
    name: string;
    description: string;
    image: string;
    markers: MarkerData[];
}

export type MarkerGroup = 'boss' | 'resource' | "entrance" | "npc"

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

const MAP_DATA = {
    [Maps.AnagogeIsland]: {
        name: "Anagoge island",
        description: "",
        image: "Map_AreaNewbieIsland.png",
        markers: [
            {
                name: "Lighthouse",
                position: [200, 300],
                group: "npc"
            }
        ]
    },
    [Maps.Serbule]: {
        name: "Serbule",
        description: "",
        image: "Map_AreaSerbule.png",
        markers: []
    },
    [Maps.SerbuleHills]: {
        name: "Serbule Hills",
        description: "",
        image: "Map_AreaSerbule2.png",
        markers: []
    }
} as {
    [key in Maps]: MapData
}

export default MAP_DATA;