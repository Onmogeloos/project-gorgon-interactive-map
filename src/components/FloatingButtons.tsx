import { Box, Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { setIsMarkerProposalOpen } from "@store/mapSlice";
import { useAppDispatch } from "@store/hooks";

export default function FloatingButtons() {
    const dispatch = useAppDispatch();
    return (
        <Box
            sx={{
                position: 'absolute',
                bottom: 16,
                right: 16,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
            }}>
            <Fab variant="extended"
            color="primary"
            onClick={() => dispatch(setIsMarkerProposalOpen(true))}
            >
                <AddIcon sx={{ mr: 1 }} />
                Propose new marker
            </Fab>
        </Box>
    )
}