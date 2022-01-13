import React, {Component} from 'react';
import BootstrapTest from './BootstrapTest';
import styled from 'styled-components';

import './App.css';

const EmpItem = styled.div `
	padding: 20px;
	margin-bottom: 15px;
	border-radius: 5px;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
	transition: all .2s;
	&:hover {
		box-shadow: 5px 5px 10px rgba(0, 0, 0, .6);
	}
	a {
		display: block;
		margin: 10px 0 10px 0;
		color: ${props => props.active ? 'orange' : 'black'};
		font-size: 1.3em;
		text-align: center;
		transition: all .2s;
		&:hover {
			color: #0d6efd;
		}
	}
	
	input {
		display: block;
		margin-top: 10px;
		border: none;
		border: 2px solid rgba(0, 0, 0, .2);
		border-radius: 5px;
		&:focus {
			border: 1px solid rgba(155,255,87, .48);
			outline: 4px solid rgba(155,255,87, .48);
		}
	}
`;

const Header = styled.h2 `
	font-size: 2em;
	text-align: center;
	color: black
`;

export const Btn = styled.button `
	display: block;
	margin: 0 auto;
	margin-top: 20px;
	padding: 15px;
	border: none;
	background-color: skyblue;
	color: #fff;
	border-radius: 5px;
	transition: all .2s;
	&:hover {
		background-color: black;
		transform: translateY(-3px)
	}
	&:active {
		transform: translateY(0px)
	}
`;

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
		this.setState({
			position: e.target.value
		});
	}



	render() {
			const {
				name,
				surname,
				link
			} = this.props;
			const {
				position,
				text,
				years
			} = this.state;

			console.log(this);

		return ( 
			<EmpItem active='false'>
				<Header >
					My name is {name}, surname - {surname}, <br/> age-{years}, <strong > position - {position} </strong> 
				</Header>
				<Btn onClick = {this.nextYear}>
					{text}
				</Btn>
				<a href={link}> My personal page </a>
				<form >
					<span > Vvedite doljnost </span> 
					<input type="text" onChange = {(e) => this.commitInputChanges(e, 'SOMEcolor')} /> 
				</form >
			</EmpItem>
		);
	}
	}

const Wrapper = styled.div `
	width: 600px;
	margin: 80px auto 0 auto
`;

const DynamicGreeting  = (props) => {
	return (
		<div className={'mb-3 p-3 border border-' + props.color}>
			{
				React.Children.map(props.children, child => {
					return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
				})
			}
		</div>

	)
}
const HelloGreeting = () => {
	return (
		<div style={{'width': '600px', 'margin':'0 auto'}}>
			<DynamicGreeting color={'primary'}>
				<h2>Hello Abdulaziz</h2>
			</DynamicGreeting>
		</div>
	)
}

const Message = (props) => {
	return (
		<h2>The counter is {props.counter}</h2>
	);
}

const DarkMessage = ({counter}) => {
	return (
		<h2 style={{'backgroundColor': 'black', 'color': 'white'}}>
			The dark counter is {counter}
		</h2>
	)
}

class Counter extends Component {
	state = {
		counter: 0
	}

	changeCounter = ( ) => {
		this.setState(({counter}) => ({
			counter: counter + 1
		}))
	}

	render() {
		return (
			<>
				{/* This will hardly bound our Counter to Message component */}
				{/* So that if we need another component with out message component we have to creaet "copy/paste" Counter COmponent */}
				{/* <Message counter={this.state.counter} /> */}
				<button
					className={'btn btn-primary m-2 '}
					onClick={this.changeCounter}>
						CLick Me
				</button>
				{/* Here our func will return Message component that we passed dynamically with props */}
				{this.props.render(this.state.counter)}
			</>
		)
	}
}


function App() {
	return ( 
		<Wrapper >
			
			<Counter render={counter  => (
				<Message counter={counter} />
			)}/>

			<br />
			<br />

			{/* Here our Counter component is so dynamic */}
			{/* That we can pass another component through it and it works properly */}
			<Counter render={counter  => (
				<DarkMessage counter={counter} />
			)}/>

			<br />
			<br />

			<HelloGreeting/>  
			<BootstrapTest 
				left= {
					<DynamicGreeting color={'primary'}>
						<h2>Hello Abdulaziz</h2>
						<h2>Hello World</h2>
					</DynamicGreeting>
				}
				right = {
					<DynamicGreeting color={'primary'}>
						<h2>RIGHT!</h2>
					</DynamicGreeting>
				}
			/> 

			<WhoAmI name='John' surname="Smith" link="google.com"/>
			<WhoAmI name='Ali' surname="Smith" link="google.com"/>
		</Wrapper>
	);
}

export default App;