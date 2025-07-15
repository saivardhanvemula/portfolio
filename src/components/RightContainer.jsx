import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import Command from "./Command";

const RightContainer = () => {
    const parentRef = useRef(null);
    const isFirstRender = useRef(true);
    const [cmds, setcmds] = useState([]);
    useEffect(() => {
        if (isFirstRender.current) {
            const mountPoint = document.createElement("div");
            if (parentRef.current) {
                parentRef.current.appendChild(mountPoint);
                const root = ReactDOM.createRoot(mountPoint);
                root.render(<Command setcmds={setcmds} />);
            }
        }
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
        </div>
    );
};

export default RightContainer;
