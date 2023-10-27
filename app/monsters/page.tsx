import { getMonsters } from "@/api/api";
import Link from "next/link";
import Image from "next/image";

interface Monster {
  id: number;
  type: "large" | "small";
  name: string;
  species: string;
}

export default async function AllMonsters() {
  const monsters = await getMonsters("", "");

  return (
    <div>
      <ul className="grid grid-cols-4 gap-5">
        {monsters.map(({ id, name }: Monster) => {
          return (
            <Link href={`/monsters/${name}`}>
              <li
                key={id}
                className="border-solid border-4 rounded-full border-sky-500 hover:border-sky-100 text-center hover:bg-sky-500"
              >
                <div className="flex justify-center ">
                  <Image
                    className="justify-center"
                    src={`/images/MH3U-Barroth_Icon.png`}
                    alt="Image"
                    width={100}
                    height={100}
                  />
                </div>
                <h2 className="text-2xl">{name}</h2>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
