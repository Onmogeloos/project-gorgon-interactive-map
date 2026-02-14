import { GlobalData, GlobalMapData, MapData, Maps, MarkerGroup } from '@types/Map';
import { CRS } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import { ImageOverlay, MapContainer, ZoomControl } from 'react-leaflet';
import { HashRouter, Route, Routes } from 'react-router';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import "./assets/css/global.css";
import { loadGlobalData, loadMapData } from './components/Mapdata';
import MarkerLayer from './components/MarkerLayer';
import Sidebar from './components/Sidebar';
import theme from './Theme';

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
    currentMapData: MAP_DATA[Maps.AnagogeIsland],
    mapData: MAP_DATA,
    globalData: GLOBAL_DATA
});

function App() {
    return (
        <MainContainer>
            <ThemeProvider theme={theme}>
                <MUIThemeProvider theme={theme}>
                    <CssBaseline />
                    <HashRouter>
                        <Routes>
                            {
                                Object.values(MAP_DATA).map((map) => (
                                    <Route key={map.slug} path={map.slug} element={<Page map={map} />} />
                                ))
                            }
                        </Routes>
                    </HashRouter>
                </MUIThemeProvider>
            </ThemeProvider>
        </MainContainer >
    );
}

function Page({ map }: { map: MapData }) {
    return <>
        <MapContext.Provider value={{
            currentMapData: map,
            mapData: MAP_DATA,
            globalData: GLOBAL_DATA
        }}>
            <Sidebar />
            <MapContainer
                crs={CRS.Simple}
                bounds={[[0, 0], [1000, 1000]]}
                style={{ height: '100vh', width: '100vw', background: '#000' }}
                minZoom={-2}
                maxZoom={2}
                zoom={0}
                zoomControl={false}
            >
                <ZoomControl position="topright" />
                <ImageOverlay
                    url={map.imageUrl}
                    bounds={[[0, 0], [1000, 1000]]}
                />
                <MarkerLayer mapData={map} />
            </MapContainer >
        </MapContext.Provider>
    </>
}


createRoot(document.getElementById("root") as HTMLElement).render(
    <App />,
);
