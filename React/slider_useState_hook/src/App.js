import {Component, useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
// class Slider extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }

//     componentDidMount() {
//         document.title = `Slide: ${this.state.slide}`;
//     }

//     componentDidUpdate() {
//         document.title = `Slide: ${this.state.slide}`;
//     }

//     changeSlide = (i) => {
//         this.setState(({slide}) => ({
//             slide: slide + i
//         }))
//     }

//     toggleAutoplay = () => {
//         this.setState(({autoplay}) => ({
//             autoplay: !autoplay
//         }))
//     }

//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                     <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay</button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }

const Slider = (props) => {
    // Destructurin an array   setting slide to zero
    const [slide, setSlide] = useState(0); // returns array of two elems: 1-st elem -- state, 2nd elem -- function that will change that state
    const [autoplay, setAutoplay] = useState(false);
    
    function logging () {
        console.log('log!');
    }

    useEffect(() => {
        console.log('effect');
        document.title = `Slide: ${slide}`; // this callback is memorized
        // and attached to this component, will run after component will render
        // also, It will callback will be envoked every time It will update 
        window.addEventListener('click', logging); // after adding Ev.Listener we have to remove IT

        return () => {
            window.removeEventListener('click', logging); // It will be removeed 
        }
    }, [slide]); // array of dependencies, useEffect depend on slide state only, our useEffect callback run only if slide'll be changed
    // Also we emulate lifecycle hook, by writing empty array, so it will run only in at start
    // Thus,  we just merge two LIFECYCLE hooks

    useEffect(() => {
        console.log("Autoplay is Changed");
    }, [autoplay]  )

    function changeSlide(i) {
        setSlide(slide => slide+i)
    }

    function toggleAutoplay() {
        setAutoplay(autoplay => !autoplay);
    }
    
    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {slide} <br/> </div>
                <div className="text-center mt-5">{autoplay ? 'AutopPlay' : null} <br/> </div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}


function App() {
    const [slider, setSlider] = useState(true);

    const onToggleSlider = () => {
        setSlider(slider => !slider);
    }

    return (
        <>
            {slider ? <Slider/> : null}
            <button onClick={onToggleSlider} className=" btn btn-primary d-block m-auto mt-5">Toggle Slider</button>
        </>
    );
}

export default App;
