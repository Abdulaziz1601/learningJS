import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
}   


const heroesSlice = createSlice({
    name: 'heroes', // name of our slice 
    initialState,
    reducers: {
        // actionCreators and Its Reducer
        heroesFetching: state => {state.heroesLoadingStatus='loading'},
        heroesFetched: (state, action) => {
            state.heroesLoadingStatus = 'idle';
            state.heroes = action.payload;
        },
        heroesFetchingError: (state, action) => {
                    state.heroesLoadingStatus = 'idle';
                    state.heroes = action.payload;
        },
        heroCreated: (state, action) => {
                    state.heroes.push(action.payload);
        },
        heroDeleted: (state, action) => {
                    state.heroes = state.heroes.filter(item => item.id !== action.payload)
        }
    }
});

const { actions, reducer } = heroesSlice;

export default reducer;

export const { 
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroCreated,
    heroDeleted,
} = actions;
