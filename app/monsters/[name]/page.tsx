"use client";
import { MonsterProps } from "@/Types/types";
import { getMonstersByName } from "@/api/api";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Monster } from "@/components/Monster";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function MonsterByName() {
  const { name } = useParams() as { name: string };
  const [monster, setMonster] = useState<MonsterProps | undefined>();
  const breadcrumbLinks: [
    { text: string; href: string },
    { text: string; href: string },
    { text: string }
  ] = [
    { text: "Home", href: "/" },
    { text: "monsters", href: "/monsters" },
    { text: `${name}` },
  ];

  useEffect(() => {
    getMonstersByName(name).then((monster) => {
      setMonster(monster[0]);
    });
  }, [name]);

  return monster ? (
    <>
      <Breadcrumb links={breadcrumbLinks} />
      <Monster {...monster} />{" "}
    </>
  ) : undefined;
}
