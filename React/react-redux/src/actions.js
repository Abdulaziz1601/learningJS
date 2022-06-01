// actionCreator
// every time we write type object, it is not effective
// so function must be created that returns type object
export const inc = () => { // name of this function is actionCreator
	return {type: 'INC'}
};
export const dec = () => ({type: "DEC"});
export const rand = (value) => ({type: "RAND", payload: Math.floor(Math.random() * 10)});
