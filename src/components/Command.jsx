import React, { useState, useRef, useEffect } from "react";

const Command = ({ setcmds }) => {
    const [input, setInput] = useState("");
    const inputRef = useRef(null);
    const [isSubmitted, setisSubmitted] = useState(false);
    useEffect(() => {
        inputRef.current?.focus();
    }, []);
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            setcmds((prevcmds) => [...prevcmds, input]);
            setInput(e.target.value);
            setisSubmitted(true);
        }
    };
    return (
        <div>
            <div className="command-input">
                <span className="terminal">{"saivardhan@portfolio:~$ "}</span>
                <input
                    type="text"
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="cmd"
                />
            </div>
            {isSubmitted && (
                <div className="response">
                    "{input}" is not recognized as a command
                </div>
            )}
        </div>
    );
};

export default Command;
