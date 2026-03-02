import { Area, AreaData } from "@localtypes/Map";

const TowerViewCaveData: AreaData = {
    name: "Tower View Cave",
    slug: "towerviewcave",
    description: "",
    aspectRatio: 256/512,
    imageUrl: (await import("@assets/areas/Map_TowerView.png")).default,
    markers: [
        
    ],
    group: Area.Gazluk,
};

export default TowerViewCaveData;
