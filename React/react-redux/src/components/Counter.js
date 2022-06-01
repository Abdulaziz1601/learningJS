import { Component } from 'react';
import { connect } from 'react-redux'; 
import {inc, dec, rand} from '../actions';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={() => dispatch(dec())} className="btn btn-primary">DEC</button>
            <button onClick={() => dispatch(inc())} className="btn btn-primary">INC</button>
            <button onClick={() => dispatch(rand())} className="btn btn-primary">RAND</button>
        </div>
    );
};
  

// Must be pure and synchronous function
// Here we get properties for our component
const mapStateToProps = (state) => {
    return {
        counter: state.value,
    }
}

// Here we get functions for our component
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch);
// }



// export default connect(mapStateToProps, actions)(Counter);

export default Counter;

