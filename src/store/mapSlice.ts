import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MarkerType } from '@localtypes/Map';

export interface MapClickPosition {
    y: number;
    x: number;
}

interface MapState {
    hiddenMarkerTypes: MarkerType[];
    showLabelMarkerTypes: MarkerType[];
    searchQuery: string;
    isMarkerProposalOpen: boolean;
    mapClickPosition: MapClickPosition | null;
}

const initialState: MapState = {
    hiddenMarkerTypes: [MarkerType.PlayerShop, MarkerType.UniqueEnemy],
    showLabelMarkerTypes: [
        MarkerType.Boss,
        MarkerType.MiniBoss,
        MarkerType.Entrance,
        MarkerType.Location,
        MarkerType.NPC,
        MarkerType.Object,
        MarkerType.Resource,
        MarkerType.ZonePortal,
        MarkerType.Treasure,
        MarkerType.Lore
    ],
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
        setShowLabelGroups: (state, action: PayloadAction<MarkerType[]>) => {
            state.showLabelMarkerTypes = action.payload;
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

export const { setHiddenGroups, setShowLabelGroups, setSearchQuery, setIsMarkerProposalOpen, setMapClickPosition } = mapSlice.actions;
export default mapSlice.reducer;
