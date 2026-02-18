import { Area, MapData } from "@localtypes/Map";

const KhyruleksCryptData: MapData = {
    name: "Khyrulek's Crypt",
    slug: "khyrulekscrypt",
    description: "",
    aspectRatio: 525/1024,
    imageUrl: (await import("@assets/areas/Map_KhyruleksCrypt.png")).default,
    markers: [],
    group: Area.Serbule,
};

export default KhyruleksCryptData;
