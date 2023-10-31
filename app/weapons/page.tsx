import { getWeapons } from "@/api/api";
import Link from "next/link";
import Image from "next/image";
import { Weapon } from "@/Types/types";

export default async function AllWeapons() {
  const weapons = await getWeapons();

  return (
    <div>
      <h1 className="text-2xl">All Weapons</h1>
      <ul className="grid grid-cols-4 gap-5">
        {weapons.map(({ id, name, assets }: Weapon) => {
             const icon = assets?.icon ? assets.icon : "/images/0noImg.jpg"
          return (
            <Link href={`/weapons/${name}`}>
              <li
                key={id}
                className="border-solid border-4 rounded-lg
               border-stone-500 hover:border-stone-100 hover:bg-stone-500 min-h-full flex flex-col justify-end items-center"
              >
              <div className="h-50 w-50">
              <Image
                    className="h-auto w-auto"
                    src={icon}
                    alt={`Icon of ${name}`}
                    width={50}
                    height={50}
                    priority
                    placeholder="empty"
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