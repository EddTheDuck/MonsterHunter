export interface Monster {
  id: number;
  type: "large" | "small";
  name: string;
  species: string;
}

export interface MonsterProps extends Monster {
  description: string;
}
export interface Weapon {
  id: number;
  name: string;
  assets: { icon: string };
}

export interface WeaponProps extends Weapon {
  type:
  | "great-sword"
  | "long-sword"
  | "sword-and-shield"
  | "dual-blades"
  | "hammer"
  | "hunting-horn"
  | "lance"
  | "gunlance"
  | "switch-axe"
  | "charge-blade"
  | "insect-glaive"
  | "light-bowgun"
  | "heavy-bowgun"
  | "bow";
  rarity: number;
  assets: { icon: string, image: string }
  attack: { display: number }
  damageType: "sever" | "blunt" | "piercing" | "slashing"
}

export interface Armour {
  id: number;
  name: string;
  assets: assets;
}

interface assets {
  imageMale: string;
  imageFemale: string;
}

export interface ArmourProps extends Armour {
  type: string;
  rank: string;
  rarity: number;
  assets: assets;
}
export interface BreadcrumbItem {
  text: string;
  href?: string;
}

export interface BreadcrumbProps {
  links: BreadcrumbItem[];
}
export type Breadcrumbs = BreadcrumbItem[];
