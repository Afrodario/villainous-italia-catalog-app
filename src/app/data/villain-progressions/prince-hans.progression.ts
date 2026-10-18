import { VillainProgression } from '../../models/villain-progressions/villain-progress.model';

export const PRINCE_HANS_PROGRESSION: VillainProgression = {
  villainId: 'prince-hans',
  items: [
    {
      type: 'counter',
      id: 'realm-ice-rings',
      label: 'Anelli di Ghiaccio collocati sulle 16 azioni del Reame',
      min: 0,
      max: 16,
      percentagePerUnit: 50 / 16,
    },
    {
      type: 'counter',
      id: 'second-location-ice-rings',
      label: 'Anelli di Ghiaccio sul luogo da ghiacciare nuovamente',
      min: 0,
      max: 4,
      percentagePerUnit: 20 / 4,
      requires: [
        {
          type: 'counter',
          itemId: 'realm-ice-rings',
          min: 16,
        },
      ],
    },
    {
      type: 'step',
      id: 'elsa-defeated',
      label: 'Elsa sconfitta',
      percentage: 15,
      requires: [
        {
          type: 'counter',
          itemId: 'second-location-ice-rings',
          min: 4,
        },
      ],
    },
    {
      type: 'step',
      id: 'anna-defeated',
      label: 'Anna sconfitta',
      percentage: 15,
      requires: [
        {
          type: 'counter',
          itemId: 'second-location-ice-rings',
          min: 4,
        },
      ],
    },
  ],
};
