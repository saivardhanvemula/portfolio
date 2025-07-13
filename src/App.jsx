import { useState } from "react";
import "./App.css";
import TopBar from "./components/topBar";
import LeftContainer from "./components/leftContainer";
import RightContainer from "./components/RightContainer";
import Footer from "./components/Footer";

function App() {

    return (
        <>
            <div className="page">
                <TopBar/>
                <div className="container">
                    <LeftContainer/>
                    <RightContainer/>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default App;
