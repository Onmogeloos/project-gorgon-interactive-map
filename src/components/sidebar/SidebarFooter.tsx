import { FlexRow } from "@components/Flex";
import { Typography, IconButton, Box } from "@mui/material";
import DiscordIcon from '@assets/icons/discord.svg?react';

export default function SidebarFooter() {
    return (
        <FlexRow $gapX="0.5rem" $alignVertical="center">
            <Box sx={{ flexGrow:1 }}>
                <Typography variant="caption">Made by Onmo</Typography>
                &nbsp;
                <IconButton aria-label="discord" onClick={() => {
                    window.location.replace("discord://-/users/110313535887679488")
                }}>
                    <DiscordIcon width="1rem" fill="#7289da" />
                </IconButton>
            </Box>
            <Typography variant="caption">V0.1</Typography>
        </FlexRow>
    )
}