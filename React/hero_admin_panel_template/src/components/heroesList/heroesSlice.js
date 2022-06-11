import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {useHttp} from '../../hooks/http.hook';

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
};

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
                    state.heroes.push(action.payload);
        },
        heroDeleted: (state, action) => {
                    state.heroes = state.heroes.filter(item => item.id !== action.payload)
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchHeroes.pending, state => {state.heroesLoadingStatus='loading'})
            .addCase(fetchHeroes.fulfilled, (state, action) => {
                state.heroesLoadingStatus = 'idle';
                state.heroes = action.payload; // all returned data from promise will go into action.payload
            })
            .addCase(fetchHeroes.rejected, state => { state.heroesLoadingStatus = 'error'; })
            .addDefaultCase(() => {})

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
