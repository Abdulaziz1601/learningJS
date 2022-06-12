import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import {useHttp} from '../../hooks/http.hook';

const heroesAdapter = createEntityAdapter();


const initialState = heroesAdapter.getInitialState({
    heroesLoadingStatus: 'idle'
});

export const fetchHeroes = createAsyncThunk(
    // name of slice, and type
    'heroes/fetchHeroes',
    // function that return Promise, async code
    // parameters are arguments called with this fetchHeroes, for ex: can be id that fetches user with unique id
    () => {
        const {request} = useHttp();
        return request("http://localhost:3001/heroes");
    }

); // It returs us 3 types of actions
// pending
// fullfilleed
// rejected


const heroesSlice = createSlice({
    name: 'heroes', // name of our slice 
    initialState,
    reducers: {
        // actionCreators and Its Reducer
        heroCreated: (state, action) => {
                    // state.heroes.push(action.payload);
                    heroesAdapter.addOne(state, action.payload);
        },
        heroDeleted: (state, action) => {
                    // state.heroes = state.heroes.filter(item => item.id !== action.payload)
                    heroesAdapter.removeOne(state, action.payload); 

        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchHeroes.pending, state => {state.heroesLoadingStatus='loading'})
            .addCase(fetchHeroes.fulfilled, (state, action) => {
                state.heroesLoadingStatus = 'idle';
                heroesAdapter.setAll(state, action.payload); // gets array or object, 1sr arg where to put values, 2ndarg what to put in 1st argument
            })
            .addCase(fetchHeroes.rejected, state => { state.heroesLoadingStatus = 'error'; })
            .addDefaultCase(() => {})

    }
});


const { actions, reducer } = heroesSlice;

export default reducer;

const { selectAll } = heroesAdapter.getSelectors(state => state.heroes);

export const filteredHeroesSelector = createSelector(
    (state) => state.filters.activeFilter,
    selectAll,
    (filter, heroes) => {
        return filter === 'all' ?
               heroes : 
               heroes.filter(hero => hero.element === filter)
    }
);

export const { 
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroCreated,
    heroDeleted,
} = actions;
