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
    label: "Nourriture",
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
    { id: "bab", darija: "bab", translation: "Porte" },
    { id: "bit", darija: "bit", translation: "Chambre" },
    { id: "matbakh", darija: "maṭbakh", translation: "Cuisine" },
    { id: "salla", darija: "ṣalla", translation: "Salon" },
    { id: "hammam", darija: "ḥammam", translation: "Salle de bain" },
    { id: "lma", darija: "lma", translation: "Eau" },
    { id: "sarout", darija: "sārot", translation: "Clé" },
    { id: "kas", darija: "kas", translation: "Verre" },
    { id: "kursi", darija: "kursi", translation: "Chaise" },
    { id: "tawla", darija: "ṭawla", translation: "Table" },
    { id: "frasha", darija: "frāsha", translation: "Lit" },
    { id: "chergem", darija: "chergem", translation: "Fenêtre" },
    { id: "tlaa", darija: "ṭlaʿa", translation: "Escalier" },
    { id: "zerbiya", darija: "zerbiya", translation: "Tapis" },
    { id: "bri", darija: "bri", translation: "Couverture" },
    { id: "lampa", darija: "lampa", translation: "Lampe" },
    { id: "sbbuta", darija: "sbūṭa", translation: "Placard" },
    { id: "madraba", darija: "madraba", translation: "Armoire" },
    { id: "barrad", darija: "barrad", translation: "Théière" },
  ],
  [THEMES.FOOD.id]: [
    { id: "khobz", darija: "khobz", translation: "Pain" },
    { id: "atay", darija: "atay", translation: "Thé" },
    { id: "tajin", darija: "tājīn", translation: "Tajine" },
    { id: "lhem", darija: "lḥem", translation: "Viande" },
    { id: "khodra", darija: "khoḍra", translation: "Légumes" },
    { id: "hlou", darija: "ḥlū", translation: "Sucré" },
    { id: "hmid", darija: "ḥmīḍ", translation: "Citron" },
    { id: "beid", darija: "bīḍ", translation: "Œuf" },
    { id: "bsla", darija: "bṣla", translation: "Oignon" },
    { id: "zit", darija: "zīt", translation: "Huile" },
    { id: "lhlieb", darija: "lḥlīb", translation: "Lait" },
    { id: "jbn", darija: "jbn", translation: "Fromage" },
    { id: "sskar", darija: "sskar", translation: "Sucre" },
    { id: "melha", darija: "melḥa", translation: "Sel" },
    { id: "fakia", darija: "fākya", translation: "Fruits" },
    { id: "hout", darija: "ḥūṭ", translation: "Poisson" },
    { id: "djaj", darija: "djāj", translation: "Poulet" },
    { id: "homs", darija: "ḥomṣ", translation: "Pois chiches" },
    { id: "assir", darija: "ʿaṣīr", translation: "Jus" },
    { id: "makla", darija: "mākla", translation: "Plat" },
  ],
  [THEMES.TRIP.id]: [
    { id: "souq", darija: "sūq", translation: "Marché" },
    { id: "triq", darija: "ṭrīq", translation: "Route" },
    { id: "mdina", darija: "mdīna", translation: "Ville" },
    { id: "tomobil", darija: "ṭumūbīl", translation: "Voiture" },
    { id: "tran", darija: "ṭrān", translation: "Train" },
    { id: "matar", darija: "maṭār", translation: "Aéroport" },
    { id: "shanta", darija: "shānta", translation: "Bagage" },
    { id: "otel", darija: "ōtīl", translation: "Hôtel" },
    { id: "khrita", darija: "kharīṭa", translation: "Carte" },
    { id: "taksi", darija: "ṭāksī", translation: "Taxi" },
    { id: "bus", darija: "bas", translation: "Bus" },
    { id: "tayara", darija: "ṭayyāra", translation: "Avion" },
    { id: "gara", darija: "gara", translation: "Gare" },
    { id: "safar", darija: "safar", translation: "Voyage" },
    { id: "blasa", darija: "blāṣa", translation: "Place" },
    { id: "jwaz", darija: "jwāz", translation: "Passeport" },
    { id: "lmassafer", darija: "lmasāfer", translation: "Voyageur" },
    { id: "chari", darija: "shārīʿ", translation: "Rue" },
    { id: "nhar", darija: "nhar", translation: "Jour" },
    { id: "pont", darija: "pōnt", translation: "Pont" },
  ],
};
