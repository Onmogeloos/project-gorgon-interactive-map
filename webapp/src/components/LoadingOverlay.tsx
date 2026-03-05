import { Box, CircularProgress, Typography } from "@mui/material";

export default function LoadingOverlay() {
    return <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}>
        <CircularProgress />
        <br/>
        <Typography variant="h6" color="textSecondary">Loading maps...</Typography>
    </Box>
}