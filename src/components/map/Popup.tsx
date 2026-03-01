import { FlexColumn, FlexRow } from "@components/Flex";
import { MarkerData, MarkerType } from "@localtypes/Map";
import { Typography } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
    user-select: text;
`

export default function Popup({ markerData: marker, position }: { markerData: MarkerData, position: [number, number] }) {
    const { name, type } = marker;

    const toWiki = (name: string) => `https://wiki.projectgorgon.com/w/index.php?search=${name}`
    const roundedPosition = [position[0].toFixed(2), position[1].toFixed(2)] as [string, string];
    return <Container>
        <FlexRow>
            <FlexColumn>
                <Typography variant="body1"><a href={toWiki(name)}>{name}</a></Typography>
                {
                    !!marker.description && <Typography variant="body2">{marker.description}</Typography>
                }
            </FlexColumn>
        </FlexRow>
    </Container>
}