"use client";
import { Breadcrumbs, ArmourProps } from "@/Types/types";
import { getArmourByName } from "@/api/api";
import ArmourPiece from "@/components/ArmourPiece";
import { Breadcrumb } from "@/components/Breadcrumb";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ArmourByName() {
  const { name } = useParams() as { name: string };
  const [armourPiece, setArmourPiece] = useState<ArmourProps>();

  const breadcrumbLinks: Breadcrumbs = [
    { text: "Home", href: "/" },
    { text: "Armour", href: "/armour" },
    { text: `${decodeURI(name)}` },
  ];

  useEffect(() => {
    getArmourByName(name).then((armour) => {
      setArmourPiece(armour[0]);
    });
  }, [name]);

  return armourPiece ? (
    <>
      <Breadcrumb links={breadcrumbLinks} />
      <ArmourPiece {...armourPiece} />
    </>
  ) : undefined;
}
