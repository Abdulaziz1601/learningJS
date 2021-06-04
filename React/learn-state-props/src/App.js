// import React from 'react';
// import './App.css';
// // Import components
// // import Nav from './components/Nav';
// // import Tweets from './components/Tweets';


// function App() {
//   // We can write JS here
//   // const name = 'DevelopedByAbdulaziz'; // We can pass this data using props
//   // const age = 19;



//   return (
//     <div className="App">
//       {/* <Nav /> */}
//       {/* We access name using props */}
//       {/* <Tweets me={name} age={age}/>  */}
//       {/* <Tweets />  */}
//       Hello React
//     </div>
//   );
// }

// export default App;

import React, {useState} from 'react';
import './App.css';

// function App() {
  // state is JS object,
  // that contains piece of data
  // Another explanation
  // We can imagine It, like variable 
  // difference is that state (variable), reacts to changes
  // If smth happens, with state (variable), component 
  // will react and will be rerendered
//   let counter = 0;
//   const incrementer = () => {
// 	counter += 1;
// 	console.log(counter); // as we can see here variables in react do not react to changes
// 	// but if we use state, react automatically going to know, what part of react
// 	// to rerender, so react rerenders only that part that was changed
// 	// that is why React is so fast and effective
//   }
//   return (
//     <div className="App">
//       Hello React
// 	  <h1>Counter {counter}</h1>
// 	  <button onClick={incrementer}>CLick</button>
//     </div>
//   );
// }
function App() {

						// here we will write data that we are gonna use
	const [counter, setCounter] = useState(0) // Here we will get variable and function to change that var

	const [toggle, setToggle] = useState(false)
	const incrementer = () => {
		setCounter(prev => prev + 1); // prev last inctanse of our state
		setCounter(counter + 1); // also we can do this
		console.log(counter); // as we can see here variables in react do not react to changes
		// but if we use state, react automatically going to know, what part of react
		// to rerender, so react rerenders only that part that was changed
		// that is why React is so fast and effective
	}

	const toggler = () => {
		setToggle(prev => !prev);
	}
	return (
		<div className="App">
			Hello React
			<h1 className={toggle ? "active" : ""}>Counter {counter}</h1>
			<button onClick={incrementer}>CLick</button> 
			<button onClick={toggler}>Toggle</button> 
		</div>
	);
}

export default App;
