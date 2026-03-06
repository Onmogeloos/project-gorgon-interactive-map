import { Area, GlobalMapData, MarkerType } from "@localtypes/Map";

const StatehelmData: GlobalMapData[Area.Statehelm] = {
    name: "Statehelm",
    slug: "statehelm",
    description: "",
    minLevel: 95,
    maxLevel: 100,
    group: Area.Statehelm,
    imageUrl: (await import("@assets/areas/Map_AreaStatehelm.png")).default,
    markers: [
        { name: "Manhole", type: MarkerType.Object, positions: [ [602.0625, 167.4375], ] },
        { name: "Path to Vidaria", type: MarkerType.ZonePortal, positions: [[451.5, 3.75]], data:{leadsTo:Area.Vidaria} },
        { name: "Fairy Sanctuary", type: MarkerType.Location, positions: [[941, 193.5]]},
        { name: "Steven Poplar", type: MarkerType.NPC, positions: [ [599, 359.75], ] },
        { name: "Teleport Platform", type: MarkerType.TeleportPlatform, positions: [ [712.625, 413.25], ] },
        

    ],
};

export default StatehelmData;
