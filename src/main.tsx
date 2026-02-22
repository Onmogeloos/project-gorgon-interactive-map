import { GlobalData, GlobalMapData, MapData, Area } from "@localtypes/Map";
import { Box, CircularProgress, CssBaseline } from "@mui/material";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { CRS } from 'leaflet';
import { createContext, useEffect, useReducer, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { MapContainer } from 'react-leaflet';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router';
import styled, { ThemeProvider } from 'styled-components';
import Map from './components/map/Map';
import { loadGlobalData, loadMapData } from './data/Mapdata';
import Sidebar from './components/sidebar/Sidebar';
import { store } from './store/store';
import theme from './Theme';

// CSS
import 'leaflet/dist/leaflet.css';
import "./assets/css/global.css";
import FloatingButtons from "@components/FloatingButtons";
import LoadingOverlay from "@components/LoadingOverlay";

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`

const MAP_DATA = await loadMapData();
const GLOBAL_DATA = await loadGlobalData();

type ImageCache = {
    [area in Area]?: HTMLImageElement
};

export const MapContext = createContext<{
    currentMapData: MapData;
    currentArea: Area;
    mapData: GlobalMapData;
    globalData: GlobalData;
}>({
        currentMapData: MAP_DATA[Area.AnagogeIsland],
        currentArea: Area.AnagogeIsland,
        mapData: MAP_DATA,
        globalData: GLOBAL_DATA,
    });

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const preload = async () => {
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
                        <HashRouter>
                            <Routes>
                                <Route key={MAP_DATA[Area.AnagogeIsland].slug} path={"/"}
                                    element={<Page
                                        area={Area.AnagogeIsland}
                                        map={MAP_DATA[Area.AnagogeIsland]}
                                        isLoading={isLoading}/>} />
                                {
                                    Object.entries(MAP_DATA).map(([area, map]: [Area, MapData]) => (
                                        <Route
                                            key={map.slug}
                                            path={map.slug}
                                            element={<Page
                                                map={map}
                                                area={area}
                                                isLoading={isLoading}/>} />
                                    ))
                                }
                            </Routes>
                        </HashRouter>
                    </MUIThemeProvider>
                </ThemeProvider>
            </MainContainer >
        </Provider>
    );
}

function Page({ map: mapData, area, isLoading }: { map: MapData, area: Area, isLoading: boolean }) {
    return <>
        <MapContext.Provider value={{
            currentMapData: mapData,
            currentArea: area,
            mapData: MAP_DATA,
            globalData: GLOBAL_DATA
        }}>
            <Sidebar />
            {
                !isLoading && <MapContainer
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
            }
            {isLoading && <LoadingOverlay />}
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