import { useAppSelector } from "@store/hooks";
import { useContext } from "react";
import { Polygon, Tooltip } from "react-leaflet";
import { MapContext } from "../../main";

export default function ZoneLayer() {
    const { currentMapData, globalData: {zoneTypes} } = useContext(MapContext);
    const hiddenZoneTypes = useAppSelector((state) => state.map.hiddenZoneTypes);
     
    return <>
        {currentMapData.zones
        .filter((zone) => !hiddenZoneTypes.includes(zone.type))
        .map((zone, index) => <Polygon
            key={index}
            positions={zone.polygonPoints}
            pathOptions={{
                color: zoneTypes[zone.type].color,
                fillColor: zoneTypes[zone.type].color,
                fillOpacity: 0.2
            }}
        >
            <Tooltip permanent direction="center">
                {zone.name}
            </Tooltip>
        </Polygon>
        )}
    </>
}