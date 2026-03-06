import { Area, GlobalData, GlobalMapData, MarkerType, MarkerTypeGroup } from "@localtypes/Map";
import AnagogeIslandData from "./areas/anagoge/AnagogeIslandData";
import AnagogeRecordsFacilityData from "./areas/anagoge/AnagogeRecordsFacility";
import CasinoData from "./areas/casino/CasinoData";
import BoardedUpBasementData from "./areas/eltibule/BoardedUpBasementData";
import DarkChapelData from "./areas/eltibule/DarkChapelData";
import EltibuleCryptData from "./areas/eltibule/EltibuleCryptData";
import EltibuleData from "./areas/eltibule/EltibuleData";
import GoblinDungeonData from "./areas/eltibule/GoblinDungeonData";
import GoblinDungeonTopFloorData from "./areas/eltibule/GoblinDungeonTopFloorData";
import HogansKeepBasementData from "./areas/eltibule/HogansKeepBasementData";
import AnimalNexusData from "./areas/faerealm/AnimalNexusData";
import FaeRealmData from "./areas/faerealm/FaeRealmData";
import TheWintertideData from "./areas/faerealm/TheWintertideData";
import GazlukData from "./areas/gazluk/GazlukData";
import NewPrestonbuleData from "./areas/gazluk/NewPrestonbuleData";
import NoNameCaveData from "./areas/gazluk/NoNameCaveData";
import SnowbloodCaveData from "./areas/gazluk/SnowbloodCaveData";
import TowerViewCave from "./areas/gazluk/TowerViewCave";
import WindyViewCaveData from "./areas/gazluk/WindyViewCaveData";
import IlmariData from "./areas/ilmari/IlmariData";
import LabyrinthData from "./areas/ilmari/LabyrinthData";
import KurCourtyardData from "./areas/kurmountains/KurCourtyardData";
import KurMountainsData from "./areas/kurmountains/KurMountainsData";
import KurTowerData from "./areas/kurmountains/KurTowerData";
import WolfCaveData from "./areas/kurmountains/WolfCaveData";
import YetiCaveData from "./areas/kurmountains/YetiCaveData";
import PovusCavesAktaariCaveData from "./areas/povus/PovusCavesAktaariCaveData";
import PovusCavesElvenJudgementData from "./areas/povus/PovusCavesElvenJudgementData";
import PovusCavesErrrukasCaveData from "./areas/povus/PovusCavesErrrukasCaveData";
import PovusCavesForthragarianCavesData from "./areas/povus/PovusCavesForthragarianCavesData";
import PovusCavesLevel1Data from "./areas/povus/PovusCavesLevel1Data";
import PovusCavesLevel2Data from "./areas/povus/PovusCavesLevel2Data";
import PovusCavesLevel3Data from "./areas/povus/PovusCavesLevel3Data";
import PovusCavesLevel4Data from "./areas/povus/PovusCavesLevel4Data";
import PovusCavesNightmareCavesData from "./areas/povus/PovusCavesNightmareCavesData";
import PovusData from "./areas/povus/PovusData";
import RahuData from "./areas/rahu/RahuData";
import RahuSewerData from "./areas/rahu/RahuSewerData";
import BorghildData from "./areas/serbule/BorghildData";
import BrainBugCaveData from "./areas/serbule/BrainBugCaveData";
import CarpalTunnelsData from "./areas/serbule/CarpalTunnelsData";
import CrystalCavernData from "./areas/serbule/CrystalCavernData";
import KhyruleksCryptData from "./areas/serbule/KhyruleksCryptData";
import MyconianCaveData from "./areas/serbule/MyconianCaveData";
import PhantomIlmariDesertData from "./areas/serbule/PhantomIlmariDesertData";
import SerbuleData from "./areas/serbule/SerbuleData";
import SerbuleSewerData from "./areas/serbule/SerbuleSewerData";
import RanalonBaseData from "./areas/serbulehills/RanalonBaseData";
import SerbuleHillsData from "./areas/serbulehills/SerbuleHillsData";
import SpiderCaveData from "./areas/serbulehills/SpiderCaveData";
import StatehelmCavesSafeHouseAData from "./areas/statehelm/StatehelmCavesSafeHouseAData";
import StatehelmData from "./areas/statehelm/StatehelmData";
import FishBowlCavernData from "./areas/sunvale/FishBowlCavernData";
import MolybdenumCaveData from "./areas/sunvale/MolybdenumCaveData";
import SacrificialSeaCaveData from "./areas/sunvale/SacrificialSeaCaveData";
import SunValeData from "./areas/sunvale/SunValeData";
import WinterNexusData from "./areas/sunvale/WinterNexusData";
import VidariaData from "./areas/vidaria/VidariaData";
import WardenCaveData from "./areas/kurmountains/WardenCaveData";
import PuckHallsData from "./areas/sunvale/PuckHallsData";

