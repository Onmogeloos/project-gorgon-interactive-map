import { FlexColumn, FlexRow } from "@components/Flex";
import { MarkerData, MarkerType } from "@localtypes/Map";
import { Box, Typography } from "@mui/material";
import { LatLng } from "leaflet";
import styled from "styled-components";

const Container = styled.div`
    user-select: text;
`

export default function Popup({ markerData: marker, point, markerPosition }: {
    markerData: MarkerData,
    point: [number, number],
    markerPosition: LatLng
 }) {
    const { name, type } = marker;
    const toWiki = (name: string) => `https://wiki.projectgorgon.com/w/index.php?search=${name}`
    const positionString = `(${markerPosition.lat.toFixed(2)}, ${markerPosition.lng.toFixed(2)})`;
    return <Container>
        <FlexRow>
            <FlexColumn>
                <Box style={{ whiteSpace: "pre-line" }}>
                    <Typography variant="h6" component="div">
                        <a href={toWiki(name)} target="_blank" rel="noopener noreferrer">{name}</a>
                    </Typography>
                    {positionString}
                    {marker.description}
                </Box>
            </FlexColumn>
        </FlexRow>
    </Container>
}