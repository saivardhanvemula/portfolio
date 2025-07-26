export const Projects = () => {
    const projects = [
        {
            name: "Portfolio Website",
            desc: "Personal portfolio built with React and Tailwind CSS.",
            link: "https://your-portfolio-link.com",
            tech: "React, Tailwind CSS, Vercel",
        },
        {
            name: "Chat App",
            desc: "Real-time chat application with authentication.",
            link: "https://your-chat-app-link.com",
            tech: "Node.js, Socket.io, MongoDB",
        },
        {
            name: "Blog Platform",
            desc: "A markdown blog platform with comments and tags.",
            link: "https://your-blog-link.com",
            tech: "Next.js, PostgreSQL, Prisma",
        },
    ];

    return (
        <div className="response">
            {projects.map((proj, idx) => (
                <div key={idx}>
                    <pre>
                        {`${proj.name}`}
                    </pre>
                    <pre>{`   Description: ${proj.desc}`}</pre>
                    <pre>{`   Tech: ${proj.tech}`}</pre>
                    <pre>
                        {`   Link: `}
                        <a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {proj.link}
                        </a>
                    </pre>
                </div>
            ))}
        </div>
    );
};
