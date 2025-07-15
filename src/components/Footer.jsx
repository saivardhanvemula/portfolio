import { useState, useEffect } from "react";

const Footer = () => {
    const [timeStamp, setTimeStamp] = useState(new Date().toLocaleString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeStamp(new Date().toLocaleString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="footer">
            <span>{timeStamp}</span>
        </div>
    );
};

export default Footer;
