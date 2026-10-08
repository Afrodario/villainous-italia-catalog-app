import { VillainProgression } from "../../models/villain-progressions/villain-progress.model";

export const HADES_PROGRESSION: VillainProgression = {
  villainId: 'hades',
  items: [
    {
      type: 'counter',
      id: 'underworld-titans',
      label: "Titani nell'Oltretomba",
      min: 0,
      max: 5,
      percentagePerUnit: 0,
    },

    {
      type: 'counter',
      id: 'thebes-titans',
      label: 'Titani a Tebe',
      min: 0,
      max: 5,
      percentagePerUnit: 0,
    },

    {
      type: 'counter',
      id: 'gardens-titans',
      label: 'Titani ai Giardini',
      min: 0,
      max: 5,
      percentagePerUnit: 0,
    },

    {
      type: 'counter',
      id: 'mount-olympus-titans',
      label: 'Titani al Monte Olimpo',
      min: 0,
      max: 5,
      percentagePerUnit: 0,
    },

    {
      type: 'counter',
      id: 'trapped-titans',
      label: 'Titani intrappolati',
      min: 0,
      max: 5,
      percentagePerUnit: 0,
    },

    {
      type: 'dynamic',
      id: 'titans-progress',
      label: 'Progressione dei Titani',
      maxPercentage: 90,
      counterSources: [
        {
          counterId: 'underworld-titans',
          percentagePerUnit: 3,
          max: 3,
        },
        {
          counterId: 'thebes-titans',
          percentagePerUnit: 5,
          max: 3,
        },
        {
          counterId: 'gardens-titans',
          percentagePerUnit: 8,
          max: 3,
        },
        {
          counterId: 'mount-olympus-titans',
          percentagePerUnit: 30,
          max: 3,
        },
      ],
      penaltyCounterId: 'trapped-titans',
      penaltyPerUnit: 3,
    },

    {
      type: 'step',
      id: 'start-turn-with-three-titans',
      label: 'Iniziare il turno con almeno 3 Titani al Monte Olimpo',
      percentage: 10,
      requires: [
        {
          type: 'counter',
          itemId: 'mount-olympus-titans',
          min: 3,
        },
      ],
    },
  ],
};
