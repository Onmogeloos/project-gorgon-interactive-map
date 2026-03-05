import { Area, AreaData } from "@localtypes/Map";

const PovusCavesElvenJudgementData: AreaData = {
    name: "Povus Caves Elven Judgement",
    slug: "povuscaveselvenjudgement",
    description: "",
    aspectRatio: 914/1024,
    imageUrl: (await import("@assets/areas/Map_PovusCaves_ElvenJudgement.png")).default,
    markers: [],
    group: Area.Povus,
};

export default PovusCavesElvenJudgementData;
