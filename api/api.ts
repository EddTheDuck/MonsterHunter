import axios from "axios";

export async function getMonsters(
  type: "large" | "small" | "",
  species: string
) {
  let path = `https://mhw-db.com/monsters`;
  if (type && !species) {
    path += `?q={"type": "${type}"}`;
  }
  if (!type && species) {
    path += `?q={"species": "${species}"}`;
  }
  if (type && species) {
    path += `?q={ type: "${type}", species: "${species}" }`;
  }
  const res = await axios.get(path);
  return res.data;
}

export async function getMonstersByName(name: string) {
  const res = await axios.get(
    `https://mhw-db.com/monsters?q={"name": "${name}"}`
  );
  return res.data;
}

export async function getWeapons() {
  let path = `https://mhw-db.com/weapons?q={"type": "great-sword"}`
  const res = await axios.get(path)
  return res.data
}
