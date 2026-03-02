import { Area, AreaData, MarkerType } from "@localtypes/Map";

const SerbuleSewerData: AreaData = {
    name: "Serbule Sewer",
    slug: "serbulesewer",
    description: "",
    aspectRatio: 645 / 1024,
    imageUrl: (await import("@assets/areas/Map_SerbuleSewer.png")).default,
    markers: [
        {
            "name": "Serbule Exit",
            "type": MarkerType.Entrance,
            "positions": [
                [
                    977,
                    787
                ]
            ],
            data: { leadsTo: Area.Serbule }
        }
    ],
    group: Area.Serbule,
};

export default SerbuleSewerData;
