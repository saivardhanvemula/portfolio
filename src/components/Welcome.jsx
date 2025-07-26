export const Welcome = ({name}) => {
    return (
        <div>
            <div>
                <pre className="terminal">{"saivardhan@portfolio:~$ "}</pre>
                <pre className="cmd">{name}</pre>
            </div>
            <div className="response">
                <pre>Hi, I am Sai Vardhan, a full-stack developer.</pre>
                <br />
                <pre>Welcome to my interactive portfolio terminal!</pre>
                <pre>Type 'help' to see the available commands.</pre>
            </div>
        </div>
    );
};
