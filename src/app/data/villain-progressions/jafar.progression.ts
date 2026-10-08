import { VillainProgression } from '../../models/villain-progressions/villain-progress.model';

export const JAFAR_PROGRESSION: VillainProgression = {
  villainId: 'jafar',

  items: [
    {
      type: 'step',
      id: 'cave-of-wonders-unlocked',
      label: 'Aver sbloccato la Caverna delle Meraviglie',
      percentage: 20,
    },

    {
      type: 'step',
      id: 'magic-lamp-at-cave',
      label: 'Aver giocato la Lampada Magica alla Caverna delle Meraviglie',
      percentage: 20,
      requires: [
        {
          type: 'step',
          itemId: 'cave-of-wonders-unlocked',
        },
      ],
    },

    {
      type: 'step',
      id: 'enough-power-for-genie',
      label: 'Aver accumulato abbastanza Potere per ipnotizzare il Genio',
      percentage: 10,
    },

    {
      type: 'step',
      id: 'genie-hypnotized',
      label: 'Aver ipnotizzato il Genio',
      percentage: 10,
      requires: [
        {
          type: 'step',
          itemId: 'magic-lamp-at-cave',
        },
        {
          type: 'step',
          itemId: 'enough-power-for-genie',
        },
      ],
    },

    {
      type: 'step',
      id: 'magic-lamp-controlled',
      label: 'Avere la Lampada Magica sotto il proprio controllo',
      percentage: 0,
      requires: [
        {
          type: 'step',
          itemId: 'magic-lamp-at-cave',
        },
      ],
    },

    {
      type: 'choice',
      id: 'magic-lamp-location',
      label: 'Posizione della Lampada Magica',
      options: [
        {
          id: 'cave-of-wonders',
          label: 'Caverna delle Meraviglie',
          percentage: 0,
        },
        {
          id: 'oasis',
          label: 'Oasi',
          percentage: 10,
        },
        {
          id: 'agrabah-streets',
          label: 'Strade di Agrabah',
          percentage: 20,
        },
        {
          id: 'sultans-palace',
          label: 'Palazzo del Sultano',
          percentage: 30,
        },
      ],
      requires: [
        {
          type: 'step',
          itemId: 'magic-lamp-controlled',
        },
      ],
    },

    {
      type: 'step',
      id: 'final-condition',
      label:
        'Iniziare il turno con la Lampada Magica sotto il tuo controllo al Palazzo del Sultano e il Genio Ipnotizzato',
      percentage: 10,
      requires: [
        {
          type: 'choice',
          itemId: 'magic-lamp-location',
          optionId: 'sultans-palace',
        },
        {
          type: 'step',
          itemId: 'genie-hypnotized',
        },
      ],
    },
  ],
};
