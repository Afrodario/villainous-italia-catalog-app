import { VillainProgression } from '../../models/villain-progressions/villain-progress.model';

export const YZMA_PROGRESSION: VillainProgression = {
  villainId: 'yzma',
  items: [
    {
      type: 'step',
      id: 'kuzco-in-play',
      label: 'Avere Kuzco in gioco',
      percentage: 30,
    },

    {
      type: 'step',
      id: 'kronk-in-play',
      label: 'Avere Kronk in gioco come Alleato',
      percentage: 20,
    },

    {
      type: 'step',
      id: 'dagger-assigned-to-kronk',
      label: 'Avere il Pugnale assegnato a Kronk',
      percentage: 10,
      requires: [
        {
          type: 'step',
          itemId: 'kronk-in-play',
        },
      ],
    },

    {
      type: 'choice',
      id: 'kronk-position',
      label: 'Posizione di Kronk rispetto a Kuzco',
      options: [
        {
          id: 'same-location',
          label: 'Stesso Luogo di Kuzco',
          percentage: 30,
        },
        {
          id: 'adjacent-location',
          label: 'Luogo adiacente a Kuzco',
          percentage: 20,
        },
        {
          id: 'two-locations-away',
          label: 'A due Luoghi di distanza da Kuzco',
          percentage: 10,
        },
      ],
      requires: [
        {
          type: 'step',
          itemId: 'kuzco-in-play',
        },
        {
          type: 'step',
          itemId: 'kronk-in-play',
        },
      ],
    },

    {
      type: 'step',
      id: 'tipo-in-play',
      label: 'Avere Tipo in gioco',
      percentage: -7.5,
    },

    {
      type: 'step',
      id: 'chaca-in-play',
      label: 'Avere Chaca in gioco',
      percentage: -7.5,
    },

    {
      type: 'step',
      id: 'defeat-kuzco-with-kronk',
      label: 'Sconfiggere Kuzco utilizzando Kronk',
      percentage: 10,
      requires: [
        {
          type: 'percentage',
          min: 90,
        },
      ],
    },
  ],
};