export async function loadGlobalData(): Promise<GlobalData> {
    return {
        markerTypes: {
            [MarkerType.Storage]: {
                icon: (await import("@assets/icons/chest.svg?raw")).default,
                IconElement: (await import("@assets/icons/chest.svg?react")).default,
                label: "Storage",
                color: "#86a0da",
                type: "icon",
                group: MarkerTypeGroup.Exploration,
                zIndex: 4
            },
            [MarkerType.Ore]: {
                icon: (await import("@assets/icons/ore.svg?raw")).default,
                IconElement: (await import("@assets/icons/ore.svg?react")).default,
                label: "Ore",
                color: "#626f8d",
                type: "icon",
                group: MarkerTypeGroup.Exploration,
                zIndex: 4
            },
            [MarkerType.WorkOrders]: {
                icon: (await import("@assets/icons/clipboard.svg?raw")).default,
                IconElement: (await import("@assets/icons/clipboard.svg?react")).default,
                label: "Work Orders",
                color: "#4d7e76",
                type: "icon",
                group: MarkerTypeGroup.Exploration
            },
            [MarkerType.Campfire]: {
                icon: (await import("@assets/icons/campfire.svg?raw")).default,
                IconElement: (await import("@assets/icons/campfire.svg?react")).default,
                label: "Campfires",
                color: "#b98422",
                type: "icon",
                group: MarkerTypeGroup.Exploration
            },
            [MarkerType.Statue]: {
                icon: (await import("@assets/icons/obelisk.svg?raw")).default,
                IconElement: (await import("@assets/icons/obelisk.svg?react")).default,
                label: "Statues",
                color: "#9B9B9B",
                type: "icon",
                group: MarkerTypeGroup.Exploration
            },
            [MarkerType.MushroomCircle]: {
                icon: (await import("@assets/icons/mushrooms.svg?raw")).default,
                IconElement: (await import("@assets/icons/mushrooms.svg?react")).default,
                label: "Mushroom Circles",
                color: "#dd93ec",
                type: "icon",
                group: MarkerTypeGroup.Exploration
            },
            [MarkerType.Animal]: {
                icon: (await import("@assets/icons/cow.svg?raw")).default,
                IconElement: (await import("@assets/icons/cow.svg?react")).default,
                label: "Animals",
                color: "#b3ca75",
                type: "icon",
                group: MarkerTypeGroup.NPCs
            },
            [MarkerType.Boss]: {
                icon: (await import("@assets/icons/boss.svg?raw")).default,
                IconElement: (await import("@assets/icons/boss.svg?react")).default,
                label: "Bosses",
                color: "#a74343",
                type: "label",
                scale: 1,
                group: MarkerTypeGroup.Enemies
            },
            [MarkerType.Entrance]: {
                icon: (await import("@assets/icons/cave.svg?raw")).default,
                IconElement: (await import("@assets/icons/cave.svg?react")).default,
                label: "Entrances",
                color: "#7A7A7A",
                type: "label",
                zIndex: 4,
                scale: 1.3,
                group: MarkerTypeGroup.Locations
            },
            [MarkerType.NPC]: {
                icon: (await import("@assets/icons/user.svg?raw")).default,
                IconElement: (await import("@assets/icons/user.svg?react")).default,
                label: "NPCs",
                color: "#6A8BA8",
                type: "label",
                scale: 1,
                group: MarkerTypeGroup.NPCs
            },
            [MarkerType.Location]: {
                icon: (await import("@assets/icons/marker.svg?raw")).default,
                IconElement: (await import("@assets/icons/marker.svg?react")).default,
                label: "Locations",
                color: "#afafaf",
                type: "label",
                scale: 1.5,
                zIndex: 5,
                group: MarkerTypeGroup.Locations
            },
            [MarkerType.Object]: {
                icon: (await import("@assets/icons/hexagon.svg?raw")).default,
                IconElement: (await import("@assets/icons/hexagon.svg?react")).default,
                label: "Objects",
                color: "#8B7355",
                type: "icon",
                group: MarkerTypeGroup.Exploration
            },
            [MarkerType.ZonePortal]: {
                icon: (await import("@assets/icons/road.svg?raw")).default,
                IconElement: (await import("@assets/icons/road.svg?react")).default,
                label: "Zone Portals",
                color: "#B8825C",
                type: "label",
                scale: 1.5,
                group: MarkerTypeGroup.Locations
            },
            [MarkerType.TeleportPlatform]: {
                icon: (await import("@assets/icons/teleport.svg?raw")).default,
                IconElement: (await import("@assets/icons/teleport.svg?react")).default,
                label: "Teleport Platforms",
                color: "#7A9B7F",
                type: "icon",
                group: MarkerTypeGroup.Exploration
            },
            [MarkerType.MeditationPillar]: {
                icon: (await import("@assets/icons/meditate.svg?raw")).default,
                IconElement: (await import("@assets/icons/meditate.svg?react")).default,
                label: "Meditation Pillars",
                color: "#9178A8",
                type: "icon",
                group: MarkerTypeGroup.Exploration
            },
            [MarkerType.FruitTree]: {
                icon: (await import("@assets/icons/fruittree.svg?raw")).default,
                IconElement: (await import("@assets/icons/fruittree.svg?react")).default,
                label: "Fruit trees",
                color: "#7F9C6E",
                type: "icon",
                group: MarkerTypeGroup.Forage
            },
            [MarkerType.Harvestable]: {
                icon: (await import("@assets/icons/plant.svg?raw")).default,
                IconElement: (await import("@assets/icons/plant.svg?react")).default,
                label: "Foraging Spots",
                color: "#8FA87D",
                type: "icon",
                group: MarkerTypeGroup.Exploration
            },
            [MarkerType.Altar]: {
                icon: (await import("@assets/icons/shrine.svg?raw")).default,
                IconElement: (await import("@assets/icons/shrine.svg?react")).default,
                label: "Altars",
                color: "#A89BC7",
                type: "icon",
                group: MarkerTypeGroup.Puzzle
            },
            [MarkerType.UniqueEnemy]: {
                icon: (await import("@assets/icons/user.svg?raw")).default,
                IconElement: (await import("@assets/icons/user.svg?react")).default,
                label: "Unique enemies",
                color: "#B87070",
                type: "label",
                scale: 1,
                group: MarkerTypeGroup.Enemies
            },
            [MarkerType.Camp]: {
                icon: (await import("@assets/icons/camp.svg?raw")).default,
                IconElement: (await import("@assets/icons/camp.svg?react")).default,
                label: "Camps",
                color: "rgb(109, 62, 35)",
                type: "icon",
                scale: 1,
                group: MarkerTypeGroup.Locations
            },
            [MarkerType.MiniBoss]: {
                icon: (await import("@assets/icons/elite.svg?raw")).default,
                IconElement: (await import("@assets/icons/elite.svg?react")).default,
                label: "Elite enemies",
                color: "rgb(161, 77, 77)",
                type: "label",
                zIndex: -1,
                group: MarkerTypeGroup.Enemies
            },
            [MarkerType.Treasure]: {
                icon: (await import("@assets/icons/chest.svg?raw")).default,
                IconElement: (await import("@assets/icons/chest.svg?react")).default,
                label: "Treasures",
                color: "#ecdf90",
                type: "icon",
                group: MarkerTypeGroup.Treasures
            },
            [MarkerType.Lore]: {
                icon: (await import("@assets/icons/scroll.svg?raw")).default,
                IconElement: (await import("@assets/icons/scroll.svg?react")).default,
                label: "Lore",
                color: "#b97960",
                type: "icon",
                group: MarkerTypeGroup.Lore
            },
            [MarkerType.PlayerShop]: {
                icon: (await import("@assets/icons/user.svg?raw")).default,
                IconElement: (await import("@assets/icons/user.svg?react")).default,
                label: "Player Shops",
                color: "#7A9B7F",
                type: "label",
                zIndex: -1,
                group: MarkerTypeGroup.NPCs
            },
        },
        markerTypeGroups: {
            [MarkerTypeGroup.Enemies]: {
                label: "Enemies",
            },
            [MarkerTypeGroup.Lore]: {
                label: "Lore",
            },
            [MarkerTypeGroup.Forage]: {
                label: "Forage",
            },
            [MarkerTypeGroup.Exploration]: {
                label: "Exploration",
            },
            [MarkerTypeGroup.NPCs]: {
                label: "NPCs",
            },
            [MarkerTypeGroup.Locations]: {
                label: "Locations",
            },
            [MarkerTypeGroup.Puzzle]: {
                label: "Puzzles",
            },
            [MarkerTypeGroup.Treasures]: {
                label: "Treasures",
            },
        }
    }
}

