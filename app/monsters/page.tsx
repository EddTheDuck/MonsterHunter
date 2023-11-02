import { getMonsters } from "@/api/api";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/Breadcrumb";
import { BreadCrumbs, Monster } from "@/Types/types";

export default async function AllMonsters() {
  const monsters = await getMonsters("", "");
  const breadcrumbLinks: BreadCrumbs = [
    { text: "Home", href: "/" },
    { text: "Monsters" },
  ];

  return (
    <div>
      <Breadcrumb links={breadcrumbLinks} />
      <h1 className="text-2xl">All Monsters</h1>

      <ul className="grid grid-cols-4 gap-5">
        {monsters.map(({ id, name }: Monster) => {
          return (
            <Link href={`/monsters/${name}`}>
              <li
                key={id}
                className="border-solid border-4 rounded-lg
               border-stone-500 hover:border-stone-100 hover:bg-stone-500 min-h-full flex flex-col justify-end items-center"
              >
                <div className="">
                  <Image
                    className="h-auto w-auto"
                    src={`/images/${name}_Icon.png`}
                    alt={`Icon of ${name}`}
                    width={100}
                    height={100}
                    priority
                    style={{ objectFit: "contain" }}
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
