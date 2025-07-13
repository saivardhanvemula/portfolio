import { useState } from "react";
import "./App.css";
import LeftContainer from "./components/Left";
import RightContainer from "./components/RightContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    return (
        <>
            <div className="page">
                <Header />
                <div className="container">
                    <LeftContainer />
                    <RightContainer />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;
