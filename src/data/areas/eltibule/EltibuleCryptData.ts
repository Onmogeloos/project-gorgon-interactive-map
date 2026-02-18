import { Area, MapData } from "@localtypes/Map";

const EltibuleCryptData: MapData = {
    name: "Eltibule Crypt",
    slug: "eltibulecrypt",
    description: "",
    aspectRatio: 256/205,
    imageUrl: (await import("@assets/areas/Map_EltibuleCrypt.png")).default,
    markers: [],
    group: Area.Eltibule,
};

export default EltibuleCryptData;
