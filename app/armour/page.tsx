import { getArmour } from "@/api/api";
import Link from "next/link";
import Image from "next/image";
import { Armour, Breadcrumbs } from "@/Types/types";
import { Breadcrumb } from "@/components/Breadcrumb";

export default async function AllArmour() {
  const armour = await getArmour();
  const breadcrumbLinks: Breadcrumbs = [
    { text: "Home", href: "/" },
    { text: "Armour" },
  ];
  return (
    <div>
      <Breadcrumb links={breadcrumbLinks} />
      <h1 className="text-2xl">Armour Pieces</h1>
      <ul key={armour.id} className="grid grid-cols-4 gap-5">
        {armour.map(({ name, assets }: Armour) => {
          return (
            <Link href={`/armour/${name}`}>
              <li
                key={armour.id}
                className="border-solid border-4 rounded-lg
               border-stone-500 hover:border-stone-100 hover:bg-stone-500 min-h-full flex flex-col justify-end items-center"
              >
                <div className=" flex h-50 w-50">
                  <Image
                    className="h-auto w-auto"
                    src={
                      assets?.imageMale
                        ? assets.imageMale
                        : "/images/0noImg.jpg"
                    }
                    alt={`Icon of ${name}`}
                    width={50}
                    height={50}
                    priority
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
