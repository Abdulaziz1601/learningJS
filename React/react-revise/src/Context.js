import { useState, memo, Component, createContext } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

const dataContext = createContext({
    mail: "name@example.com",
    text: 'some text'
});

const { Provider, Consumer } = dataContext;


const Form = memo((props) => {
    console.log('render');
    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <InputComponent/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
});

class InputComponent extends Component {
    render() {
        return (
            // <Consumer>
            //     {
            //         value => {
            //             return (
            //                 <input
            //                     value={value.mail}
            //                     type='email'
            //                     className="form-control"
            //                     placeholder='name@example.com' />
            //             )
            //         }
            //     }
            // </Consumer>
            <input
                value={this.context.mail}
                type='email'
                className="form-control"
                placeholder='name@example.com' />
        )
    }
}

InputComponent.contextType = dataContext; 



function App() {
    const [data, setData] = useState({
        mail: "name@example.com",
        text: 'some text'
    });

    return (
        <Provider value={data}>
            <Form text={data.text}/>
            <button 
                onClick={() => setData({
                    mail: "name@example.com",
                    text: 'another text'
                })}>
                Click me
            </button>
        </Provider>
    );
}

export default App;
