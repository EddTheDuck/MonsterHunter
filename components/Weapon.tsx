import { WeaponProps } from "@/Types/types";
import { capitaliseStrings } from "@/utils/CapitaliseStrings";
import Image from "next/image";

export default function Weapon({
  name,
  type,
  rarity,
  assets,
  attack,
  damageType
}: WeaponProps) {
  return (
    <section
      className="border-solid border-4 rounded-lg
               border-stone-500 text-center space-y-8 w-5/6 mx-auto p-8"
    >
      <h1 className="text-2xl font-extrabold">{name}</h1>
      <div className="flex justify-center">
        <Image
          src={assets?.image ? assets.image : "/images/0noImg.jpg"}
          alt={`Icon of ${name}`}
          width={200}
          height={200}
          priority
        />
      </div>
      <ul className=" text-2xl flex justify-center space-x-40">
        <li>Type: {capitaliseStrings(type)}</li>
        <li>Rarity: {rarity}</li>
        <li>Attack: {attack.display}</li>
        <li>Damage Type: {capitaliseStrings(damageType)}</li>
      </ul>
    </section>
  );
}
