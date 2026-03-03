import { Area, GlobalData, GlobalMapData, MarkerType } from "@localtypes/Map";
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

export async function loadGlobalData(): Promise<GlobalData> {
    return {
        markerTypes: {
            [MarkerType.MushroomCircle]: {
                icon: (await import("@assets/icons/mushrooms.svg?raw")).default,
                iconElement: (await import("@assets/icons/mushrooms.svg")).default,
                label: "Mushroom Circles",
                color: "#dd93ec",
                type: "icon"
            },
            [MarkerType.Animal]: {
                icon: (await import("@assets/icons/cow.svg?raw")).default,
                iconElement: (await import("@assets/icons/cow.svg")).default,
                label: "Animals",
                color: "#b3ca75",
                type: "icon",
            },
            [MarkerType.Boss]: {
                icon: (await import("@assets/icons/boss.svg?raw")).default,
                iconElement: (await import("@assets/icons/boss.svg")).default,
                label: "Bosses",
                color: "#a74343",
                type: "label",
                scale: 1
            },
            [MarkerType.Entrance]: {
                icon: (await import("@assets/icons/cave.svg?raw")).default,
                iconElement: (await import("@assets/icons/cave.svg")).default,
                label: "Entrances",
                color: "#7A7A7A",
                type: "label",
                zIndex: 4,
                scale: 1.3
            },
            [MarkerType.NPC]: {
                icon: (await import("@assets/icons/user.svg?raw")).default,
                iconElement: (await import("@assets/icons/user.svg")).default,
                label: "NPCs",
                color: "#6A8BA8",
                type: "label",
                scale: 1
            },
            [MarkerType.Location]: {
                icon: (await import("@assets/icons/marker.svg?raw")).default,
                iconElement: (await import("@assets/icons/marker.svg")).default,
                label: "Locations",
                color: "#afafaf",
                type: "label",
                scale: 1.5,
                zIndex: 5
            },
            [MarkerType.Object]: {
                icon: (await import("@assets/icons/hexagon.svg?raw")).default,
                iconElement: (await import("@assets/icons/hexagon.svg")).default,
                label: "Objects",
                color: "#8B7355",
                type: "icon"
            },
            [MarkerType.ZonePortal]: {
                icon: (await import("@assets/icons/road.svg?raw")).default,
                iconElement: (await import("@assets/icons/road.svg")).default,
                label: "Zone Portals",
                color: "#B8825C",
                type: "icon"
            },
            [MarkerType.TeleportPlatform]: {
                icon: (await import("@assets/icons/teleport.svg?raw")).default,
                iconElement: (await import("@assets/icons/teleport.svg")).default,
                label: "Teleport Platforms",
                color: "#7A9B7F",
                type: "icon"
            },
            [MarkerType.MeditationPillar]: {
                icon: (await import("@assets/icons/meditate.svg?raw")).default,
                iconElement: (await import("@assets/icons/meditate.svg")).default,
                label: "Meditation Pillars",
                color: "#9178A8",
                type: "icon"
            },
            [MarkerType.FruitTree]: {
                icon: (await import("@assets/icons/fruittree.svg?raw")).default,
                iconElement: (await import("@assets/icons/fruittree.svg")).default,
                label: "Fruit trees",
                color: "#7F9C6E",
                type: "icon"
            },
            [MarkerType.ForageSpots]: {
                icon: (await import("@assets/icons/plant.svg?raw")).default,
                iconElement: (await import("@assets/icons/plant.svg")).default,
                label: "Foraging Spots",
                color: "#8FA87D",
                type: "icon"
            },
            [MarkerType.Altar]: {
                icon: (await import("@assets/icons/shrine.svg?raw")).default,
                iconElement: (await import("@assets/icons/shrine.svg")).default,
                label: "Altars",
                color: "#A89BC7",
                type: "icon"
            },
            [MarkerType.UniqueEnemy]: {
                icon: (await import("@assets/icons/user.svg?raw")).default,
                iconElement: (await import("@assets/icons/user.svg")).default,
                label: "Enemies",
                color: "#B87070",
                type: "label",
                scale: 1
            },
            [MarkerType.MiniBoss]: {
                icon: (await import("@assets/icons/elite.svg?raw")).default,
                iconElement: (await import("@assets/icons/elite.svg")).default,
                label: "Elite enemies",
                color: "#A05858",
                type: "label",
                zIndex: -1
            },
            [MarkerType.Treasure]: {
                icon: (await import("@assets/icons/treasure.svg?raw")).default,
                iconElement: (await import("@assets/icons/treasure.svg")).default,
                label: "Treasures",
                color: "#ecdf90",
                type: "icon"
            },
            [MarkerType.Lore]: {
                icon: (await import("@assets/icons/scroll.svg?raw")).default,
                iconElement: (await import("@assets/icons/scroll.svg")).default,
                label: "Lore",
                color: "#b97960",
                type: "icon"
            },
            [MarkerType.PlayerShop]: {
                icon: (await import("@assets/icons/user.svg?raw")).default,
                iconElement: (await import("@assets/icons/user.svg")).default,
                label: "Player Shops",
                color: "#7A9B7F",
                type: "label",
                zIndex: -1
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
        // [Area.PuckHalls]: PuckHallsData,
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
        // [Area.WardenCave]: WardenCaveData,
        [Area.WindyViewCave]: WindyViewCaveData,
        [Area.WinterNexus]: WinterNexusData,
        [Area.WolfCave]: WolfCaveData,
        [Area.YetiCave]: YetiCaveData,
    };
}