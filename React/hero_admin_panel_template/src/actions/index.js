export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const heroDeleted = (id) => {
    return {
        type: 'HERO_DELETED',
        payload: id
    }
}

export const filtersFetching = () => {
    return {
        type: 'FILTERS_FETCHING'
    }
}

export const filtersError = () => {
    return {
        type: 'FILTERS_ERROR'
    }
}
export const filtersFetched = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}

export const activeFilterChanged = (filter) => {
    return {
        type: "ACTIVE_FILTER_CHANGED",
        payload: filter
    }
}

export const newHeroAdded = (newHero) => {
    return {
        type: "NEW_HERO_ADDED",
        payload: newHero
    }
}

// export const heroesFiltered = (filter) => {
//     return {
//         type: 'HEROES_FILTERED',
//         payload: filter
//     };
// }


