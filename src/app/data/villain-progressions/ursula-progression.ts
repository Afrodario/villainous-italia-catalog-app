import { VillainProgression } from '../../models/villain-progressions/villain-progress.model';

export const URSULA_PROGRESSION: VillainProgression = {
  villainId: 'ursula',
  items: [
    {
      type: 'step',
      id: 'crown-played',
      label: 'Avere giocato la Corona',
      percentage: 30,
    },

    {
      type: 'step',
      id: 'trident-played',
      label: 'Avere giocato il Tridente',
      percentage: 15,
    },

    {
      type: 'step',
      id: 'trident-controlled',
      label: 'Avere il Tridente sotto il proprio controllo',
      percentage: 15,
      requires: [
        {
          type: 'step',
          itemId: 'trident-played',
        },
      ],
    },

    {
      type: 'choice',
      id: 'crown-location',
      label: 'Posizione della Corona',
      options: [
        {
          id: 'shore',
          label: 'Riva',
          percentage: 5,
        },
        {
          id: 'erics-ship',
          label: 'Nave di Eric',
          percentage: 10,
        },
        {
          id: 'ursulas-lair',
          label: 'Covo di Ursula',
          percentage: 15,
        },
      ],
      requires: [
        {
          type: 'step',
          itemId: 'crown-played',
        },
      ],
    },

    {
      type: 'choice',
      id: 'trident-location',
      label: 'Posizione del Tridente',
      options: [
        {
          id: 'shore',
          label: 'Riva',
          percentage: 5,
        },
        {
          id: 'erics-ship',
          label: 'Nave di Eric',
          percentage: 10,
        },
        {
          id: 'ursulas-lair',
          label: 'Covo di Ursula',
          percentage: 15,
        },
      ],
      requires: [
        {
          type: 'step',
          itemId: 'trident-controlled',
        },
      ],
    },

    {
      type: 'step',
      id: 'lair-locked',
      label:
        'Avere il Covo di Ursula bloccato con la Corona e il Tridente al suo interno',
      percentage: 5,
      requires: [
        {
          type: 'choice',
          itemId: 'crown-location',
          optionId: 'ursulas-lair',
        },
        {
          type: 'choice',
          itemId: 'trident-location',
          optionId: 'ursulas-lair',
        },
      ],
    },

    {
      type: 'step',
      id: 'start-turn-with-keys',
      label: 'Iniziare il turno con la Corona e il Tridente nel Covo di Ursula',
      percentage: 5,
      requires: [
        {
          type: 'choice',
          itemId: 'crown-location',
          optionId: 'ursulas-lair',
        },
        {
          type: 'choice',
          itemId: 'trident-location',
          optionId: 'ursulas-lair',
        },
      ],
    },
  ],
};
