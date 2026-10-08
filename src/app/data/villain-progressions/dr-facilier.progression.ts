import { VillainProgression } from "../../models/villain-progressions/villain-progress.model";

export const DR_FACILIER_PROGRESSION: VillainProgression = {
  villainId: 'dr-facilier',
  items: [
    {
      type: 'counter',
      id: 'fortune-pile-cards',
      label: 'Carte nella Pila della Sorte',
      min: 0,
      percentagePerUnit: 0,
    },

    {
      type: 'counter',
      id: 'masked-spirits',
      label: 'Spiriti Mascherati nella Pila della Sorte',
      min: 0,
      max: 3,
      percentagePerUnit: 0,
    },

    {
      type: 'step',
      id: 'control-new-orleans',
      label: 'Avere la carta Controllare New Orleans nella Pila della Sorte',
      percentage: 30,
    },

    {
      type: 'step',
      id: 'talisman-controlled',
      label: 'Avere il Talismano sotto il proprio controllo',
      percentage: 20,
    },

    {
      type: 'step',
      id: 'mama-odie-in-play',
      label: 'Avere Mama Odie in gioco',
      percentage: 0,
    },

    {
      type: 'dynamic',
      id: 'fortune-pile-progress',
      label: 'Progressione della Pila della Sorte',
      maxPercentage: 50,
      divisor: 150,
      alternativeDivisor: 100,
      alternativeDivisorRequirement: {
        type: 'step',
        itemId: 'mama-odie-in-play',
      },
      counterId: 'fortune-pile-cards',
      penaltyCounterId: 'masked-spirits',
      penaltyPerUnit: 8,
    },
  ],
};
