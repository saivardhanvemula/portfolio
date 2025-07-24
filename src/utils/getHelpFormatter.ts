type HelpCommand = { command: string; description: string };

export function getHelpFormatter(data: HelpCommand[]): string[] {
  const maxLen = Math.max(...data.map(item => item.command.length));

  const rows = data.map(
    item => `${item.command.padEnd(maxLen)} - ${item.description}`
  );
  console.log("rows:", rows.join("/n"));
  return rows;
}
