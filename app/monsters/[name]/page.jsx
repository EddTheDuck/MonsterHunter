"use client";
import { getMonstersByName } from "@/api/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function allMonsters() {
  const { name } = useParams();
  const [monster, setMonster] = useState([]);

  useEffect(() => {
    getMonstersByName(name).then((result) => {
      setMonster(result[0]);
    });
  }, [name]);

  return (
    <div>
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        {monster.name}
      </p>
      <p>Type:{monster.type}</p>
      <p>{}</p>
    </div>
  );
}