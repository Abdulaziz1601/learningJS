import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, bindActionCreators } from "redux";
import reducer from './reducer';
import * as actions from './actions' 

const store = createStore(reducer);

const {dispatch, subscribe, getState} = store;

const update = () => {
	document.getElementById('counter').textContent = getState().value;
};

subscribe(update); 

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// } // implementation of bindActionCreators redux
 
// const incDispatch = bindActionCreators(inc, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const randDispatch = bindActionCreators(rand, dispatch);

const { inc, dec, rand } = bindActionCreators(actions, dispatch);


document.getElementById('inc').addEventListener('click', inc)

document.getElementById('dec').addEventListener('click', dec);

document.getElementById('rand').addEventListener('click', () => rand(Math.floor(Math.random() * 10)));


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  </React.StrictMode>
);


// pure function 
// must return same result from the same input
// do not have side effects i.e API calls, console.log, changing global variable inside pure function