import { createSlice,createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import {useHttp} from '../../hooks/http.hook';

const filtersAdaper = createEntityAdapter();

const initialState = filtersAdaper.getInitialState({
    filtersLoadingStatus: 'idle',
    activeFilter: 'all'
});

// const initialState = {
//     filters: [],
//     filtersLoadingStatus: 'idle',
//     activeFilter: 'all'
// }

export const fetchFilters = createAsyncThunk(
    'filters/fetchFilters',
    () => {
        const { request } = useHttp();
        return  request("http://localhost:3001/filters");
    }
)

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        activeFilterChanged: (state, action) => { state.activeFilter = action.payload }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchFilters.pending, state => { state.filtersLoadingStatus = 'loading' })
            .addCase(fetchFilters.fulfilled, (state, action) => { 
                state.filtersLoadingStatus="idle";
                // state.filters = action.payload;
                filtersAdaper.setAll(state, action.payload);
            })
            .addCase(fetchFilters.rejected, (state) =>{ state.filtersLoadingStatus = 'error' })
            .addDefaultCase(() => {})
    }
});


const { actions, reducer } = filtersSlice;

export default reducer;

export const {selectAll} = filtersAdaper.getSelectors(state => state.filters)

export const {
    filtersFetching,
    filtersFetchingError,
    filtersFetched,
    activeFilterChanged
} = actions;