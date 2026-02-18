import { Area, MapData } from "@localtypes/Map";

const PovusCavesElvenJudgementData: MapData = {
    name: "Povus Caves Elven Judgement",
    slug: "povuscaveselvenjudgement",
    description: "",
    imageUrl: (await import("@assets/areas/Map_PovusCaves_ElvenJudgement.png")).default,
    markers: [],
    group: Area.Povus,
};

export default PovusCavesElvenJudgementData;
