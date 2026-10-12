import { VillainProgression } from '../../models/villain-progressions/villain-progress.model';

export const KING_CANDY_PROGRESSION: VillainProgression = {
  villainId: 'king-candy',
  items: [
    {
      type: 'step',
      id: 'hero-medal-played',
      label: 'Medaglia dell’Eroe di Ralph giocata',
      percentage: 20,
    },
    {
      type: 'step',
      id: 'ralph-defeated',
      label: 'Ralph Spaccatutto sconfitto con la Medaglia dell’Eroe assegnata',
      percentage: 20,
      requires: [
        {
          type: 'step',
          itemId: 'hero-medal-played',
        },
      ],
    },
    {
      type: 'counter',
      id: 'glitches-assigned',
      label: 'Glitch assegnati a Vanellope Von Schweetz',
      min: 0,
      max: 1,
      percentagePerUnit: 20,
    },
    {
      type: 'counter',
      id: 'race-spaces-traveled',
      label: 'Caselle percorse nella Grande Corsa',
      min: 0,
      max: 20,
      percentagePerUnit: 2,
      requires: [
        {
          type: 'step',
          itemId: 'hero-medal-played',
        },
        {
          type: 'step',
          itemId: 'ralph-defeated',
        },
        { type: 'counter', itemId: 'glitches-assigned', min: 1 },
      ],
    },
  ],
};
