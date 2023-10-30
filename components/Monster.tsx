import { MonsterProps } from "@/Types/types";
import { capitaliseStrings } from "@/utils/CapitaliseStrings";
import Image from "next/image";
import Link from "next/link";

export function Monster({ name, type, species, description }: MonsterProps) {
  return (
    <section
      className="border-solid border-4 rounded-lg
               border-stone-500 text-center space-y-8 w-5/6 mx-auto p-8"
    >
      <Link
        className="border border-stone-500 text-stone-800 px-2 py-1 rounded hover:bg-stone-800 hover:text-stone-200 focus-within: bg-skate-700 "
        href={"/monsters"}
      >
        Back to All Monsters
      </Link>
      <h1 className="text-2xl font-extrabold">{name}</h1>
      <div className="flex justify-center">
        <Image
          className="w-auto h-auto"
          src={`/images/${name}_Icon.png`}
          alt={`Icon of ${name}`}
          width={200}
          height={200}
          priority
        />
      </div>
      <ul className=" text-2xl flex justify-center space-x-40">
        <li>Type: {capitaliseStrings(type)}</li>
        <li>Species: {capitaliseStrings(species)}</li>
      </ul>
      <div className="flex justify-center">
        <p className="text-2xl w-2/3 flex justify-center font-light">
          {description}
        </p>
      </div>
    </section>
  );
}
