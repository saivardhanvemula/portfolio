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
                        <pre className="terminal">
                            {"saivardhan@portfolio:~$  "}
                        </pre>
                        <pre className="cmd">welcome</pre>
                    </div>
                    <div className="response">
                        <pre>Hi, I am Sai Vardhan, a full-stack developer.</pre>
                        <br />
                        <pre>Welcome to my interactive portfolio terminal!</pre>
                        <pre>Type 'help' to see the available commands.</pre>
                    </div>
                </>
            )}

            {cmds.map((item, index) => (
                <div key={index}>
                    <div className="command-input">
                        <pre className="terminal">
                            {"saivardhan@portfolio:~$ "}
                        </pre>
                        <pre className="cmd">{item.input}</pre>
                    </div>
                    {item.response && (
                        <div className="response">
                            {item.response.map((res, index) => (
                                <div key={index}>
                                    {res === "" ? <br /> : <pre>{res}</pre>}
                                </div>
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
