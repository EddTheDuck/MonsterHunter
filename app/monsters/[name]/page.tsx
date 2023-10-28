"use client";
import { MonsterProps } from "@/Types/types";
import { getMonstersByName } from "@/api/api";
import { Monster } from "@/components/Monster";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function MonsterByName() {
  const { name } = useParams() as { name: string };
  const [monster, setMonster] = useState<MonsterProps | undefined>();

  useEffect(() => {
    getMonstersByName(name).then((monster) => {
      setMonster(monster[0]);
    });
  }, [name]);

  return monster ? <Monster {...monster} /> : undefined;
}
