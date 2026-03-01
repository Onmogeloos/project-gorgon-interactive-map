import { FlexColumn, FlexRow } from "@components/Flex";
import { MarkerData, MarkerType } from "@localtypes/Map";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
    user-select: text;
`

export default function Popup({ markerData: marker, position }: { markerData: MarkerData, position: [number, number] }) {
    const { name, type } = marker;
    const toWiki = (name: string) => `https://wiki.projectgorgon.com/w/index.php?search=${name}`
    return <Container>
        <FlexRow>
            <FlexColumn>
                <Box style={{ whiteSpace: "pre-line" }}>
                    <Typography variant="h6" component="div">
                        <a href={toWiki(name)} target="_blank" rel="noopener noreferrer">{name}</a>
                    </Typography>
                    {marker.description}
                </Box>
            </FlexColumn>
        </FlexRow>
    </Container>
}