export const Projects = () => {
    const data = [
        "Frontend    - HTML, CSS, JavaScript, ReactJs, NextJs, Tailwind CSS",
        "Backend     - NodeJs, ExpressJs, Deno",
        "Database    - MongoDB, PostgreSql, Redis, Supabase",
        "Tools       - Postman, Prisma, Mongoose, dotenv",
        "Deployment  - Github, Vercel, Deno Deploy",
        "Other       - TypeScript, C++, Python, DSA, OOP",
    ];
    return (
            <div className="response">
                {data.map((item, index) => (
                    <pre key={index}>{item}</pre>
                ))}
            </div>
    );
};
