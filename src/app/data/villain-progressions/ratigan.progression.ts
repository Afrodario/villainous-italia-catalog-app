import { VillainProgression } from '../../models/villain-progressions/villain-progress.model';

export const RATIGAN_PROGRESSION: VillainProgression = {
  villainId: 'ratigan',
  items: [
    {
      type: 'choice',
      id: 'rattigan-form',
      label: 'Forma di Rattigan',
      options: [
        {
          id: 'mastermind',
          label: 'Rattigan la Mente Superiore',
          percentage: 0,
        },
        {
          id: 'rat',
          label: 'Rattigan il Ratto',
          percentage: 50,
        },
      ],
    },

    {
      type: 'choice',
      id: 'robot-queen-status',
      label: 'Stato della Regina Robot',
      options: [
        {
          id: 'not-played',
          label: 'Regina Robot non giocata',
          percentage: 0,
        },
        {
          id: 'flaversham-toy-shop',
          label: 'Regina Robot al Negozio di Giocattoli di Flaversham',
          percentage: 45,
        },
        {
          id: 'big-ben',
          label: 'Regina Robot al Big Ben',
          percentage: 75,
        },
        {
          id: 'buckingham-palace',
          label: 'Regina Robot a Buckingham Palace',
          percentage: 95,
        },
      ],
      requires: [
        {
          type: 'choice',
          itemId: 'rattigan-form',
          optionId: 'mastermind',
        },
      ],
    },

    {
      type: 'counter',
      id: 'gear-cards',
      label: 'Carte Ingranaggio in gioco',
      min: 0,
      max: 5,
      percentagePerUnit: 5,
      requires: [
        {
          type: 'choice',
          itemId: 'rattigan-form',
          optionId: 'mastermind',
        },
        {
          type: 'choice',
          itemId: 'robot-queen-status',
          optionId: 'not-played',
        },
      ],
    },

    {
      type: 'step',
      id: 'queen-of-mice-in-play',
      label: 'Avere la Regina dei Topi in gioco',
      percentage: -15,
      requires: [
        {
          type: 'choice',
          itemId: 'rattigan-form',
          optionId: 'mastermind',
        },
      ],
    },

    {
      type: 'choice',
      id: 'basil-preparation',
      label: 'Preparazione per sconfiggere Basil',
      options: [
        {
          id: 'enough-allies',
          label:
            'Avere Alleati con Forza sufficiente a sconfiggere Basil nel suo stesso Luogo',
          percentage: 30,
        },
        {
          id: 'wonderful-trap',
          label: 'Avere la Trappola Meravigliosa nello stesso Luogo di Basil',
          percentage: 40,
        },
        {
          id: 'activated-wonderful-trap',
          label:
            'Avere attivato la Trappola Meravigliosa nello stesso Luogo di Basil',
          percentage: 45,
        },
      ],
      requires: [
        {
          type: 'choice',
          itemId: 'rattigan-form',
          optionId: 'rat',
        },
      ],
    },

    {
      type: 'step',
      id: 'start-turn-with-robot-queen',
      label: 'Iniziare il turno con la Regina Robot a Buckingham Palace',
      percentage: 5,
      requires: [
        {
          type: 'choice',
          itemId: 'rattigan-form',
          optionId: 'mastermind',
        },
        {
          type: 'percentage',
          min: 95,
        },
      ],
    },

    {
      type: 'step',
      id: 'defeat-basil',
      label: 'Sconfiggere Basil',
      percentage: 0,
      completeProgression: true,
      requires: [
        {
          type: 'choice-selected',
          itemId: 'basil-preparation',
        },
      ],
    },
  ],
};
