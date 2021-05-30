import React from 'react';  // We are importing react. Babel will bundle it and then it will need react
import ReactDOM from 'react-dom'; // react-dom to work with DOM
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals'; 

// const elem = <h2>Hello World!</h2> // Babel helps us to turn our jsx code to simple js code
// const elem = React.createElement('h2', null, "Hello World!!!"); // so, it is obvious that code above (JSX) is more easier


// const elem = ( // If our element have multiLine element we have wrap it with parenthesis ()
// 	<div> 
// 		<h2>Hello World!</h2>
// 		<input type="text" placeholder="Type Here!" />
// 		<button/>
// 	</div> // jsx multi line elems has to be wrapped in some div
// )

// Component are functions, that can return JSX elements, they can change their state and logic
// They have to be written from big letters Components are Functions
// EX:

const Header = () => {
	return <h2>Hello World!</h2>
}

// const Field = () => {
// 	return <input type="text" placeholder="Type Here!" />
// }
const Field = () => {
	const holder = "Enter here!"
	return <input type="text" placeholder = {holder} /> // if we wanna add dynamic text
}

const Btn = () => {
	const text = "Log In"; // we can add text
	// const res = () => {
	// 	return 'Log In, please'
	// } // we can add functions that return text
	// const p = {} // we cannot put there objects, error
	// const p = <p>Log in</p>
	return <button>{text}</button> // To put here text we have to add it in square brackets {}
}

const App = () => {
	return (
		<div>
			<Header/>
			<Field/>
			<Btn/>
		</div>
	)
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

reportWebVitals();
 