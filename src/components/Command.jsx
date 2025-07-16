import React, { useState, useRef, useEffect } from "react";

const Command = ({ setcmds }) => {
    const [input, setInput] = useState("");
    const [response, setresponse] = useState("");
    const inputRef = useRef(null);
    const [isSubmitted, setisSubmitted] = useState(false);
    useEffect(() => {
        inputRef.current?.focus();
    }, []);
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            setInput(e.target.value);
            console.log(input);
            if (input == "") {
                setcmds((prevcmds) => [...prevcmds]);
                return;
            }
            if(input.toLocaleLowerCase()=="clear"){
                console.log("clearing");
            }
            setcmds((prevcmds) => [...prevcmds, input]);
            if (input.toLocaleLowerCase() == "help") {
                setresponse("helpingg.....");
            } else {
                setresponse(`${input} is not recognized as a command`);
            }
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
            {isSubmitted && <div className="response">{response}</div>}
        </div>
    );
};

export default Command;
