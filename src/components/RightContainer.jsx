import React, { useState, useEffect, useRef } from "react";
import Command from "./Command";

const RightContainer = () => {
    const parentRef = useRef(null);
    const isFirstRender = useRef(true);
    const [cmds, setcmds] = useState([]);
    const [commandInstances, setCommandInstances] = useState([]); // store count or id

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            console.log("First render, skipping command processing.");
            return;
        }

        console.log("cmds", cmds);
        // Instead of storing JSX, store an index
        setCommandInstances((prev) => [...prev, prev.length]);
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

            {/* Render each Command component */}
            {commandInstances.map((id) => (
                <Command key={id} setcmds={setcmds} />
            ))}
        </div>
    );
};

export default RightContainer;
