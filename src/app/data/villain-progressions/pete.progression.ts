import { VillainProgression } from "../../models/villain-progressions/villain-progress.model";

export const PETE_PROGRESSION: VillainProgression = {
  villainId: 'pete',
  items: [
    {
      type: 'objective-set',
      id: 'pete-objectives',
      label: 'Obiettivi di Gambadilegno',
      objectives: [
        {
          id: 'vittoria-totale',
          label: 'Vittoria Totale',
          weight: 1,
        },
        {
          id: 'gioco-di-forza',
          label: 'Gioco di Forza',
          weight: 1.1,
        },
        {
          id: 'domina-il-reame',
          label: 'Domina il Reame',
          weight: 1.2,
        },
        {
          id: 'adunata',
          label: 'Adunata',
          weight: 1.3,
        },
        {
          id: 'fai-i-soldi',
          label: 'Fai i Soldi',
          weight: 1.4,
        },
      ],
    },
  ],
};