export const THEMES = {
  HOUSE: {
    id: 'house',
    label: 'Maison',
    icon: 'home',
  },
  FOOD: {
    id: 'food',
    label: 'Nourritue',
    icon: 'ustensils',
  },
  TRIP: {
    id: 'trip',
    label: 'Voyage',
    icon: 'compass',
  },
};

export const LEXICON = {
  [THEMES.HOUSE.id]: [
    { id: 'dar', darija: 'dar', translation: 'Maison' },
    { id: 'lma', darija: 'lma', translation: 'Eau' },
    { id: 'bab', darija: 'bab', translation: 'Porte' },
    { id: 'sarout', darija: 'sarout', translation: 'Clé' },
  ],
  [THEMES.FOOD.id]: [
    { id: 'khobz', darija: 'khobz', translation: 'Pain' },
    { id: 'atay', darija: 'atay', translation: 'Thé' },
    { id: 'tajine', darija: 'tajine', translation: 'Tajine' },
    { id: 'lhem', darija: 'lhem', translation: 'Viande' },
  ],
  [THEMES.TRIP.id]: [
    { id: 'souq', darija: 'souq', translation: 'Marché' },
    { id: 'triq', darija: 'triq', translation: 'Route / Chemin' },
    { id: 'mdina', darija: 'mdina', translation: 'Ville' },
    { id: 'tonobil', darija: 'tonobil', translation: 'Voiture' },
  ],
};