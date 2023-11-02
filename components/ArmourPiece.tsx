import { ArmourProps } from "@/Types/types";
import { capitaliseStrings } from "@/utils/CapitaliseStrings";
import Image from "next/image";

export default function ArmourPiece({
  name,
  type,
  rank,
  rarity,
  assets,
}: ArmourProps) {
  return (
    <section
      className="border-solid border-4 rounded-lg
               border-stone-500 text-center space-y-8 w-5/6 mx-auto p-8"
    >
      <h1 className="text-2xl font-extrabold">{name}</h1>
      <div className="flex justify-center">
        <Image
          src={assets?.imageMale ? assets.imageMale : "/images/0noImg.jpg"}
          alt={`Icon of ${name}`}
          width={200}
          height={200}
          priority
        />
      </div>
      <ul className=" text-2xl flex justify-center space-x-40">
        <li>Type: {capitaliseStrings(type)}</li>
        <li>Rank: {capitaliseStrings(rank)}</li>
        <li>Rarity: {rarity}</li>
      </ul>
    </section>
  );
}
