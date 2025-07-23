export function getSkillsFormatter(data: { domain: string; skills: string[] }[]) {
    const rows = data.map(
        (item) => `${item.domain} - ${item.skills.join(", ")}`
    );
    return rows;
}
