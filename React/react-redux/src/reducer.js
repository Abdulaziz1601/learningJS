const initialState = { value: 1 };

// function reducer must be pure function
// It means, reducer has to depent only on state and action
// has to return same results when same invoked with arguments 
// NO side effects
const reducer = (state = initialState, action) => {
	switch(action.type) {
		case 'INC':
			return {
				...state,
				value: state.value + 1
			};
		case 'DEC':
			return {
				...state,
				value: state.value - 1
			};
		case 'RAND':
			// We cannot write here random number generator, so we do it as a property of action object: payload
			return {
				...state,
				value: state.value * action.payload
			};
		default:
			return state;
	}
};

export default reducer;