import { Component } from 'react';
import { connect } from 'react-redux'; 
import * as actions from '../actions';

// const Counter = ({counter, inc, dec, rand}) => {
    // return (
    //     <div className="jumbotron">
    //         <h1>{counter}</h1>
    //         <button onClick={dec} className="btn btn-primary">DEC</button>
    //         <button onClick={inc} className="btn btn-primary">INC</button>
    //         <button onClick={rand} className="btn btn-primary">RAND</button>
    //     </div>
    // );
// };

// Implementing with class

class Counter extends Component {
    render() {
        const {counter, inc, dec, rand} = this.props;
        return (
            <div className="jumbotron">
                <h1>{counter}</h1>
                <button onClick={dec} className="btn btn-primary">DEC</button>
                <button onClick={inc} className="btn btn-primary">INC</button>
                <button onClick={rand} className="btn btn-primary">RAND</button>
            </div>
        )   
    }
}


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



export default connect(mapStateToProps, actions)(Counter);

