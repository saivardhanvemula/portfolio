export function getWelcomeFormatter(data: { text: string }[]) {
  const rows = data.map((item) => `${item.text}`);
  return rows;
}
