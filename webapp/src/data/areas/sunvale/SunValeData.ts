import { Area, GlobalMapData, MarkerType } from "@localtypes/Map";

const SunValeData: GlobalMapData[Area.SunVale] = {
    name: "Sun Vale",
    slug: "sunvale",
    description: "",
    group: Area.SunVale,
    minLevel: 30,
    maxLevel: 45,
    imageUrl: (await import("@assets/areas/Map_AreaSunVale.png")).default,
    markers: [
        { name: 'Molybdenum Mine', positions: [[913, 109]], type: MarkerType.Entrance, data: { leadsTo: Area.MolybdenumMine } },
        { name: 'Billy Boat-Biter', positions: [[896, 109]], type: MarkerType.NPC },
        {
            name: 'Shells',
            positions: [
                [933, 194.5],
                [510, 40],
                [871.875, 708.875],
                [253.875, 185.625],
                [55, 625],
                [200, 965],
                [369, 837.625],
            ],
            type: MarkerType.Object
        },
        { name: 'Druid Camp', positions: [[854, 257]], type: MarkerType.NPC },
        {
            name: 'Teleport Pad', positions: [
                [839, 261],
                [675, 145],
                [445, 635],
                [810, 840],
                [395, 305],
                [165, 615]
            ], type: MarkerType.TeleportPlatform
        },
        { name: 'Hiral', positions: [[839, 275]], type: MarkerType.NPC },
        { name: 'Preta', positions: [[839, 294]], type: MarkerType.NPC },
        { name: 'Eleme', positions: [[825, 315]], type: MarkerType.NPC },
        { name: 'Yagreet', positions: [[811, 326]], type: MarkerType.NPC },
        { name: 'Lisi', positions: [[805, 281]], type: MarkerType.NPC },
        { name: 'Rohina', positions: [[805, 250]], type: MarkerType.NPC },
        { name: 'Squidlips', positions: [[810, 215]], type: MarkerType.NPC },
        { name: 'Mushroom Circle', positions: [[813.5, 264.875]], type: MarkerType.MushroomCircle },
        { name: 'Yogzi', positions: [[790, 265]], type: MarkerType.NPC },
        { name: "The Wombat", type: MarkerType.NPC, positions: [[794.625, 298.25]] },
        { name: 'Jake the Buckler', positions: [[775, 280]], type: MarkerType.NPC },
        { name: 'Silvia Buckler', positions: [[765, 245]], type: MarkerType.NPC },
        { name: 'Altar', positions: [[770, 374], [805, 260]], type: MarkerType.Altar },
        {
            name: 'Old Statue', positions: [
                [790, 435],
                [809, 120],
                [825, 526],
                [455, 145],
                [430, 540],
                [660, 530],
                [805, 770],
                [320, 395],
                [145, 245],
                [160, 95],
                [135, 690],
                [480, 790]
            ],
            type: MarkerType.Statue
        },
        { name: 'Bell to Serbule', positions: [[703, 115]], type: MarkerType.ZonePortal, data: { leadsTo: Area.Serbule } },
        { name: 'Viedesi', positions: [[725, 150]], type: MarkerType.NPC },
        { name: 'Work Orders', positions: [[710, 160]], type: MarkerType.WorkOrders },
        {
            name: 'Meditation Arch',
            positions: [
                [675, 205],
                [525, 450],
                [790, 775],
                [165, 215],
                [225, 815],
            ],
            type: MarkerType.MeditationPillar
        },
        { name: 'Wreck', positions: [[660, 85], [220, 75]], type: MarkerType.Object },
        { name: 'Superspider', positions: [[595, 350]], type: MarkerType.Boss },
        { name: 'The Flower Child', positions: [[555, 250]], type: MarkerType.Boss },
        { name: 'Betra the Cold', positions: [[495, 245]], type: MarkerType.Boss },
        { name: 'Animal Town', positions: [[429.5, 605.75]], type: MarkerType.Location },
        { name: 'Yavazek', positions: [[485, 635]], type: MarkerType.NPC },
        { name: 'Cinnamon the rabbit', positions: [[485, 605]], type: MarkerType.NPC },
        { name: 'Raul', positions: [[470, 605]], type: MarkerType.NPC },
        { name: 'Daisy', positions: [[465, 625]], type: MarkerType.NPC },
        { name: 'Norbert', positions: [[455, 585]], type: MarkerType.NPC },
        { name: 'Spot', positions: [[455, 635]], type: MarkerType.NPC },
        { name: 'Elaina', positions: [[445, 605]], type: MarkerType.NPC },
        { name: 'Legs', positions: [[430, 590]], type: MarkerType.NPC },
        { name: 'Kodan', positions: [[425, 625]], type: MarkerType.NPC },
        { name: 'Jumper', positions: [[415, 605]], type: MarkerType.NPC },
        { name: 'Bridge Bully', positions: [[790, 815]], type: MarkerType.UniqueEnemy, description: `Jumper from Animal Town asks you to defeat the Bridge Bully` },
        { name: 'Vurrkan', positions: [[730, 805]], type: MarkerType.Boss },
        { name: 'Puffy Ben', positions: [[687, 766]], type: MarkerType.NPC },
        { name: 'Agrashab', positions: [[395, 320]], type: MarkerType.NPC, description: `Skill Trainer: Hammer` },
        { name: 'Murdebok the Valiant', positions: [[300, 295]], type: MarkerType.Boss },
        { name: 'Winter Nexus', positions: [[215, 265]], type: MarkerType.Entrance, data: { leadsTo: Area.WinterNexus } },
        { name: 'The Thorn of Decay', positions: [[200, 390]], type: MarkerType.Boss },
        {
            name: 'Bones',
            positions: [
                [60, 200],
                [605, 925],
            ],
            type: MarkerType.Object
        },
        { name: 'Urglemarg', positions: [[240, 565]], type: MarkerType.NPC },
        { name: 'Fish Bowl Cavern', positions: [[120, 665]], type: MarkerType.Entrance, data: { leadsTo: Area.FishBowlCavern } },
        { name: 'Guard Captain Lusssha', positions: [[175, 860]], type: MarkerType.Boss },
        { name: 'Sacrificial Sea Cave', positions: [[160, 855]], type: MarkerType.Entrance, data: { leadsTo: Area.SacrificialSeaCave } },
        { name: 'Ranalon Ruin', positions: [[264.25, 854.25]], type: MarkerType.Location },
    ],
};

export default SunValeData;
