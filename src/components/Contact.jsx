export const Contact = () => {
    const email = "saivardhanvemulamncl@gmail.com";
    const linkedin = "https://www.linkedin.com/in/sai-vardhan-vemula-58a46b274";
    const Github = "https://github.com/saivardhanvemula";
    return (
        <div className="response">
            <div>
                <span>Email: </span>
                <a href={`mailto:${email}`}>{email}</a>
            </div>
            <div>
                <span>LinkedIn: </span>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    {linkedin}
                </a>
            </div>
            <div>
                <span>Github: </span>
                <a href={Github} target="_blank" rel="noopener noreferrer">
                    {Github}
                </a>
            </div>
        </div>
    );
};
