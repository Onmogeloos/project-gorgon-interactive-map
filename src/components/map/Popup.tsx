import { FlexRow, FlexColumn } from "@components/Flex";
import { MarkerData } from "@localtypes/Map";
import { Box, Typography } from "@mui/material";

export default function Popup({ markerData: marker, position }: { markerData: MarkerData, position: [number, number] }) {
    const { name, type } = marker;
    const toWiki = (name: string) => `https://wiki.projectgorgon.com/w/index.php?search=${name}`
    const roundedPosition = [position[0].toFixed(2), position[1].toFixed(2)] as [string, string];
    return <FlexRow>
        <FlexColumn>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body1">{type}</Typography>
            <Typography variant="body2">
                Wiki: <a href={toWiki(name)}>{name}</a>
                <br />
                Position: {`[${roundedPosition[0]}, ${roundedPosition[1]}]`}
            </Typography>
        </FlexColumn>
    </FlexRow>
}