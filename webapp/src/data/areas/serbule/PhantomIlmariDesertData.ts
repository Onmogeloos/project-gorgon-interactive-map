import { GlobalMapData, Area, MarkerType } from "@localtypes/Map";

const PhantomIlmariDesertData: GlobalMapData[Area.PhantomIlmariDesert] = {
    name: "Phantom Ilmari Desert",
    slug: "phantomilmari",
    description: "",
    group: Area.Serbule,
    imageUrl: (await import("@assets/areas/Map_AreaDesert1.png")).default,
    markers: [
        {
            name: "Miraverre",
            positions: [[353.625, 494.625]],
            type: MarkerType.NPC
        },
        { name: "Meditation Pillar", type: MarkerType.MeditationPillar, positions: [[93.25, 419.375], [520.625, 280.5]] },
    ]
};

export default PhantomIlmariDesertData;
