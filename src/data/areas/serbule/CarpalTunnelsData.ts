import { Area, MapData } from "@localtypes/Map";

const CarpalTunnelsData: MapData = {
    name: "Carpal Tunnels",
    slug: "carpaltunnels",
    description: "",
    imageUrl: (await import("@assets/areas/Map_CarpalTunnels.png")).default,
    markers: [],
    group: Area.Serbule,
};

export default CarpalTunnelsData;
