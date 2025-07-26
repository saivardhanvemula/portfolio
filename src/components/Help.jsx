export const Help = () => {
    const data = [
        "help       - Displays a list of available commands",
        "welcome    - Displays information about me",
        "projects   - Lists my featured projects",
        "contact    - Shows my contact information",
        "skills     - Displays my technical skillset",
        "experience - Shows my professional experience and roles",
        "clear      - Clears the terminal screen",
    ]
    return (
            <div className="response">
                {data.map((item, index) => (
                    <pre key={index}>{item}</pre>
                ))}
            </div>
    );
};
