import {
	Component
} from 'react';
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

function App() {
	return ( 
		<Wrapper >
			<WhoAmI name='John' surname="Smith" link="google.com"/>
			<WhoAmI name='Ali' surname="Smith" link="google.com"/>
		</Wrapper>
	);
}

export default App;