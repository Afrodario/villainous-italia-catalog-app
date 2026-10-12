import { VillainProgression } from '../../models/villain-progressions/villain-progress.model';

export const DAVY_JONES_PROGRESSION: VillainProgression = {
  villainId: 'davy-jones',
  items: [
    {
      type: 'step',
      id: 'bill-in-play',
      label: 'Sputafuoco Bill in campo a fine partita',
      percentage: 5,
    },
    {
      type: 'step',
      id: 'kraken-in-play',
      label: 'Kraken in gioco a fine partita',
      percentage: 5,
    },
    {
      type: 'counter',
      id: 'covered-treasures',
      label: 'Segnalini Tesoro coperti in gioco a fine partita',
      min: 0,
      max: 5,
      percentagePerUnit: 6,
    },
    {
      type: 'counter',
      id: 'revealed-treasures',
      label: 'Segnalini Tesoro rivelati a fine partita',
      min: 0,
      max: 5,
      percentagePerUnit: 12,
    },
    {
      type: 'counter',
      id: 'collected-treasures',
      label: 'Segnalini Tesoro raccolti a fine partita',
      min: 0,
      max: 5,
      percentagePerUnit: 18,
    },
  ],
};
