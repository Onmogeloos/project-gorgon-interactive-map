import { GlobalData, GlobalMapData, MapData, Maps } from "@localtypes/Map";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { CRS } from 'leaflet';
import { createContext, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { MapContainer } from 'react-leaflet';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router';
import styled, { ThemeProvider } from 'styled-components';
import Map from './components/map/Map';
import { loadGlobalData, loadMapData } from './components/Mapdata';
import Sidebar from './components/sidebar/Sidebar';
import { store } from './store/store';
import theme from './Theme';

// CSS
import 'leaflet/dist/leaflet.css';
import "./assets/css/global.css";
import FloatingButtons from "@components/FloatingButtons";

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
    globalData: GLOBAL_DATA,
});

function App() {

    useEffect(() => {
        // Preload all map images
        Object.values(MAP_DATA).forEach(map => {
            const img = new Image();
            img.src = map.imageUrl;
        });
    }, [])

    return (
        <Provider store={store}>
            <MainContainer>
                <ThemeProvider theme={theme}>
                    <MUIThemeProvider theme={theme}>
                        <CssBaseline />
                        <HashRouter>
                            <Routes>
                                <Route key={MAP_DATA[Maps.AnagogeIsland].slug} path={"/"} element={<Page map={MAP_DATA[Maps.AnagogeIsland]} />} />
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
        </Provider>
    );
}

function Page({ map: mapData }: { map: MapData }) {
    return <>
        <MapContext.Provider value={{
            currentMapData: mapData,
            mapData: MAP_DATA,
            globalData: GLOBAL_DATA,
        }}>
            <Sidebar />
            <MapContainer
                crs={CRS.Simple}
                bounds={[[0, 0], [1000, 1000]]}
                style={{ height: '100vh', width: '100vw' }}
                minZoom={-1}
                maxZoom={5}
                zoom={0}
                attributionControl={false}
                zoomControl={false}
            >
                <Map/>
            </MapContainer >
            <FloatingButtons />
        </MapContext.Provider>
    </>
}


createRoot(document.getElementById("root") as HTMLElement).render(
    <App />,
);
