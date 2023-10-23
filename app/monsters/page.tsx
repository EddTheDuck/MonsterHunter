import { getMonsters } from "@/api/api";

interface Monster {
  id: number;
  type: string;
  name: string;
  species: string;
}

export default async function allMonsters() {
  const monsters = await getMonsters();

  return (
    <div>
      <ul>
        {monsters.map(({ id, type, species, name }: Monster) => {
          return (
            <li key={id}>
              MonsterId: {id}, Name: {name}, Type: {type}, Species: {species}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
