import React, {Component} from 'react';
import {Container} from 'react-bootstrap'; 
import './App.css';

class Form extends Component {
    constructor(props) {
        super(props);
        // // When REF is created for simple element
        // this.myRef = React.createRef(); // DOM Tree we have a reference of input type["email"]
        
        // When REF is created for Component
        this.myRef = React.createRef(); // We have an object in myRef
        
    }

    componentDidMount() {
        // For DOM element
        // ref.current current reference to ref 
        // this.myRef.focus(); // error won't work
        // this.myRef.current.focus();

        // For Component
        this.myRef.current.doSmth(); // We cannot use here DOM API for Component -> REF returns an object
        
    }

    render() {
        return (
            <Container>
                <form className="w-50 border mt-5 p-3 m-auto">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <TxtInput ref={this.myRef} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </Container>
        )
    }
}

class TxtInput extends Component {
    doSmth = () => {
        console.log("Ref called a method do somthing");
    }
    render() {
        return (
            <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"/>
        )
    }
}

// const TxtInput = () => {
//     // We cannot assign a ref for the functional component, 'cause they can't create instances 
//     return <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
// }

function App() {
    return (
        <Form/>
    );
}

export default App;
