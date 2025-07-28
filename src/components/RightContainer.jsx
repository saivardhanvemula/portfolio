import React, { useRef, useState } from "react";
import { Welcome } from "./Welcome";
import { Help } from "./Help";
import { Skills } from "./Skills";
import { Contact } from "./Contact";
import { Projects } from "./Projects";
import { Experience } from "./Experience";

const RightContainer = () => {
    const parentRef = useRef(null);
    const inputRef = useRef(null);
    const [input, setInput] = useState("");
    const [cmds, setCmds] = useState([]);
    const [showWelcome, setShowWelcome] = useState(true);
    const [historyIndex, setHistoryIndex] = useState(null);

    const handleAddCmd = (input, response) => {
        if (input.trim().toLowerCase() === "clear") {
            setCmds([]);
            setShowWelcome(false);
        } else {
            setCmds((prev) => [...prev, { input, response }]);
        }
    };
    const getCommandComponent = (input) => {
        const cmd = input.trim().toLowerCase();
        switch (cmd) {
            case "help":
                return <Help />;
            case "welcome":
                return <Welcome name={"welcome"} />;
            case "about":
                return <Welcome name={"about"} />;
            case "skills":
                return <Skills />;
            case "contact":
                return <Contact />;
            case "projects":
                return <Projects/>;
            // case "experience":
            //     return <Experience/>
            default:
                return (
                    <div className="response">
                        <pre>{`Command not found: ${input}`}</pre>
                        <pre>type 'help' for available commands.</pre>
                    </div>
                );
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && input.trim() !== "") {
            handleAddCmd(input, []);
            setInput("");
            setHistoryIndex(null);
        } else if (e.key === "ArrowUp") {
            // Go to previous command
            if (cmds.length > 0) {
                setHistoryIndex((prev) => {
                    const newIndex = prev === null ? cmds.length - 1 : Math.max(prev - 1, 0);
                    setInput(cmds[newIndex].input);
                    return newIndex;
                });
            }
        } else if (e.key === "ArrowDown") {
            // Go to next command
            if (cmds.length > 0 && historyIndex !== null) {
                if (historyIndex < cmds.length - 1) {
                    const newIndex = historyIndex + 1;
                    setInput(cmds[newIndex].input);
                    setHistoryIndex(newIndex);
                } else {
                    setInput("");
                    setHistoryIndex(null);
                }
            }
        }
    };
    const handleContainerClick = (e) => {
        if (inputRef.current && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            inputRef.current.focus();
        }
    };

    return (
        <div className="right" ref={parentRef} onClick={handleContainerClick}>
            {showWelcome && <Welcome name={"welcome"}/>} 

            {cmds.map((item, index) => (
                <div key={index}>
                    <div className="command-input">
                        <pre className="terminal">
                            {"saivardhan@portfolio:~$ "}
                        </pre>
                        <pre className="cmd">{item.input}</pre>
                    </div>
                    {getCommandComponent(item.input)}
                </div>
            ))}

            <div className="command-input">
                <pre className="terminal">{"saivardhan@portfolio:~$ "}</pre>
                <input
                    type="text"
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="cmd"
                />
            </div>
        </div>
    );
};

export default RightContainer;