export async function loadMapData(): Promise<GlobalMapData> {
    return {
        [Area.AnagogeIsland]: AnagogeIslandData,
        [Area.NewbieIslandDungeon]: AnagogeRecordsFacilityData,
        [Area.Serbule]: SerbuleData,
        [Area.SerbuleHills]: SerbuleHillsData,
        [Area.PhantomIlmariDesert]: PhantomIlmariDesertData,
        [Area.Eltibule]: EltibuleData,
        [Area.SunVale]: SunValeData,
        [Area.KurMountains]: KurMountainsData,
        [Area.Ilmari]: IlmariData,
        [Area.Rahu]: RahuData,
        [Area.Gazluk]: GazlukData,
        [Area.FaeRealm]: FaeRealmData,
        [Area.AnimalNexus]: AnimalNexusData,
        [Area.Povus]: PovusData,
        [Area.Vidaria]: VidariaData,
        [Area.Statehelm]: StatehelmData,
        [Area.Casino]: CasinoData,
        [Area.BoardedUpBasement]: BoardedUpBasementData,
        [Area.Borghild]: BorghildData,
        [Area.BrainBugCave]: BrainBugCaveData,
        [Area.CarpalTunnels]: CarpalTunnelsData,
        [Area.CrystalCavern]: CrystalCavernData,
        [Area.DarkChapel]: DarkChapelData,
        [Area.EltibuleCrypt]: EltibuleCryptData,
        [Area.GoblinDungeon]: GoblinDungeonData,
        [Area.GoblinDungeonTopFloor]: GoblinDungeonTopFloorData,
        [Area.HogansKeepBasement]: HogansKeepBasementData,
        [Area.KhyruleksCrypt]: KhyruleksCryptData,
        [Area.KurCourtyard]: KurCourtyardData,
        [Area.KurTower]: KurTowerData,
        [Area.Labyrinth]: LabyrinthData,
        [Area.MyconianCave]: MyconianCaveData,
        [Area.NewPrestonbule]: NewPrestonbuleData,
        [Area.NoNameCave]: NoNameCaveData,
        [Area.PovusCavesAktaariCave]: PovusCavesAktaariCaveData,
        [Area.PovusCavesElvenJudgement]: PovusCavesElvenJudgementData,
        [Area.PovusCavesErrrukasCave]: PovusCavesErrrukasCaveData,
        [Area.PovusCavesForthragarianCaves]: PovusCavesForthragarianCavesData,
        [Area.PovusCavesLevel1]: PovusCavesLevel1Data,
        [Area.PovusCavesLevel2]: PovusCavesLevel2Data,
        [Area.PovusCavesLevel3]: PovusCavesLevel3Data,
        [Area.PovusCavesLevel4]: PovusCavesLevel4Data,
        [Area.PovusCavesNightmareCaves]: PovusCavesNightmareCavesData,
        [Area.PuckHalls]: PuckHallsData,
        [Area.RahuSewer]: RahuSewerData,
        [Area.RanalonBase]: RanalonBaseData,
        [Area.SerbuleSewer]: SerbuleSewerData,
        [Area.SnowbloodCave]: SnowbloodCaveData,
        [Area.SpiderCave]: SpiderCaveData,
        [Area.StatehelmCavesSafeHouseA]: StatehelmCavesSafeHouseAData,
        [Area.FishBowlCavern]: FishBowlCavernData,
        [Area.MolybdenumMine]: MolybdenumCaveData,
        [Area.SacrificialSeaCave]: SacrificialSeaCaveData,
        [Area.TheWintertide]: TheWintertideData,
        [Area.TowerView]: TowerViewCave,
        [Area.WardenCave]: WardenCaveData,
        [Area.WindyViewCave]: WindyViewCaveData,
        [Area.WinterNexus]: WinterNexusData,
        [Area.WolfCave]: WolfCaveData,
        [Area.YetiCave]: YetiCaveData,
    };
}