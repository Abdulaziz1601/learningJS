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
	//Pretending to put maliciious script injection,  so we put malicious script that will pop alert with some error
	// const scr = '<script>alert("Error")</script>'

	// return <h2>{scr}!</h2> // it will just show like text in h1 tag
	return <h2>Hello World!</h2>
}

// const Field = () => {
// 	return <input type="text" placeholder="Type Here!" />
// }
const Field = () => {

	const styledField = {
		width: '900px'
	}
	const holder = "Enter here!"
	return <input
				style={styledField} // using style from object
				type="text"
				placeholder = {holder} // we have to write all html attributes in camelCase
				autoComplete=""
				className="first" // adding a class
				// class="first" // ERROR!!!
				htmlFor="someLabel" //for attr to relate input and label
	
	/> // if we wanna add dynamic text
}

const Btn = () => {
	const text = "Log In"; // we can add text


	const logged = true; // check if user is logged In
	// if user is logged in, btn do not show anything, if user didn't log in it will say to log IN
	return <button>{logged ? null : text}</button> // To put here text we have to add it in square brackets {}
	// const res = () => {
	// 	return 'Log In, please'
	// } // we can add functions that return text
	// const p = {} // we cannot put there objects, error
	// const p = <p>Log in</p>

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
 