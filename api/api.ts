export default async function getMonsters() {
  const res = await fetch("https://mhw-db.com/monsters");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
