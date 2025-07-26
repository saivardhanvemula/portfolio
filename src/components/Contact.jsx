export const Contact = () => {
    const email = "saivardhanvemulamncl@gmail.com";
    const linkedin = "https://www.linkedin.com/in/sai-vardhan-vemula-58a46b274";
    const github = "https://github.com/saivardhanvemula";
    return (
        <div className="response">
            <pre>
                Email: <a href={`mailto:${email}`}>{email}</a>
            </pre>
            <pre>
                LinkedIn: <a href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</a>
            </pre>
            <pre>
                Github: <a href={github} target="_blank" rel="noopener noreferrer">{github}</a>
            </pre>
        </div>
    );
};