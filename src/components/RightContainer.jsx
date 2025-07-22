import React, { useRef, useState } from "react";
import Command from "./Command";

const RightContainer = () => {
    const parentRef = useRef(null);
    const [cmds, setCmds] = useState([]);
    const [showWelcome, setShowWelcome] = useState(true);

    const handleAddCmd = (input, response) => {
        if (input.trim().toLowerCase() === "clear") {
            setCmds([]);
            setShowWelcome(false);
        } else {
            setCmds((prev) => [...prev, { input, response }]);
        }
    };

    return (
        <div className="right" ref={parentRef}>
            {showWelcome && (
                <>
                    <div>
                        <span className="terminal">
                            {"saivardhan@portfolio:~$  "}
                        </span>
                        <span className="cmd">welcome</span>
                    </div>
                    <div className="response">
                        <div>Hi, I am Sai Vardhan, a full-stack developer.</div>
                        <br />
                        <div>Welcome to my interactive portfolio terminal!</div>
                        <div>Type 'help' to see the available commands.</div>
                    </div>
                </>
            )}

            {cmds.map((item, index) => (
                <div key={index}>
                    <div className="command-input">
                        <span className="terminal">
                            {"saivardhan@portfolio:~$ "}
                        </span>
                        <span className="cmd">{item.input}</span>
                    </div>
                    {item.response && (
                        <div className="response">
                            {item.response.map((res, index) => (
                                <div key={res}>{res}</div>
                            ))}
                        </div>
                    )}
                </div>
            ))}

            <Command onSubmit={handleAddCmd} />
        </div>
    );
};

export default RightContainer;
