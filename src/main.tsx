import { ImageOverlay, MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { bounds, CRS } from 'leaflet';
import MarkerLayer from './MarkerLayer';
import { createContext, useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import { createRoot } from 'react-dom/client';
import MAP_DATA, {MapData, Maps} from './Mapdata';

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`

export const MapContext = createContext<{
    currentMapData: MapData;
    setCurrentMap: (map: Maps) => void;
    mapData: typeof MAP_DATA;
}>({
    currentMapData: MAP_DATA[Maps.AnagogeIsland],
    setCurrentMap: () => {},
    mapData: MAP_DATA
});

function App() {
    const [currentMapData, setCurrentMapData] = useState<MapData>(MAP_DATA[Maps.AnagogeIsland]);
    
    return (
        <MainContainer>
            <MapContext.Provider value={{
                currentMapData: currentMapData,
                setCurrentMap: (map: Maps) => setCurrentMapData(MAP_DATA[map]),
                mapData: MAP_DATA
            }}>
                <Sidebar />
                <MapContainer
                    crs={CRS.Simple}
                    bounds={[[0, 0], [1000, 1000]]}
                    style={{ height: '100vh', width: '100vw', background: '#000' }}
                >
                    <ImageOverlay
                    url={}
                    bounds={[[0, 0], [1000, 1000]]}
                    />
                    <MarkerLayer mapData={currentMapData} />
                </MapContainer>
            </MapContext.Provider>
        </MainContainer>
    );
}


createRoot(document.getElementById("root") as HTMLElement).render(
    <App />,
);
