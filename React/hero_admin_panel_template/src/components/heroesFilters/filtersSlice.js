import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all'
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filtersFetching: state => { state.filtersLoadingStatus = 'loading' },
        filtersFetchingError: state => { state.filtersLoadingStatus = 'error' },
        filtersFetched: (state, action) => { state.filters = action.payload; state.filtersLoadingStatus="idle"; },
        activeFilterChanged: (state, action) => { state.activeFilter = action.payload }
    }
});

const { actions, reducer } = filtersSlice;

export default reducer;

export const {
    filtersFetching,
    filtersFetchingError,
    filtersFetched,
    activeFilterChanged
} = actions;