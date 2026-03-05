import { Area, AreaData } from "@localtypes/Map";

const TheWintertideData: AreaData = {
    name: "The Wintertide",
    slug: "thewintertide",
    description: "",
    imageUrl: (await import("@assets/areas/Map_TheWintertide.png")).default,
    markers: [],
    group: Area.FaeRealm,
};

export default TheWintertideData;
