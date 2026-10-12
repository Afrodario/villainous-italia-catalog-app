import { VillainProgression } from "../../models/villain-progressions/villain-progress.model";


export const HORNED_KING_PROGRESSION: VillainProgression = {
  villainId: 'horned-king',
  items: [
    {
      type: 'step',
      id: 'magic-cauldron-conquered',
      label: 'Pentola Magica conquistata',
      percentage: 10,
    },
    {
      type: 'step',
      id: 'magic-cauldron-power-activated',
      label: 'Il Potere della Pentola Magica attivato',
      percentage: 10,
      requires: [
        {
          type: 'step',
          itemId: 'magic-cauldron-conquered',
        },
      ],
    },
    {
      type: 'choice',
      id: 'ancient-soldiers-location-1',
      label: 'Morva — Presenza delle carte',
      options: [
        {
          id: 'none',
          label: 'Nessuna carta',
          percentage: 0,
        },
        {
          id: 'ancient-soldiers',
          label: 'Soldati Antichi',
          percentage: 10,
        },
        {
          id: 'cauldron-born',
          label: 'Nati dalla Pentola',
          percentage: 20,
        },
      ],
    },
    {
      type: 'choice',
      id: 'ancient-soldiers-location-2',
      label: 'Il Reame dei Folletti — Presenza delle carte',
      options: [
        {
          id: 'none',
          label: 'Nessuna carta',
          percentage: 0,
        },
        {
          id: 'ancient-soldiers',
          label: 'Soldati Antichi',
          percentage: 10,
        },
        {
          id: 'cauldron-born',
          label: 'Nati dalla Pentola',
          percentage: 20,
        },
      ],
    },
    {
      type: 'choice',
      id: 'ancient-soldiers-location-3',
      label: 'Le Segrete — Presenza delle carte',
      options: [
        {
          id: 'none',
          label: 'Nessuna carta',
          percentage: 0,
        },
        {
          id: 'ancient-soldiers',
          label: 'Soldati Antichi',
          percentage: 10,
        },
        {
          id: 'cauldron-born',
          label: 'Nati dalla Pentola',
          percentage: 20,
        },
      ],
    },
    {
      type: 'choice',
      id: 'ancient-soldiers-location-4',
      label: 'La Sala del Trono — Presenza delle carte',
      options: [
        {
          id: 'none',
          label: 'Nessuna carta',
          percentage: 0,
        },
        {
          id: 'ancient-soldiers',
          label: 'Soldati Antichi',
          percentage: 10,
        },
        {
          id: 'cauldron-born',
          label: 'Nati dalla Pentola',
          percentage: 20,
        },
      ],
    },
  ],
};
