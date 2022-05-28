import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";

const initialState = { value: 1 };

// function reducer must be pure function
// It means, reducer has to depent only on state and action
// has to return same results when same invoked with arguments 
// NO side effects
const reducer = (state = initialState, action) => {
	switch(action.type) {
		case 'INC':
			return {
				...state,
				value: state.value + 1
			};
		case 'DEC':
			return {
				...state,
				value: state.value - 1
			};
		case 'RAND':
			// We cannot write here random number generator, so we do it as a property of action object: payload
			return {
				...state,
				value: state.value * action.payload
			};
		default:
			return state;
	}
};

const store = createStore(reducer);

const update = () => {
	document.getElementById('counter').textContent = store.getState().value;
};

store.subscribe(update); 

// actionCreator
// every time we write type object, it is not effective
// so function must be created that returns type object
const inc = () => { // name of this function is actionCreator
	return {
		type: 'INC'
	}
};
const dec = () => ({type: "DEC"});
const rand = (value) => ({type: "RAND", payload: value});

// subscribing to store, our callback shows state if smth is changed
// store.subscribe(() => {
// 	console.log(store.getState());
// });

document.getElementById('inc').addEventListener('click', () => {
	store.dispatch(inc());
})

document.getElementById('dec').addEventListener('click', () => {
	store.dispatch(dec());
});

document.getElementById('rand').addEventListener('click', () => {
	const randomVal = Math.floor(Math.random() * 10);
	store.dispatch(rand(randomVal));
});




// created store, dispatch function tells reducer what to do, in our case to increment 
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});





// let state = reducer(initialState, { type: 'INC' });
// state = reducer(state, { type: 'INC' });
// state = reducer(state, { type: 'INC' });
// state = reducer(state, { type: 'INC' });

// console.log(state);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  </React.StrictMode>
);


// pure function 
// must return same result from the same input
// do not have side effects i.e API calls, console.log, changing global variable inside pure function