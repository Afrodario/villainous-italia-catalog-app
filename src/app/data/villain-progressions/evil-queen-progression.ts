import { VillainProgression } from '../../models/villain-progressions/villain-progress.model';

export const EVIL_QUEEN_PROGRESSION: VillainProgression = {
  villainId: 'evil-queen',
  items: [
    {
      type: 'step',
      id: 'black-of-night-played',
      label: "Avere giocato una copia dell'Ingrediente Nero della Notte",
      percentage: 15,
    },
    {
      type: 'step',
      id: 'mummy-dust-played',
      label: "Avere giocato una copia dell'Ingrediente Polvere di Mummia",
      percentage: 15,
    },
    {
      type: 'step',
      id: 'witch-laughter-played',
      label: "Avere giocato una copia dell'Ingrediente Risata di Strega",
      percentage: 15,
    },
    {
      type: 'step',
      id: 'terror-scream-played',
      label: "Avere giocato una copia dell'Ingrediente Urlo di Terrore",
      percentage: 15,
    },

    {
      type: 'step',
      id: 'dwarfs-cottage-unlocked',
      label: 'Avere sbloccato la Casetta dei Nani',
      percentage: 10,
      requires: [
        {
          type: 'step',
          itemId: 'black-of-night-played',
        },
        {
          type: 'step',
          itemId: 'mummy-dust-played',
        },
        {
          type: 'step',
          itemId: 'witch-laughter-played',
        },
        {
          type: 'step',
          itemId: 'terror-scream-played',
        },
      ],
    },

    {
      type: 'step',
      id: 'snow-white-in-play',
      label: 'Avere Biancaneve in gioco',
      percentage: 10,
    },

    {
      type: 'step',
      id: 'doc-not-in-play',
      label: 'Avere Dotto non presente in gioco',
      percentage: 0,
    },

    {
      type: 'step',
      id: 'enough-poison',
      label:
        'Avere un numero di Segnalini Veleno pari alla Forza attuale di Biancaneve',
      percentage: 10,
      requires: [
        {
          type: 'step',
          itemId: 'snow-white-in-play',
        },
        {
          type: 'step',
          itemId: 'doc-not-in-play',
        },
      ],
    },

    {
      type: 'step',
      id: 'give-her-a-bite-in-hand',
      label: 'Avere una copia di Dalle un Morso in mano',
      percentage: 5,
      requires: [
        {
          type: 'step',
          itemId: 'snow-white-in-play',
        },
        {
          type: 'step',
          itemId: 'doc-not-in-play',
        },
      ],
    },
    {
      type: 'step',
      id: 'defeat-snow-white',
      label: 'Sconfiggere Biancaneve',
      percentage: 5,
      requires: [
        {
          type: 'step',
          itemId: 'snow-white-in-play',
        },
        {
          type: 'step',
          itemId: 'doc-not-in-play',
        },
        {
          type: 'step',
          itemId: 'dwarfs-cottage-unlocked',
        },
        {
          type: 'step',
          itemId: 'give-her-a-bite-in-hand',
        },
        {
          type: 'step',
          itemId: 'enough-poison',
        },
      ],
    },
  ],
};
