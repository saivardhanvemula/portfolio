export function getSkillsFormatter(data: { domain: string; skills: string[] }[]) {
    const maxLen = Math.max(...data.map(item => item.domain.length));
    const rows = data.map(
        (item) => `${item.domain.padEnd(maxLen)} - ${item.skills.join(", ")}`
    );
    return rows;
}
