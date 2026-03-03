import DiscordIcon from '@assets/icons/discord.svg?react';
import { FlexRow } from "@components/Flex";
import InfoOutlineIcon from '@mui/icons-material/InfoOutlined';
import { Box, Dialog, IconButton, Typography } from "@mui/material";
import { useState } from 'react';

export default function SidebarFooter() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <FlexRow $gapX="0.5rem" $alignVertical="center">
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
                <Typography variant="caption">Made by Onmo</Typography>
                &nbsp;
                <IconButton aria-label="discord" onClick={() => {
                    window.location.replace("discord://-/users/110313535887679488")
                }}>
                    <DiscordIcon width="1rem" fill="#7289da" />
                </IconButton>
            </Box>
            <InfoOutlineIcon sx={{ cursor: "pointer" }} onClick={handleOpen} />
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <Box p={2}>
                    <Typography variant="h6">
                        About This Project
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        This website is currently in early but very active development. Markers and map data is being added as soon as possible.
                        Feel free to propose map markers for any object in the game.
                        If you have any feedback or ideas, please reach out to me on Discord.
                        <br />
                        <br />
                        - Onmo
                    </Typography>
                </Box>
            </Dialog>
        </FlexRow>
    )
}