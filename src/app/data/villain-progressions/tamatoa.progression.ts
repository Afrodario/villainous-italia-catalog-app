import { VillainProgression } from '../../models/villain-progressions/villain-progress.model';

export const TAMATOA_PROGRESSION: VillainProgression = {
  villainId: 'tamatoa',
  items: [
    {
      type: 'choice',
      id: 'maui-hook-status',
      label: 'Stato dell’Amo di Maui',
      options: [
        {
          id: 'in-lair',
          label: 'Sotto il controllo di Tamatoa nella Tana di Tamatoa',
          percentage: 50,
        },
        {
          id: 'adjacent',
          label:
            'Sotto il controllo di Tamatoa in un luogo adiacente alla Tana',
          percentage: 25,
        },
        {
          id: 'two-locations-away',
          label:
            'Sotto il controllo di Tamatoa a due luoghi di distanza dalla Tana',
          percentage: 20,
        },
        {
          id: 'maui-control',
          label: 'Nel Reame, sotto il controllo di Maui',
          percentage: 15,
        },
        {
          id: 'not-in-realm',
          label: 'Non presente nel Reame',
          percentage: 0,
        },
      ],
    },
    {
      type: 'choice',
      id: 'te-fiti-heart-status',
      label: 'Stato del Cuore di Te Fiti',
      options: [
        {
          id: 'in-lair',
          label: 'Sotto il controllo di Tamatoa nella Tana di Tamatoa',
          percentage: 50,
        },
        {
          id: 'adjacent',
          label:
            'Sotto il controllo di Tamatoa in un luogo adiacente alla Tana',
          percentage: 25,
        },
        {
          id: 'two-locations-away',
          label:
            'Sotto il controllo di Tamatoa a due luoghi di distanza dalla Tana',
          percentage: 20,
        },
        {
          id: 'moana-control',
          label: 'Nel Reame, sotto il controllo di Vaiana',
          percentage: 15,
        },
        {
          id: 'not-in-realm',
          label: 'Non presente nel Reame',
          percentage: 0,
        },
      ],
    },
  ],
};
