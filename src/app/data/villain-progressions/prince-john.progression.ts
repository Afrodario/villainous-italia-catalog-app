import { VillainProgression } from '../../models/villain-progressions/villain-progress.model';

export const PRINCE_JOHN_PROGRESSION: VillainProgression = {
  villainId: 'prince-john',

  items: [
    {
      type: 'counter',
      id: 'power-tokens',
      label: 'Gettoni Potere',
      min: 0,
      max: 20,
      percentagePerUnit: 4.5,
    },
    {
      type: 'step',
      id: 'start-turn-with-20-power',
      label: 'Iniziare il turno con almeno 20 Gettoni Potere',
      percentage: 10,
      requires: {
        type: 'counter',
        itemId: 'power-tokens',
        min: 20,
      },
    },
  ],
};
