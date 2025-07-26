import axios from "axios";
import { getSkillsFormatter } from "../utils/getSkillsFormatter";
const BASE_URL = "http://localhost:8001";

function getWelcome() {
    const res = [
        "Hi, I am Sai Vardhan, a full-stack developer.",
        "",
        "Welcome to my interactive portfolio terminal!\n",
        "Type 'help' to see the available commands.",
    ];
    return res;
}
function getHelp() {
    const data = [
        "help       - Displays a list of available commands",
        "welcome    - Displays information about me",
        "projects   - Lists my featured projects",
        "contact    - Shows my contact information",
        "skills     - Displays my technical skillset",
        "experience - Shows my professional experience and roles",
        "clear      - Clears the terminal screen",
    ];
    return data;
}
async function getProjects() {
    const res = await axios.get(`${BASE_URL}/projects`);
    return [res.data];
}

function getSkills() {
    const res = [
        "Frontend    - HTML, CSS, JavaScript, ReactJs, NextJs, Tailwind CSS",
        "Backend     - NodeJs, ExpressJs, Deno",
        "Database    - MongoDB, PostgreSql, Redis, Supabase",
        "Tools       - Postman, Prisma, Mongoose, dotenv",
        "Deployment  - Github, Vercel, Deno Deploy",
        "Other       - TypeScript, C++, Python, DSA, OOP",
    ];
    return res;
}
function getContact() {
    const res = [
        "email : saivardhanvemulamncl@gmail.com",
        "linkedin : https://www.linkedin.com/in/sai-vardhan-vemula-58a46b274",
    ];
    return res;
}

export { getHelp, getProjects, getSkills, getWelcome, getContact };
