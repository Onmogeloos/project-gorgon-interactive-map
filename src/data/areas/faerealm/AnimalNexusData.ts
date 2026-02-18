import { Area, MapData } from "@localtypes/Map";

const AnimalNexusData: MapData = {
    name: "Animal Nexus",
    slug: "animalnexus",
    description: "",
    group: Area.FaeRealm,
    imageUrl: (await import("@assets/areas/Map_AnimalNexus.png")).default,
    markers: [],
    aspectRatio: 512 / 419,
};

export default AnimalNexusData;
