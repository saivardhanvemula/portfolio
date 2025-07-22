export function getHelpFormatter(data: { command: string; description: string }[]) {
  console.log("data:", data);
  const rows = data.map((item) => `${item.command} - ${item.description}`);
  return rows;
}
