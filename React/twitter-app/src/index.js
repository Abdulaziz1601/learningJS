import React from 'react';  // We are importing react to work with it
import ReactDOM from 'react-dom'; // react-dom to work with DOM
import './index.css';
// import App from './components/app/';

// If we leave our WhoAmI component like this, It'll give us error
// But in react we have technique, that helps us to avoid EXTRA divs
// function WhoAmI() {
// 	return (
// 		<h1>My name is , surname - </h1>
// 		<a href="">My profile</a>
// 	)
// }

// Technique is
// To use "React.Fragment" instead of divs
function WhoAmI() {
	return (
		<React.Fragment>
			<h1>My name is , surname - </h1>
			<a href="">My profile</a>
		</React.Fragment>
	)
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);