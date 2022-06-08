import { configureStore } from '@reduxjs/toolkit'
import heroes from '../reducers/heroes';
import filters from '../reducers/filters';

const stringMiddleware = (store) => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        });
    }

    return next(action);
}

// const store = createStore(
//                     combineReducers({heroes, filters}),
//                     compose(
//                         applyMiddleware(ReduxThunk, stringMiddleware),
//                         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//                     )
//                     );

const store = configureStore({
    // two reducers instead of combineReducers
    reducer: {heroes, filters},
    // adding middlewares, common middlewares as ReduxThunk and etc. are already included in toolkit
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    // checks if our app is in development we use devTools if not we do not use devTools
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;

 
