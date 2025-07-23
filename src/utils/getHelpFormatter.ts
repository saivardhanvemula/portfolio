export function getHelpFormatter(data: { command: string; description: string }[]) {
  const rows = data.map((item) => `${item.command} - ${item.description}`);
  return rows;
}
