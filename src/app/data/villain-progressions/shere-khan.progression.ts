import { VillainProgression } from '../../models/villain-progressions/villain-progress.model';

export const SHERE_KHAN_PROGRESSION: VillainProgression = {
  villainId: 'shere-khan',
  items: [
    {
      type: 'choice',
      id: 'victory-strategy',
      label: 'Strategia per sconfiggere Mowgli',
      options: [
        {
          id: 'traditional',
          label: 'Progressione tradizionale',
          percentage: 0,
        },
        {
          id: 'same-turn',
          label: 'Sconfiggere Mowgli nello stesso turno',
          percentage: 0,
        },
      ],
    },
    {
      type: 'choice',
      id: 'fire-tokens-remaining',
      label: 'Segnalini Fuoco rimasti con Mowgli in campo',
      requires: [
        {
          type: 'choice',
          itemId: 'victory-strategy',
          optionId: 'traditional',
        },
      ],
      options: [
        { id: 'four', label: '4 Segnalini Fuoco', percentage: 20 },
        { id: 'three', label: '3 Segnalini Fuoco', percentage: 40 },
        { id: 'two', label: '2 Segnalini Fuoco', percentage: 60 },
        { id: 'one', label: '1 Segnalino Fuoco', percentage: 80 },
        { id: 'zero', label: 'Nessun Segnalino Fuoco', percentage: 90 },
      ],
    },
    {
      type: 'step',
      id: 'same-turn-requirements',
      label:
        'Requisiti per giocare e sconfiggere Mowgli nello stesso turno soddisfatti',
      percentage: 90,
      requires: [
        {
          type: 'choice',
          itemId: 'victory-strategy',
          optionId: 'same-turn',
        },
      ],
    },
    {
      type: 'step',
      id: 'baloo-in-play',
      label: 'Baloo è in campo (malus)',
      percentage: -10,
    },
    {
      type: 'step',
      id: 'mowgli-defeated',
      label: 'Mowgli sconfitto senza Segnalini Fuoco in campo',
      percentage: 10,
      requires: [
        {
          type: 'choice-selected',
          itemId: 'victory-strategy',
        },
      ],
    },
  ],
};
