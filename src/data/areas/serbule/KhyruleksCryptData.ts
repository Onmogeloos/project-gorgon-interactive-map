import { Area, MapData } from "@localtypes/Map";

const KhyruleksCryptData: MapData = {
    name: "Khyrulek's Crypt",
    slug: "khyrulekscrypt",
    description: "",
    imageUrl: (await import("@assets/areas/Map_KhyruleksCrypt.png")).default,
    markers: [],
    group: Area.Serbule,
};

export default KhyruleksCryptData;
