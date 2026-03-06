import { Area, GlobalMapData, MarkerType } from "@localtypes/Map";

const RahuData: GlobalMapData[Area.Rahu] = {
    name: "Rahu",
    slug: "rahu",
    description: "",
    group: Area.Rahu,
    aspectRatio: 1720 / 1772,
    minLevel: 51,
    maxLevel: 60,
    imageUrl: (await import("@assets/areas/Map_AreaRahu.png")).default,
    markers: [
        { name: "Work Orders", type: MarkerType.WorkOrders, positions: [ [952.625, 73.8125], ] },
        { name: "Sheyne", type: MarkerType.NPC, positions: [[926.5461791042703, 76.37680879352682],] },
        { name: "Chemist", type: MarkerType.NPC, positions: [[938.7961791042703, 81.75180879352682],] },
        { name: "Ichin", type: MarkerType.NPC, positions: [[947.7961791042703, 76.00180879352682],] },
        { name: "Guild Chest", type: MarkerType.Storage, positions: [[910.875, 81.5],] },
        { name: "Sirine", type: MarkerType.NPC, positions: [[904, 65],] },
        { name: "Teleport Platform", type: MarkerType.TeleportPlatform, positions: [[921.125, 102.125], [620.5625, 80.9375], [362.6875, 166.6875]] },
        { name: "Meditation Pillar", type: MarkerType.MeditationPillar, positions: [[913.5, 102.5],] },
        { name: "Shirogen", type: MarkerType.NPC, positions: [[894.125, 111.25],] },
        { name: "Daniel Murderdark", type: MarkerType.NPC, positions: [[888.75, 96.375],] },
        { name: "Lady Windsong", type: MarkerType.NPC, positions: [[910.1875, 122.75],] },
        { name: "Amutasa", type: MarkerType.NPC, positions: [[867.625, 67.125],] },
        { name: "Nishika", type: MarkerType.NPC, positions: [[854.375, 61.75],] },
        { name: "Furlak", type: MarkerType.NPC, positions: [[843.5, 66],] },
        { name: "Lakrea", type: MarkerType.NPC, positions: [[838.25, 66.875],] },

        { name: "Ufkar", type: MarkerType.NPC, positions: [[837.375, 88.5],] },
        { name: "Ashk", type: MarkerType.NPC, positions: [[857.875, 100.75],] },
        { name: "Zhao", type: MarkerType.NPC, positions: [[859.25, 111.75],] },
        { name: "Kohan", type: MarkerType.NPC, positions: [[868, 116.75],] },
        { name: "Sergeant Ultaka", type: MarkerType.NPC, positions: [[813.2662669216745, 74.1597108468396],] },
        { name: "Three-Eyes", type: MarkerType.NPC, positions: [[764.5, 101.75],] },
        { name: "Percussa", type: MarkerType.NPC, positions: [[737.75, 63],] },
        { name: "Dhakmar", type: MarkerType.NPC, positions: [[710.5, 100],] },
        { name: "Rugen", type: MarkerType.NPC, positions: [[702.5, 122],] },
        { name: "General Pask", type: MarkerType.Boss, positions: [[575, 248.25],] },

        { name: "Eye of Fate", type: MarkerType.Boss, positions: [[279.875, 574.25],] },

        { name: "Path to Povus", type: MarkerType.ZonePortal, positions: [[24, 747.5],], data: { leadsTo: Area.Povus } },
        { name: "Path to Ilmari", type: MarkerType.ZonePortal, positions: [[694.3125, 882.75],], data: { leadsTo: Area.Ilmari } },

    ],
};

export default RahuData;
