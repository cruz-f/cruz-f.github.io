import * as React from 'react';
import './App.css';
import Home from "./sections/Home";
import About from "./sections/About";
import TimelineSection from "./sections/Timeline";


function App() {
    return (
        <>
            <Home />
            <About />
            <TimelineSection />
        </>
    );
}

export default App;