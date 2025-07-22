/// <reference types="vite/client" />
import axios from "axios";
import { getHelpFormatter } from "../utils/getHelpFormatter";
const BASE_URL =
    import.meta.env.VITE_REACT_APP_BASE_URL || "http://localhost:8000";

console.log("BASE_URL:", BASE_URL);

async function getProjects() {
    const res = await axios.get(`${BASE_URL}/projects`);
    return res.data;
}

async function getHelp() {
    const res = await axios.get(`${BASE_URL}/help`);
    console.log("Help response:", res.data);
    return getHelpFormatter(res.data);
    // return "help";
}
async function getSkills() {
    const res = await axios.get(`${BASE_URL}/skills`);
    console.log("Help response:", res.data);
    return res.data;
}

export { getHelp, getProjects, getSkills };
