import { GlobalData, GlobalMapData, MapData, Area } from "@localtypes/Map";
import { Box, CircularProgress, CssBaseline } from "@mui/material";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { CRS } from 'leaflet';
import { createContext, useEffect, useState } from 'react';
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

export const MapContext = createContext<{
    currentMapData: MapData;
    mapData: GlobalMapData;
    globalData: GlobalData;
}>({
    currentMapData: MAP_DATA[Area.AnagogeIsland],
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
                                <Route key={MAP_DATA[Area.AnagogeIsland].slug} path={"/"} element={<Page map={MAP_DATA[Area.AnagogeIsland]} isLoading={isLoading} />} />
                                {
                                    Object.values(MAP_DATA).map((map) => (
                                        <Route key={map.slug} path={map.slug} element={<Page map={map} isLoading={isLoading} />} />
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

function Page({ map: mapData, isLoading }: { map: MapData, isLoading: boolean }) {
    return <>
        <MapContext.Provider value={{
            currentMapData: mapData,
            mapData: MAP_DATA,
            globalData: GLOBAL_DATA,
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


createRoot(document.getElementById("root") as HTMLElement).render(
    <App />,
);
