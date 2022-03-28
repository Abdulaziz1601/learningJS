import { useReducer } from 'react';

function appReducer(state, action) {
	switch (action.type) {
		case 'add': {
			return [
				...state,
				{
					id: Date.now(),
					text: '',
					completed: false,
				},
			];
		}
		default: {
			return state;
		}

	}
}


function App() {
	const [ state, dispatch ] = useReducer(appReducer, []);
	return (
		<div className="App">
			<h1>Todos App</h1>
			<button onClick={() => dispatch({ type: 'add' })}> New ToDo</button>
			<TodosList items={state} />
		</div>
	);
}

function TodosList({ items }) {
	return items.map( item => ( <TodoItem key={item.id} {...item} /> ));
}

function TodoItem({ id }) {
	return <div>{id}</div>
}

export default App;
