import { getMonsters } from "@/api/api";
import Link from "next/link";

interface Monster {
  id: number;
  type: "large" | "small";
  name: string;
  species: string;
}

export default async function allMonsters() {
  const monsters = await getMonsters("", "");

  return (
    <div>
      <ul>
        {monsters.map(({ id, type, species, name }: Monster) => {
          return (
            <Link href={`/monsters/${name}`}>
              <li key={id}>
                MonsterId: {id}, Name: {name}, Type: {type}, Species: {species}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
