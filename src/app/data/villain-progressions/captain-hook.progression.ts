import { VillainProgression } from '../../models/villain-progressions/villain-progress.model';

export const CAPTAIN_HOOK_PROGRESSION: VillainProgression = {
  villainId: 'captain-hook',

  items: [
    {
      type: 'step',
      id: 'never-land-map',
      label: "Giocare la Mappa dell'Isola che non C'è",
      percentage: 20,
    },
    {
      type: 'step',
      id: 'allies-at-jolly-roger',
      label:
        'Avere alla Jolly Roger Alleati con Forza sufficiente a sconfiggere Peter Pan',
      percentage: 30,
    },
    {
      type: 'choice',
      id: 'peter-pan-location',
      label: 'Posizione di Peter Pan',
      options: [
        {
          id: 'in-fate-deck',
          label: 'Nel Mazzo Fato',
          percentage: 0,
        },
        {
          id: 'hangmans-tree',
          label: "Albero dell'Impiccato",
          percentage: 10,
        },
        {
          id: 'mermaid-lagoon',
          label: 'Laguna delle Sirene',
          percentage: 20,
        },
        {
          id: 'skull-rock',
          label: 'Roccia del Teschio',
          percentage: 30,
        },
        {
          id: 'jolly-roger',
          label: 'Jolly Roger',
          percentage: 40,
        },
      ],
    },
    {
      type: 'step',
      id: 'defeat-peter-pan',
      label: 'Sconfiggere Peter Pan alla Jolly Roger',
      percentage: 10,
      requires: {
        type: 'percentage',
        min: 90,
      },
    },
  ],
};
