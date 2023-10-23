import axios from "axios";

export async function getMonsters() {
  const res = await axios.get("https://mhw-db.com/monsters");
  return res.data;
}

export async function getMonstersByName(name: string) {
  const res = await axios.get(
    `https://mhw-db.com/monsters?q={"name": "${name}"}`
  );
  return res.data;
}

export async function getMonstersBySpecies(species: string) {
  const res = await axios.get(
    `https://mhw-db.com/monsters?q={"species": "${species}"`
  );
  return res.data;
}

export async function getLargeMonsters() {
  const res = await axios.get(
    `https://mhw-db.com/monsters?q={"type": "large"}`
  );
  return res.data;
}

export async function getSmallMonsters() {
  const res = await axios.get(
    `https://mhw-db.com/monsters?q={"type": "small"}`
  );
  return res.data;
}
