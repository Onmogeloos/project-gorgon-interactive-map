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
import FaeRealmData from "./areas/faerealm/FaeRealmData";
import TheWintertideData from "./areas/faerealm/TheWintertideData";
import GazlukData from "./areas/gazluk/GazlukData";
import NewPrestonbuleData from "./areas/gazluk/NewPrestonbuleData";
import NoNameCaveData from "./areas/gazluk/NoNameCaveData";
import SnowbloodCaveData from "./areas/gazluk/SnowbloodCaveData";
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
import VidariaData from "./areas/statehelm/VidariaData";
import SunValeCave1Data from "./areas/sunvale/SunValeCave1Data";
import SunValeCave2Data from "./areas/sunvale/SunValeCave2Data";
import SunValeCave3Data from "./areas/sunvale/SunValeCave3Data";
import SunValeData from "./areas/sunvale/SunValeData";
import WinterNexusData from "./areas/sunvale/WinterNexusData";

export async function loadGlobalData(): Promise<GlobalData> {
    return {
        markerGroups: {
            [MarkerType.Boss]: {
                icon: (await import("@assets/icons/boss.svg?raw")).default,
                label: "Bosses",
                color: "#A85C5C"
            },
            [MarkerType.Resource]: {
                icon: (await import("@assets/icons/user.svg?raw")).default,
                label: "Resources",
                color: "#6B8E7C"
            },
            [MarkerType.Entrance]: {
                icon: (await import("@assets/icons/cave.svg?raw")).default,
                label: "Entrances",
                color: "#7A7A7A"
            },
            [MarkerType.NPC]: {
                icon: (await import("@assets/icons/user.svg?raw")).default,
                label: "NPCs",
                color: "#6A8BA8"
            },
            [MarkerType.Location]: {
                icon: (await import("@assets/icons/marker.svg?raw")).default,
                label: "Locations",
                color: "#9B9B9B"
            },
            [MarkerType.Object]: {
                icon: (await import("@assets/icons/hexagon.svg?raw")).default,
                label: "Objects",
                color: "#8B7355"
            },
            [MarkerType.ZonePortal]: {
                icon: (await import("@assets/icons/road.svg?raw")).default,
                label: "Zone Portals",
                color: "#B8825C"
            },
            [MarkerType.TeleportPlatform]: {
                icon: (await import("@assets/icons/teleport.svg?raw")).default,
                label: "Teleport Platforms",
                color: "#7A9B7F"
            },
            [MarkerType.MeditationPillar]: {
                icon: (await import("@assets/icons/meditate.svg?raw")).default,
                label: "Meditation Pillars",
                color: "#9178A8"
            },
            [MarkerType.FruitTree]: {
                icon: (await import("@assets/icons/fruittree.svg?raw")).default,
                label: "Fruit trees",
                color: "#7F9C6E"
            },
            [MarkerType.ForageSpots]: {
                icon: (await import("@assets/icons/plant.svg?raw")).default,
                label: "Foraging Spots",
                color: "#8FA87D"
            },
            [MarkerType.Altar]: {
                icon: (await import("@assets/icons/shrine.svg?raw")).default,
                label: "Altars",
                color: "#A89BC7"
            },
            [MarkerType.Enemy]: {
                icon: (await import("@assets/icons/enemy.svg?raw")).default,
                label: "Enemies",
                color: "#B87070"
            },
            [MarkerType.Elite]: {
                icon: (await import("@assets/icons/elite.svg?raw")).default,
                label: "Elite enemies",
                color: "#A05858"
            }
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
        [Area.SunValeCave1]: SunValeCave1Data,
        [Area.SunValeCave2]: SunValeCave2Data,
        [Area.SunValeCave3]: SunValeCave3Data,
        [Area.TheWintertide]: TheWintertideData,
        // [Area.TowerView]: TowerViewData,
        // [Area.WardenCave]: WardenCaveData,
        [Area.WindyViewCave]: WindyViewCaveData,
        [Area.WinterNexus]: WinterNexusData,
        [Area.WolfCave]: WolfCaveData,
        [Area.YetiCave]: YetiCaveData,
    };
}