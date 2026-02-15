import { Box, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setSearchQuery } from "../../store/mapSlice";

export default function SearchBar() {
    const dispatch = useAppDispatch();
    const searchQuery = useAppSelector((state) => state.map.searchQuery);
    
    return (
        <Box>
            <TextField
                fullWidth
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            />
        </Box>
    )
}