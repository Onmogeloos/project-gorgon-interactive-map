import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MarkerType, ZoneType } from '@localtypes/Map';

export interface MapClickPosition {
    y: number;
    x: number;
}

interface MapState {
    hiddenMarkerTypes: MarkerType[];
    hiddenZoneTypes: ZoneType[];
    searchQuery: string;
    isMarkerProposalOpen: boolean;
    mapClickPosition: MapClickPosition | null;
}

const initialState: MapState = {
    hiddenMarkerTypes: [],
    hiddenZoneTypes: [],
    searchQuery: '',
    isMarkerProposalOpen: false,
    mapClickPosition: null,
};

const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        setHiddenGroups: (state, action: PayloadAction<MarkerType[]>) => {
            state.hiddenMarkerTypes = action.payload;
        },
        setHiddenZoneTypes: (state, action: PayloadAction<ZoneType[]>) => {
            state.hiddenZoneTypes = action.payload;
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
        setIsMarkerProposalOpen: (state, action: PayloadAction<boolean>) => {
            state.isMarkerProposalOpen = action.payload;
        },
        setMapClickPosition: (state, action: PayloadAction<MapClickPosition | null>) => {
            // Prevent updating the position if it's the same as the current one (to avoid unnecessary re-renders)
            state.mapClickPosition = JSON.stringify(action.payload) === JSON.stringify(state.mapClickPosition)
                ? state.mapClickPosition
                : action.payload;
        },
    },
});

export const { setHiddenGroups, setSearchQuery, setIsMarkerProposalOpen, setMapClickPosition, setHiddenZoneTypes } = mapSlice.actions;
export default mapSlice.reducer;
