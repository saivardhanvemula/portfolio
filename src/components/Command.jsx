import React, { useEffect, useRef, useState } from "react";
import { getHelp, getProjects, getSkills } from "../helpers/services.ts";


const Command = ({ setcmds }) => {
    const [input, setInput] = useState("");
    const [response, setresponse] = useState("");
    const inputRef = useRef(null);
    const [isSubmitted, setisSubmitted] = useState(false);
    useEffect(() => {
        inputRef.current?.focus();
    }, []);
    const handleKeyDown = async (e) => {
        if (e.key === "Enter") {
            setInput(e.target.value);
            console.log(input);
            setcmds((prevcmds) => [...prevcmds, input]);
            let res;
            switch (input.toLocaleLowerCase()) {
                case "":
                    setcmds((prevcmds) => [...prevcmds]);
                case "clear":
                    res= "Terminal cleared.";
                    setresponse(res);
                    setcmds([]);
                    setresponse("");
                    setInput("");
                    setisSubmitted(false);
                    return;
                case "help":
                    res = await getHelp();
                    setresponse(res);
                    break;
                case "projects":
                    res=await getProjects();
                    setresponse(res);
                    break;
                case "skills":
                    res=await getSkills();
                    setresponse(res);
                    break;
                default:
                    res = `${input} is not recognized as a command. Type 'help' to see available commands.`;
                    setresponse(res);
                    break;
            }
            // if (input.toLocaleLowerCase() == "help") {
            //     const res = getHelp();
            //     setresponse(res);
            //     // setresponse("helpingg.....");
            // }
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
