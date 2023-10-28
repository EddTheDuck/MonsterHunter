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
