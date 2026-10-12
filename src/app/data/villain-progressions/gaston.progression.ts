import { VillainProgression } from "../../models/villain-progressions/villain-progress.model";

export const GASTON_PROGRESSION: VillainProgression = {
  villainId: 'gaston',
  items: [
    {
      type: 'counter',
      id: 'obstacles-removed',
      label: 'Segnalini Ostacolo rimossi',
      min: 0,
      max: 8,
      percentagePerUnit: 12.5,
    },
    {
      type: 'step',
      id: 'belle-still-in-play',
      label: 'Belle è ancora in gioco a fine partita',
      percentage: -12.5,
    },
  ],
};