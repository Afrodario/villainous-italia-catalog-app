import { VillainProgression } from '../../models/villain-progressions/villain-progress.model';

export const LADY_TREMAINE_PROGRESSION: VillainProgression = {
  villainId: 'lady-tremaine',
  items: [
    {
      type: 'step',
      id: 'kings-invitation-played',
      label: 'Invito del Re giocato',
      percentage: 20,
    },
    {
      type: 'step',
      id: 'wedding-bells-in-play',
      label: 'Campane Nuziali ancora in gioco a fine partita',
      percentage: 30,
    },
    {
      type: 'choice',
      id: 'stepsister-ballroom-location',
      label:
        'Posizione migliore di Anastasia o Genoveffa con il Vestito da Ballo',
      options: [
        {
          id: 'not-considered',
          label: 'Nessuna sorellastra da considerare',
          percentage: 0,
        },
        {
          id: 'cinderella-room',
          label: 'Stanza di Cenerentola',
          percentage: 10,
        },
        {
          id: 'music-room',
          label: 'Sala della Musica',
          percentage: 20,
        },
        {
          id: 'castle',
          label: 'Castello',
          percentage: 30,
        },
        {
          id: 'ballroom',
          label: 'Sala da Ballo',
          percentage: 40,
        },
      ],
    },
    {
      type: 'step',
      id: 'wedding-bells-activated',
      label: 'Campane Nuziali attivate per completare l’obiettivo',
      percentage: 10,
      requires: [
        {
          type: 'step',
          itemId: 'kings-invitation-played',
        },
        {
          type: 'step',
          itemId: 'wedding-bells-in-play',
        },
        {
          type: 'choice',
          itemId: 'stepsister-ballroom-location',
          optionId: 'ballroom',
        },
      ],
    },
    {
      type: 'choice',
      id: 'crystal-slippers-penalty',
      label: 'Scarpette di Cristallo e Bastone della Matrigna a fine partita',
      options: [
        {
          id: 'no-slippers',
          label: 'Nessuna Scarpetta di Cristallo in gioco',
          percentage: 0,
        },
        {
          id: 'one-slipper-no-staff',
          label: '1 Scarpetta in gioco, Bastone non in gioco',
          percentage: -10,
        },
        {
          id: 'two-slippers-no-staff',
          label: '2 Scarpette in gioco, Bastone non in gioco',
          percentage: -20,
        },
        {
          id: 'one-slipper-with-staff',
          label: '1 Scarpetta in gioco, Bastone in gioco',
          percentage: -5,
        },
        {
          id: 'two-slippers-with-staff',
          label: '2 Scarpette in gioco, Bastone in gioco',
          percentage: -10,
        },
      ],
    },
  ],
};
