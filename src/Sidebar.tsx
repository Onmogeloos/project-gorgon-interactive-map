import { useContext } from "react";
import { MapContext } from "./main";
import { Maps } from "./Mapdata";

export default function Sidebar() {
    const { setCurrentMap } = useContext(MapContext);
    return (
        <div style={{ width: '300px', background: '#222', color: '#fff', padding: '20px' }}>
            <h2>Gorgon Interactive Map</h2>
            <p>Select a map from the list below:</p>
            <ul>
                <li onClick={() => setCurrentMap(Maps.AnagogeIsland)}>Anagoge Island</li>
                <li onClick={() => setCurrentMap(Maps.Serbule)}>Serbule</li>
                <li onClick={() => setCurrentMap(Maps.SerbuleHills)}>Serbule Hills</li>
            </ul>
        </div>
    );
}