import React from "react";
import { Typewriter } from 'react-simple-typewriter';

const RightContainer = () => {
    return (
        <div className="right">{"> "}
            <Typewriter words={["welcome"]} loop={false} cursor />
        </div>
    );
};

export default RightContainer;
