import React, { useState, useEffect, useRef } from "react";
import Command from "./Command";

const RightContainer = () => {
    const parentRef = useRef(null);
    const isFirstRender = useRef(true);
    const [cmds, setcmds] = useState([]);
    const [components, setComponents] = useState([]);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        // Instead of using ReactDOM.createRoot, update state to render new Command
        setComponents((prev) => [...prev, <Command key={prev.length} setcmds={setcmds} />]);
    }, [cmds]);

    return (
        <div className="right" ref={parentRef}>
            <div>
                <span className="terminal">{"saivardhan@portfolio:~$  "}</span>
                <span className="cmd">welcome</span>
            </div>
            <div className="response">
                <div>Hi, I am Sai Vardhan, a full-stack developer.</div> <br />
                <div>Welcome to my interactive portfolio terminal!</div>
                <div>Type 'help' to see the available commands.</div>
            </div>

            {/* Render all Command components */}
            {components}
        </div>
    );
};

export default RightContainer;
