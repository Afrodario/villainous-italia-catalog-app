import { VillainProgression } from '../../models/villain-progressions/villain-progress.model';

export const MALEFICENT_PROGRESSION: VillainProgression = {
  villainId: 'maleficent',
  items: [
    {
      type: 'counter',
      id: 'forbidden-mountains-curses',
      label: 'Maledizioni alle Montagne Proibite',
      min: 0,
      percentagePerUnit: 0,
    },
    {
      type: 'counter',
      id: 'briar-rose-cottage-curses',
      label: 'Maledizioni alla Casetta di Rosaspina',
      min: 0,
      percentagePerUnit: 0,
    },
    {
      type: 'counter',
      id: 'forest-curses',
      label: 'Maledizioni alla Foresta',
      min: 0,
      percentagePerUnit: 0,
    },
    {
      type: 'counter',
      id: 'king-stefan-castle-curses',
      label: 'Maledizioni al Castello di Re Stefano',
      min: 0,
      percentagePerUnit: 0,
    },

    {
      type: 'step',
      id: 'curse-forbidden-mountains',
      label: 'Avere almeno una Maledizione alle Montagne Proibite',
      percentage: 20,
      requires: [
        {
          type: 'counter',
          itemId: 'forbidden-mountains-curses',
          min: 1,
        },
      ],
    },

    {
      type: 'step',
      id: 'curse-briar-rose-cottage',
      label: 'Avere almeno una Maledizione alla Casetta di Rosaspina',
      percentage: 20,
      requires: [
        {
          type: 'counter',
          itemId: 'briar-rose-cottage-curses',
          min: 1,
        },
      ],
    },

    {
      type: 'step',
      id: 'curse-forest',
      label: 'Avere almeno una Maledizione alla Foresta',
      percentage: 20,
      requires: [
        {
          type: 'counter',
          itemId: 'forest-curses',
          min: 1,
        },
      ],
    },

    {
      type: 'step',
      id: 'curse-king-stefan-castle',
      label: 'Avere almeno una Maledizione al Castello di Re Stefano',
      percentage: 20,
      requires: [
        {
          type: 'counter',
          itemId: 'king-stefan-castle-curses',
          min: 1,
        },
      ],
    },

    {
      type: 'step',
      id: 'all-locations-cursed',
      label: 'Avere almeno una Maledizione in ogni Luogo',
      percentage: 10,
      requires: [
        {
          type: 'step',
          itemId: 'curse-forbidden-mountains',
        },
        {
          type: 'step',
          itemId: 'curse-briar-rose-cottage',
        },
        {
          type: 'step',
          itemId: 'curse-forest',
        },
        {
          type: 'step',
          itemId: 'curse-king-stefan-castle',
        },
      ],
    },

    {
      type: 'counter-group',
      id: 'multiple-curses',
      label: 'Avere più di una Maledizione in uno o più Luoghi',
      counterIds: [
        'forbidden-mountains-curses',
        'briar-rose-cottage-curses',
        'forest-curses',
        'king-stefan-castle-curses',
      ],
      threshold: 2,
      percentages: [3, 5],
    },

    {
      type: 'step',
      id: 'start-turn-with-all-curses',
      label: 'Iniziare il turno con almeno una Maledizione in ogni Luogo',
      percentage: 5,
      requires: [
        {
          type: 'step',
          itemId: 'curse-forbidden-mountains',
        },
        {
          type: 'step',
          itemId: 'curse-briar-rose-cottage',
        },
        {
          type: 'step',
          itemId: 'curse-forest',
        },
        {
          type: 'step',
          itemId: 'curse-king-stefan-castle',
        },
      ],
    },
  ],
};
