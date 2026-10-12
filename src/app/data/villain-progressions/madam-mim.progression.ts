import { VillainProgression } from "../../models/villain-progressions/villain-progress.model";


export const MADAM_MIM_PROGRESSION: VillainProgression = {
  villainId: 'madam-mim',
  items: [
    {
      type: 'choice',
      id: 'defeat-strategy',
      label: 'Strategia per sconfiggere le Trasformazioni di Merlino',
      options: [
        {
          id: 'one-by-one',
          label: 'Sconfiggerle una per una',
          percentage: 0,
        },
        {
          id: 'single-turn',
          label: 'Prepararsi a sconfiggerne almeno 6 in un solo turno',
          percentage: 0,
        },
      ],
    },
    {
      type: 'counter',
      id: 'merlin-transformations-defeated',
      label: 'Trasformazioni di Merlino sconfitte a fine partita',
      min: 0,
      max: 7,
      percentagePerUnit: 15,
      requires: [
        {
          type: 'choice',
          itemId: 'defeat-strategy',
          optionId: 'one-by-one',
        },
      ],
    },
    {
      type: 'step',
      id: 'six-transformations-ready',
      label:
        'Requisiti soddisfatti per sconfiggere almeno 6 Trasformazioni in un solo turno',
      percentage: 90,
      requires: [
        {
          type: 'choice',
          itemId: 'defeat-strategy',
          optionId: 'single-turn',
        },
      ],
    },
  ],
};
