import { useState, Component, createContext, useContext } from 'react';
import {Container} from 'react-bootstrap';


const dataContext = createContext({
	mail: "name@example.com",
	text: 'some text'
});	

const {Provider, Consumer} = dataContext;

const Form = (props) => {

    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <InputComponent />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
};

// 1st way of using context
// class InputComponent extends Component {
//     render() {
//         return (
//             <Consumer>
//                 {
//                     value => {
//                         return (
//                             <input
//                                 value={value.mail}
//                                 type="email"
//                                 className="form-control"
//                                 id="exampleFormControlInput1"
//                                 placeholder="name@example.com"/>
//                         )
//                     }
//                 }
//             </Consumer>
//         )
//     }
// }

// 2nd way
// class InputComponent extends Component {

//     render() {
//         return (
//             <input
//                 value={this.context.mail}
//                 type="email"
//                 className="form-control"
//                 id="exampleFormControlInput1"
//                 placeholder="name@example.com"/>
//         )
//     }
// }

// // Attaching to this CLASS our dataContext
// InputComponent.contextType = dataContext;


const InputComponent = () => {
    
    const context = useContext(dataContext);

    return (
        <input
            value={context.mail}
            type="email"
            className="form-control"
            placeholder="name@example.com"/>
    )
}


function App() {
	const [data, setData] = useState({
		mail: "name@example.com",  
		text: 'some text'
	});

    // fetch("https://cors-anywhere.herokuapp.com/https://online.moysklad.ru/api/remap/1.2/security/token", {
    //     method: 'POST',
    //     headers: {
    //         'Authorization': 'Basic '+btoa('admin@abdulazizfaacto1:f53124bdaa'), 
    //     },
        
    // }).then(res => res.json()).then(res => console.log(res));

    return (
		// Value that is given below components 
        // <Provider value={data}>
		// 	<Form text={data.text} />
		// 	<button
		// 		onClick={() => setData({
		// 			mail: "second@example.com",
		// 			text: "another text"
		// 		})}>
		// 		Click me
		// 	</button>
		// </Provider>
        <>HI</>
    )
}

export default App;
