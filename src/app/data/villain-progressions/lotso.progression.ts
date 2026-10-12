import { VillainProgression } from '../../models/villain-progressions/villain-progress.model';

export const LOTSO_PROGRESSION: VillainProgression = {
  villainId: 'lotso',
  items: [
    {
      type: 'choice',
      id: 'victory-strategy',
      label: 'Strategia per raggiungere l’Obiettivo',
      options: [
        {
          id: 'traditional',
          label:
            'Strada tradizionale: indebolire gli Eroi e portarli nell’Aula Bruco',
          percentage: 0,
        },
        {
          id: 'new-toys',
          label:
            'Avere i requisiti per terminare la partita con I Nuovi Giocattoli Non Hanno Speranze di Farcela',
          percentage: 90,
        },
      ],
    },
    {
      type: 'counter',
      id: 'heroes-outside-classroom',
      label: 'Eroi fuori dall’Aula Bruco',
      min: 0,
      max: 4,
      percentagePerUnit: 5,
      requires: [
        {
          type: 'choice',
          itemId: 'victory-strategy',
          optionId: 'traditional',
        },
      ],
    },
    {
      type: 'counter',
      id: 'heroes-inside-classroom',
      label: 'Eroi nell’Aula Bruco',
      min: 0,
      max: 4,
      percentagePerUnit: 10,
      requires: [
        {
          type: 'choice',
          itemId: 'victory-strategy',
          optionId: 'traditional',
        },
      ],
    },
    {
      type: 'step',
      id: 'buzz-lightyear-classroom',
      label: 'Buzz Lightyear nell’Aula Bruco',
      percentage: 5,
      requires: [
        {
          type: 'choice',
          itemId: 'victory-strategy',
          optionId: 'traditional',
        },
      ],
    },
    {
      type: 'step',
      id: 'rex-strength-zero',
      label: 'Forza di Rex ridotta a 0',
      percentage: 10,
      requires: [
        {
          type: 'choice',
          itemId: 'victory-strategy',
          optionId: 'traditional',
        },
      ],
    },
    {
      type: 'counter',
      id: 'other-heroes-strength-zero-or-one',
      label: 'Altri Eroi con Forza ridotta a 0 o 1',
      min: 0,
      max: 3,
      percentagePerUnit: 15,
      requires: [
        {
          type: 'choice',
          itemId: 'victory-strategy',
          optionId: 'traditional',
        },
      ],
    },
    {
      type: 'step',
      id: 'new-toys-requirements-met',
      label:
        'Requisiti soddisfatti per terminare la partita con I Nuovi Giocattoli Non Hanno Speranze di Farcela',
      percentage: 90,
      requires: [
        {
          type: 'choice',
          itemId: 'victory-strategy',
          optionId: 'new-toys',
        },
      ],
    },
  ],
};
