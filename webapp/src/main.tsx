import { Area, AreaData, GlobalData, GlobalMapData } from "@localtypes/Map";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { CRS } from 'leaflet';
import { createContext, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { MapContainer } from 'react-leaflet';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router';
import styled, { ThemeProvider } from 'styled-components';
import Map from './components/map/Map';
import Sidebar from './components/sidebar/Sidebar';
import { loadGlobalData, loadMapData } from './data/Mapdata';
import { store } from './store/store';
import theme from './Theme';

// CSS
import FloatingButtons from "@components/FloatingButtons";
import LoadingOverlay from "@components/LoadingOverlay";
import 'leaflet/dist/leaflet.css';
import "./assets/css/global.css";

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`

export const MapContext = createContext<{
    currentMapData: AreaData;
    currentArea: Area;
    mapData: GlobalMapData;
    globalData: GlobalData;
}>({
    currentMapData: null as any,
    currentArea: Area.AnagogeIsland,
    mapData: null as any,
    globalData: null as any,
});

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [mapData, setMapData] = useState<GlobalMapData>(null as any);
    const [globalData, setGlobalData] = useState<GlobalData>(null as any);

    useEffect(() => {
        const preload = async () => {
            const MAP_DATA = await loadMapData();
            const GLOBAL_DATA = await loadGlobalData();
            setMapData(MAP_DATA);
            setGlobalData(GLOBAL_DATA);
            // Preload all map images
            Object.values(MAP_DATA).forEach(map => {
                const img = new Image();
                img.src = map.imageUrl;
            });
        };
        preload().finally(() => setIsLoading(false));
    }, [])

    return (
        <Provider store={store}>
            <MainContainer>
                <ThemeProvider theme={theme}>
                    <MUIThemeProvider theme={theme}>
                        <CssBaseline />
                        {isLoading && <LoadingOverlay />}
                        {
                            !isLoading && <HashRouter>
                                <Routes>
                                    <Route key={mapData[Area.AnagogeIsland].slug} path={"/"}
                                        element={<Page
                                            area={Area.AnagogeIsland}
                                            mapData={mapData[Area.AnagogeIsland]}
                                            globalData={globalData}
                                            globalMapData={mapData} />} />
                                    {
                                        Object.entries(mapData).map(([area, map]: [Area, AreaData]) => (
                                            <Route
                                                key={map.slug}
                                                path={map.slug}
                                                element={<Page
                                                    mapData={map}
                                                    area={area}
                                                    globalData={globalData}
                                                    globalMapData={mapData} />} />
                                        ))
                                    }
                                </Routes>
                            </HashRouter>
                        }
                    </MUIThemeProvider>
                </ThemeProvider>
            </MainContainer >
        </Provider>
    );
}

function Page({ area, mapData, globalData, globalMapData }: { mapData: AreaData, area: Area, globalData: GlobalData, globalMapData: GlobalMapData}) {
    return <>
        <MapContext.Provider value={{
            currentMapData: mapData,
            currentArea: area,
            mapData: globalMapData,
            globalData: globalData
        }}>
            <Sidebar />
            <MapContainer
                key={mapData.slug}
                crs={CRS.Simple}
                bounds={[[0, 0], [1000, 1000]]}
                style={{ height: '100vh', width: '100vw' }}
                minZoom={-1}
                maxZoom={5}
                zoom={0}
                zoomAnimation={false}
                attributionControl={false}
                zoomControl={false}
            >
                <Map />
            </MapContainer >
            <FloatingButtons />
        </MapContext.Provider>
    </>
}

const container = document.getElementById("root") as HTMLElement;
let root = (container as any)._root || null;
if (!root) {
    root = createRoot(container);
    (container as any)._root = root;
}
root.render(<App />);