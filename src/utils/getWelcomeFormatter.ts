export function getWelcomeFormatter(data: { text: string }[]) {
  console.log("data:", data);
  const rows = data.map((item) => `${item.text}`);
  return rows;
}
