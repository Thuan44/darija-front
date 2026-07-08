export type Theme = {
  id: string;
  label: string;
  icon: string;
};

export type Word = {
  id: string;
  darija: string;
  translation: string;
};

export const THEMES: Record<string, Theme> = {
  HOUSE: {
    id: "house",
    label: "Maison",
    icon: "home",
  },
  FOOD: {
    id: "food",
    label: "Nourritue",
    icon: "ustensils",
  },
  TRIP: {
    id: "trip",
    label: "Voyage",
    icon: "compass",
  },
};

export const LEXICON = {
  [THEMES.HOUSE.id]: [
    { id: "dar", darija: "dar", translation: "Maison" },
    { id: "lma", darija: "lma", translation: "Eau" },
    { id: "bab", darija: "bab", translation: "Porte" },
    { id: "sarout", darija: "sarout", translation: "Clé" },
    { id: "kas", darija: "kas", translation: "Verre" },
    { id: "kursi", darija: "kursi", translation: "Chaise" },
    { id: "tlaa", darija: "tlaa", translation: "Escalier" },
    { id: "taqa", darija: "taqa", translation: "Fenêtre" },
    { id: "bit", darija: "bit", translation: "Chambre" },
    { id: "mtbak", darija: "mtbak", translation: "Cuisine" },
  ],
  [THEMES.FOOD.id]: [
    { id: "khobz", darija: "khobz", translation: "Pain" },
    { id: "atay", darija: "atay", translation: "Thé" },
    { id: "tajine", darija: "tajine", translation: "Tajine" },
    { id: "lhem", darija: "lhem", translation: "Viande" },
    { id: "khodra", darija: "khodra", translation: "Légumes" },
    { id: "hlou", darija: "hlou", translation: "Sucré" },
    { id: "hmid", darija: "hmid", translation: "Acide / Citron" },
    { id: "beit", darija: "beit", translation: "Œuf" },
    { id: "bsla", darija: "bsla", translation: "Oignon" },
    { id: "zit", darija: "zit", translation: "Huile" },
  ],
  [THEMES.TRIP.id]: [
    { id: "souq", darija: "souq", translation: "Marché" },
    { id: "triq", darija: "triq", translation: "Route / Chemin" },
    { id: "mdina", darija: "mdina", translation: "Ville" },
    { id: "tomobil", darija: "tomobil", translation: "Voiture" },
    { id: "train", darija: "train", translation: "Train" },
    { id: "matar", darija: "matar", translation: "Aéroport" },
    { id: "bsla7", darija: "bsla7", translation: "Bagage" },
    { id: "otil", darija: "otil", translation: "Hôtel" },
    { id: "hitta", darija: "hitta", translation: "Carte" },
    { id: "taksi", darija: "taksi", translation: "Taxi" },
  ],
};
