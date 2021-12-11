import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{name: 'John C.', salary: 800, prize: false, rise: false, id: 1 },
				{name: 'Alex M.', salary: 5000, prize: true, rise: true, id: 2 },
				{name: 'Jamez S.', salary: 2000, prize: false, rise: false, id: 3 }
			]
		};
		this.maxId = 4;
	}

	deleteItem = (id) => {
		this.setState(({data}) => {
			// const index = data.findIndex(elem => elem.id === id);
			
			// const before = data.slice(0, index);
			// const after = data.slice(index + 1);

			// return {
			// 	data: [...before, ...after] 
			// }

			// Or easy and simple way
			return {
				data: data.filter(item => item.id !== id) // filter doesnot change the original array, so we still save the immutability
			}
		})
	}

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			prize: false,
			rise: false,
			id: this.maxId++
		}
		this.setState(({data}) => {
			return {
				data: [...data, newItem]
			}
		});
	}

	onToggleProp = (id, prop) => {
		this.setState(({data}) => ({
			data: data.map(item => {   
				if(item.id === id) {
					return {...item, [prop]: !item[prop]}
				}
				return item;
			})
		}))


	}

	// onToggleRise = (id) => {
	// 	this.setState(({data}) => ({
	// 		data: data.map(item => {
	// 			if(item.id === id) {
	// 				return {...item, rise: !item.rise}
	// 			}
	// 			return item;
	// 		})
	// 	}))
	// }

	

	render() {
		const employees = this.state.data.length;
		const prized = this.state.data.filter(item => item.prize).length;
		return (
			<div className="app">
				<AppInfo 
					employeeCount={employees}
					prizeCount={prized}/>	
	
				<div className="search-panel">
					<SearchPanel/>
					<AppFilter/>
				</div>
				
				<EmployeesList
					data={this.state.data}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
					/>
				<EmployeesAddForm onAdd={this.addItem} />
			</div>
	  );
	}

}

export default App;
