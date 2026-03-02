import { Area, AreaData } from "@localtypes/Map";

const DarkChapelData: AreaData = {
    name: "Dark Chapel",
    slug: "darkchapel",
    description: "",
    aspectRatio: 590/1024,
    imageUrl: (await import("@assets/areas/Map_DarkChapel.png")).default,
    markers: [],
    group: Area.Eltibule,
};

export default DarkChapelData;
