export type JourneyStep = {
  id: number;
  label: string;
};

export const JOURNEY_STEPS: JourneyStep[] = [
  { id: 1, label: "Thème" },
  { id: 2, label: "Mots" },
  { id: 3, label: "Texte" },
  { id: 4, label: "Conseils" },
];
