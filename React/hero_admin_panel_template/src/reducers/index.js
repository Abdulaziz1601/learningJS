const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all',
    filteredHeroes: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                filteredHeroes: state.activeFilter === 'all' ? action.payload : action.payload.filter(hero => hero.element === state.activeFilter),
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
            
        case 'HERO_DELETED':
            return {
                ...state,
                heroes: state.heroes.filter(item => item.id !== action.payload),
                filteredHeroes: state.activeFilter === 'all' ? state.heroes.filter(item => item.id !== action.payload) : state.heroes.filter(item => item.id !== action.payload).filter(hero => hero.element === state.activeFilter),
                heroesLoadingStatus: 'idle'
            }
        case "FILTERS_FETCHING":
            return {
                ...state,
                filtersLoadingStatus: 'loading'
            }
        case "FILTERS_ERROR":
            return {
                ...state,
                filtersLoadingStatus: 'error'
            }
        case "FILTERS_FETCHED":
            return {
                ...state,
                filters: action.payload,
                filtersLoadingStatus: 'idle'
            }
        case "ACTIVE_FILTER_CHANGED": 
            return {
                ...state,
                activeFilter: action.payload,
                filteredHeroes: action.payload === 'all' ? state.heroes : state.heroes.filter(hero => hero.element === action.payload)
            }
        case "NEW_HERO_ADDED":
            return {
                ...state,
                heroes: [action.payload, ...state.heroes],
                filteredHeroes: state.activeFilter === 'all' ? [action.payload, ...state.heroes] : [action.payload, ...state.heroes].filter(hero => hero.element === state.activeFilter)
            }
        default: return state
    }
}

export default reducer;