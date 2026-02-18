import { Area, MapData } from "@localtypes/Map";

const NewPrestonbuleData: MapData = {
    name: "New Prestonbule",
    slug: "newprestonbule",
    description: "",
    imageUrl: (await import("@assets/areas/Map_NewPrestonbule.png")).default,
    markers: [],
    group: Area.Gazluk,
};

export default NewPrestonbuleData;
