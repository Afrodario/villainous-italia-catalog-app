import { VillainProgression } from '../../models/villain-progressions/villain-progress.model';

export const MOTHER_GOTHEL_PROGRESSION: VillainProgression = {
  villainId: 'mother-gothel',
  items: [
    {
      type: 'counter',
      id: 'trust-tokens',
      label: 'Segnalini Fiducia raccolti',
      min: 0,
      percentagePerUnit: 9,
    },
    {
      type: 'step',
      id: 'start-turn-with-10-trust',
      label: 'Iniziare il turno con almeno 10 Segnalini Fiducia raccolti',
      percentage: 10,
      requires: [
        {
          type: 'counter',
          itemId: 'trust-tokens',
          min: 10,
        },
      ],
    },
  ],
};
