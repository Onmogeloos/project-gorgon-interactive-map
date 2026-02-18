import { Area, MapData } from "@localtypes/Map";

const TheWintertideData: MapData = {
    name: "The Wintertide",
    slug: "thewintertide",
    description: "",
    imageUrl: (await import("@assets/areas/Map_TheWintertide.png")).default,
    markers: [],
    group: Area.FaeRealm,
};

export default TheWintertideData;
