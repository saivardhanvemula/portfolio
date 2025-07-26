import React, { useEffect, useRef, useState } from "react";
import {
    getContact,
    getHelp,
    getProjects,
    getSkills,
    getWelcome,
} from "../helpers/services.ts";

const Command = ({ onSubmit }) => {
    const [input, setInput] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleKeyDown = async (e) => {
        if (e.key === "Enter") {
            const trimmed = input.trim().toLowerCase();
            let res = "";
            switch (trimmed) {
                case "":
                    break;
                case "welcome":
                    res = await getWelcome();
                    onSubmit(input, res);
                    break;
                case "clear":
                    onSubmit("clear", null);
                    break;
                case "help":
                    res = await getHelp();
                    onSubmit(input, res);
                    break;
                case "projects":
                    res = await getProjects();
                    onSubmit(input, res);
                    break;
                case "skills":
                    res = await getSkills();
                    onSubmit(input, res);
                    break;
                case "contact":
                    res = await getContact();
                    onSubmit(input, res);
                    break;
                default:
                    res = [
                        `${input} is not recognized as a command. Type 'help' to see available commands.`,
                    ];
                    onSubmit(input, res);
                    break;
            }

            setInput("");
        }
    };

    return (
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
    );
};

export default Command;
