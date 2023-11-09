"use client";
import { Breadcrumbs, WeaponProps } from "@/Types/types";
import { getWeaponByName } from "@/api/api";
import { Breadcrumb } from "@/components/Breadcrumb";
import Weapon from "@/components/Weapon";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function WeaponByName() {
  const { name } = useParams() as { name: string };
  const [weapon, setWeapon] = useState<WeaponProps>();

  const breadcrumbLinks: Breadcrumbs = [
    { text: "Home", href: "/" },
    { text: "Weapons", href: "/weapons" },
    { text: `${decodeURI(name)}` },
  ];

  useEffect(() => {
    getWeaponByName(name).then((weapon) => {
      setWeapon(weapon[0]);
    });
  }, [name]);

  return weapon ? (
    <>
      <Breadcrumb links={breadcrumbLinks} />
      <Weapon {...weapon} />
    </>
  ) : undefined;
}
