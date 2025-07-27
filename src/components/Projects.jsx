export const Projects = () => {
    const projects = [
        {
            name: "ChitChat (In Progress)",
            desc: "Real-time messaging app using the MERN stack and WebSockets for instant communication.",
            tech: "ReactJS, NodeJS, ExpressJS, MongoDB, Socket.io",
        },
        {
            name: "Bus Tracking System",
            desc: "Real-time bus tracking system using Google Maps for live location and essential bus details.",
            tech: "HTML, CSS, JavaScript, NodeJS, ExpressJS, MongoDB",
        },
        {
            name: "CampusOne",
            desc: "Student portal to view attendance, notes, and provides an admin panel to manage content.",
            tech: "ReactJS, NodeJS, ExpressJS, MongoDB",
        },
    ];

    return (
        <div className="response">
            {projects.map((proj, idx) => (
                <div key={idx}>
                    <pre>{`${proj.name}`}</pre>
                    <pre>{`   Description: ${proj.desc}`}</pre>
                    <pre>{`   Tech: ${proj.tech}`}</pre>
                </div>
            ))}
        </div>
    );
};
