export type MonsterProps = {
  id: string;
  name: string;
  type: "large" | "small";
  species: string;
  description: string;
};

export type Monster = {
  id: number;
  type: "large" | "small";
  name: string;
  species: string;
};
