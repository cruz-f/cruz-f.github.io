import * as React from 'react';
import Home from "./sections/Home";
import About from "./sections/About";


function App() {
    const aboutRef = React.createRef();
    return (
        <>
            <Home aboutRef={aboutRef}/>
            <About aboutRef={aboutRef}/>
        </>
    );
}

export default App;