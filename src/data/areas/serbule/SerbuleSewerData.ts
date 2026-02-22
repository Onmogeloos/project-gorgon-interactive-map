import { Area, MapData, MarkerType } from "@localtypes/Map";

const SerbuleSewerData: MapData = {
    name: "Serbule Sewer",
    slug: "serbulesewer",
    description: "",
    aspectRatio: 645 / 1024,
    imageUrl: (await import("@assets/areas/Map_SerbuleSewer.png")).default,
    markers: [
        {
            "name": "Serbule Crypt Portal",
            "type": MarkerType.ZonePortal,
            "positions": [
                [
                    977,
                    787
                ]
            ]
        }
    ],
    group: Area.Serbule,
};

export default SerbuleSewerData;
