import { VillainProgression } from '../../models/villain-progressions/villain-progress.model';

export const OOGIE_BOOGIE_PROGRESSION: VillainProgression = {
  villainId: 'oogie-boogie',
  items: [
    {
      type: 'counter',
      id: 'sandy-claws-played',
      label: 'Copie di Babbo Nachele giocate con successo',
      min: 0,
      max: 4,
      percentagePerUnit: 20,
    },
    {
      type: 'choice',
      id: 'zero-status',
      label: 'Presenza di Zero',
      options: [
        {
          id: 'zero-absent',
          label: 'Zero non in gioco',
          percentage: 0,
        },
        {
          id: 'zero-present',
          label: 'Zero in gioco',
          percentage: 0,
        },
      ],
    },
    {
      type: 'counter',
      id: 'citizens-of-halloween-town',
      label: 'Cittadini del Paese di Halloween nel Luogo di Jack Skeletron',
      min: 0,
      max: 4,
      percentagePerUnit: -5,
    },
    {
      type: 'counter',
      id: 'allies-strength-zero-absent',
      label:
        'Forza totale degli Alleati nel Luogo di Jack Skeletron (Zero non in gioco)',
      min: 0,
      max: 8,
      percentagePerUnit: 1.25,
      requires: [
        {
          type: 'choice',
          itemId: 'zero-status',
          optionId: 'zero-absent',
        },
      ],
    },
    {
      type: 'counter',
      id: 'allies-strength-zero-present',
      label:
        'Forza totale degli Alleati nel Luogo di Jack Skeletron (Zero in gioco)',
      min: 0,
      max: 10,
      percentagePerUnit: 1,
      requires: [
        {
          type: 'choice',
          itemId: 'zero-status',
          optionId: 'zero-present',
        },
      ],
    },
  ],
};
