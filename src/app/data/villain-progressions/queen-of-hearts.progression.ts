import { VillainProgression } from '../../models/villain-progressions/villain-progress.model';

export const QUEEN_OF_HEARTS_PROGRESSION: VillainProgression = {
  villainId: 'queen-of-hearts',
  items: [
    {
      type: 'counter',
      id: 'garden-archetti',
      label: 'Archetti nel Giardino',
      min: 0,
      percentagePerUnit: 0,
    },
    {
      type: 'counter',
      id: 'hedge-maze-archetti',
      label: 'Archetti nel Labirinto di Siepi',
      min: 0,
      percentagePerUnit: 0,
    },
    {
      type: 'counter',
      id: 'tulgey-wood-archetti',
      label: 'Archetti nella Foresta di Tulgi',
      min: 0,
      percentagePerUnit: 0,
    },
    {
      type: 'counter',
      id: 'white-rabbit-house-archetti',
      label: 'Archetti nella Casa del Bianconiglio',
      min: 0,
      percentagePerUnit: 0,
    },

    {
      type: 'step',
      id: 'archetti-garden',
      label: 'Avere almeno un Archetto nel Giardino',
      percentage: 20,
      requires: [
        {
          type: 'counter',
          itemId: 'garden-archetti',
          min: 1,
        },
      ],
    },

    {
      type: 'step',
      id: 'archetti-hedge-maze',
      label: 'Avere almeno un Archetto nel Labirinto di Siepi',
      percentage: 20,
      requires: [
        {
          type: 'counter',
          itemId: 'hedge-maze-archetti',
          min: 1,
        },
      ],
    },

    {
      type: 'step',
      id: 'archetti-tulgey-wood',
      label: 'Avere almeno un Archetto nella Foresta di Tulgi',
      percentage: 20,
      requires: [
        {
          type: 'counter',
          itemId: 'tulgey-wood-archetti',
          min: 1,
        },
      ],
    },

    {
      type: 'step',
      id: 'archetti-white-rabbit-house',
      label: 'Avere almeno un Archetto nella Casa del Bianconiglio',
      percentage: 20,
      requires: [
        {
          type: 'counter',
          itemId: 'white-rabbit-house-archetti',
          min: 1,
        },
      ],
    },

    {
      type: 'counter-group',
      id: 'multiple-archetti',
      label: 'Avere almeno due Archetti in almeno un Luogo',
      counterIds: [
        'garden-archetti',
        'hedge-maze-archetti',
        'tulgey-wood-archetti',
        'white-rabbit-house-archetti',
      ],
      threshold: 2,
      percentages: [3, 6, 8, 10],
    },

    {
      type: 'step',
      id: 'enough-power-for-tirare',
      label: 'Avere almeno 4 Gettoni Potere per giocare Tirare',
      percentage: 5,
      requires: [
        {
          type: 'step',
          itemId: 'archetti-garden',
        },
        {
          type: 'step',
          itemId: 'archetti-hedge-maze',
        },
        {
          type: 'step',
          itemId: 'archetti-tulgey-wood',
        },
        {
          type: 'step',
          itemId: 'archetti-white-rabbit-house',
        },
      ],
    },

    {
      type: 'step',
      id: 'tirare-in-hand',
      label: 'Avere una copia di Tirare in mano',
      percentage: 5,
      requires: [
        {
          type: 'step',
          itemId: 'archetti-garden',
        },
        {
          type: 'step',
          itemId: 'archetti-hedge-maze',
        },
        {
          type: 'step',
          itemId: 'archetti-tulgey-wood',
        },
        {
          type: 'step',
          itemId: 'archetti-white-rabbit-house',
        },
      ],
    },
  ],
};
