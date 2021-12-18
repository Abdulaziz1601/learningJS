import {Component, } from 'react';

import './App.css';

class WhoAmI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			years: 27,
			text: '+++',
			position: ""
		};

	}

	nextYear = () => {
		this.setState(state => ({
			years: state.years + 1
		}));
	}
	commitInputChanges(e, color) {
		console.log(color);
		this.setState({position: e.target.value});
	}



	render() {
		const {name, surname, link} = this.props;
		const {position, text, years} = this.state;

		console.log(this);

		return (
			<>
				<button onClick={this.nextYear}>{text}</button>	
				<h1>My name is {name}, surname - {surname}, 
					age - {years}, 
					<strong>position - {position}</strong></h1>
				<a href={link}>My personal page</a>
				<form> 
					<span>Vvedite doljnost</span>
					<input type="text" onChange={(e) => this.commitInputChanges(e, 'SOMEcolor')}></input>
				</form>
			</>
		);
	}
}

function App() {
  return (
	<div className="App">
		<WhoAmI name='John' surname="Smith" link="google.com"/>
		<WhoAmI name='Ali' surname="Smith" link="google.com"/>
	</div>
  );
}

export default App;
