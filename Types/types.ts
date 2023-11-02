export interface MonsterProps {
  id: string;
  name: string;
  type: "large" | "small";
  species: string;
  description: string;
}

export interface Monster {
  id: number;
  type: "large" | "small";
  name: string;
  species: string;
}

export interface Weapon {
  id: number;
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
  name: string;
  rarity: number;
  assets: { icon: string };
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

export interface BreadcrumbItem {
  text: string;
  href?: string;
}

export interface BreadcrumbProps {
  links: BreadcrumbItem[];
}
export type BreadCrumbs = BreadcrumbItem[];
