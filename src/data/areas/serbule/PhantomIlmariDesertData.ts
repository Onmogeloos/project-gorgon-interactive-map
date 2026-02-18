import { GlobalMapData, Area, MarkerType } from "@localtypes/Map";

const PhantomIlmariDesertData: GlobalMapData[Area.PhantomIlmariDesert] = {
    name: "Phantom Ilmari Desert",
    slug: "phantomilmari",
    description: "",
    group: Area.Serbule,
    imageUrl: (await import("@assets/areas/Map_AreaDesert1.png")).default,
    markers: [
        {
            name: "Miravelle",
            position: [[353.625, 494.625]],
            type: MarkerType.NPC
        }
    ]
};

export default PhantomIlmariDesertData;
