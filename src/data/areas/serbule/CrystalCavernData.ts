import { Area, MapData } from "@localtypes/Map";

const CrystalCavernData: MapData = {
    name: "Crystal Cavern",
    slug: "crystalcavern",
    description: "",
    aspectRatio: 236/512,
    imageUrl: (await import("@assets/areas/Map_CrystalCavern.png")).default,
    markers: [],
    group: Area.Serbule,
};

export default CrystalCavernData;
