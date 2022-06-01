const initialState = { counter: 1 };

// function reducer must be pure function
// It means, reducer has to depent only on state and action
// has to return same results when same invoked with arguments 
// NO side effects
const reducer = (state = initialState, action) => {
	switch(action.type) {
		case 'INC':
			return {
				...state,
				counter: state.counter + 1
			};
		case 'DEC':
			return {
				...state,
				counter: state.counter - 1
			};
		case 'RAND':
			// We cannot write here random number generator, so we do it as a property of action object: payload
			return {
				...state,
				counter: state.counter * action.payload
			};
		default:
			return state;
	}
};

export default reducer;