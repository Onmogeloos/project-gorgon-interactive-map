import { Area, MapData } from "@localtypes/Map";

const DarkChapelData: MapData = {
    name: "Dark Chapel",
    slug: "darkchapel",
    description: "",
    aspectRatio: 590/1024,
    imageUrl: (await import("@assets/areas/Map_DarkChapel.png")).default,
    markers: [],
    group: Area.Eltibule,
};

export default DarkChapelData;
