import { FlexRow } from "@components/Flex";
import { MarkerData } from "@localtypes/Map";
import { Box } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
    user-select: text;
    overflow: auto;
    height: 500px;
    width: 400px;
    overflow: hidden;
`

const WikiIframe = styled.iframe`
    height: 100%;
    width: 100%;
`

export default function Popup({ markerData: marker, position }: { markerData: MarkerData, position: [number, number] }) {
    const { name, type } = marker;
    const toWiki = (name: string) => `https://wiki.projectgorgon.com/wiki/${name}`

    const roundedPosition = [position[0].toFixed(2), position[1].toFixed(2)] as [string, string];
    return <Container>
        <WikiIframe
            title={name}
            src={`${toWiki(name)}?mobileaction=toggle_view_mobile`}
        />
    </Container>
}