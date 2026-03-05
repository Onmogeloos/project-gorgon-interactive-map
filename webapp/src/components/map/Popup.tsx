import { FlexColumn } from "@components/Flex";
import { Area, MarkerData, MarkerType } from "@localtypes/Map";
import { Box, Link, Typography } from "@mui/material";
import { LatLng } from "leaflet";
import styled from "styled-components";

const Container = styled.div`
    user-select: text;
`

export default function Popup({ markerData: marker, navigateToArea, markerPosition }: {
    markerData: MarkerData,
    navigateToArea: (area: Area) => void,
    markerPosition: LatLng
}) {
    const { name, type } = marker;
    const toWiki = (name: string) => `https://wiki.projectgorgon.com/w/index.php?search=${name}`
    const positionString = `(${markerPosition.lat.toFixed(2)}, ${markerPosition.lng.toFixed(2)})`;
    return <Container>
        <Box style={{ whiteSpace: "pre-line" }}>
            <FlexColumn $gapY="0.5rem">
                {
                    (type == MarkerType.ZonePortal || type == MarkerType.Entrance)
                        ? <Link
                            sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
                            onClick={() => navigateToArea(marker.data.leadsTo)}
                        >
                            <Typography noWrap variant="h6" component="div">{name} {`>`}</Typography>
                        </Link>
                        : <Typography variant="h6" component="div">{name}</Typography>
                }
                <Box>
                    <a href={toWiki(name)} target="_blank" rel="noopener noreferrer">Wiki</a>
                </Box>
                <Box>
                    Type: {type}
                </Box>
                <Box>
                    Position: {positionString}
                </Box>
                {marker.description}
            </FlexColumn>
        </Box>
    </Container>
}