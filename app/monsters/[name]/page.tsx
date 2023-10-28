"use client";
import { getMonstersByName } from "@/api/api";
import { Monster } from "@/components/Monster";
import { useParams } from "next/navigation";

export default async function MonsterByName() {
  const { name } = useParams() as { name: string };

  const monster = await getMonstersByName(name);
  return <Monster {...monster[0]} />;
}
