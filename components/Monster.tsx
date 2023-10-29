import { MonsterProps } from "@/Types/types";
import Image from "next/image";

export function Monster({ name, type, species, description }: MonsterProps) {
  return (
    <section
      className=" border-solid border-4 rounded-lg
               border-sky-500 text-center space-y-8 w-5/6 mx-auto"
    >
      <h1 className="text-2xl">{name}</h1>
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
      <ul>
        <li>Type:{type}</li>
        <li>Species:{species}</li>
        <p>{description}</p>
      </ul>
    </section>
  );
}
