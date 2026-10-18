import { VillainProgression } from '../../models/villain-progressions/villain-progress.model';

export const ERNESTO_DE_LA_CRUZ_PROGRESSION: VillainProgression = {
  villainId: 'ernesto-de-la-cruz',
  items: [
    {
      type: 'counter',
      id: 'photo-pieces-turned',
      label: 'Pezzi della foto girati a faccia in giù',
      min: 0,
      max: 6,
      percentagePerUnit: 100 / 6,
    },
    {
      type: 'dynamic',
      id: 'hector-strength-penalty',
      label: 'Malus Forza residua di Hector Rivera',
      maxPercentage: 0,
    },
    {
      type: 'counter',
      id: 'family-blessing-on-hero',
      label: 'Benedizione di Famiglia ancora assegnata a un Eroe',
      min: 0,
      max: 1,
      percentagePerUnit: -10,
    },
    {
      type: 'step',
      id: 'hector-in-play',
      label: 'Hector Rivera ancora in gioco',
      percentage: 0,
    },
  ],
};
