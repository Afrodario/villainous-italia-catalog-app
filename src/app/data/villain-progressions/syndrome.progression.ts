import { VillainProgression } from "../../models/villain-progressions/villain-progress.model";

export const SYNDROME_PROGRESSION: VillainProgression = {
  villainId: 'syndrome',
  items: [
    {
      type: 'step',
      id: 'omnidroid-v8-discarded',
      label: 'Omnidroide v.8 scartato',
      percentage: 20,
    },
    {
      type: 'step',
      id: 'omnidroid-v9-played',
      label: 'Omnidroide v.9 giocato',
      percentage: 20,
      requires: [{ type: 'step', itemId: 'omnidroid-v8-discarded' }],
    },
    {
      type: 'counter',
      id: 'additional-modifications',
      label: 'Copie di Ulteriori Modifiche in campo',
      min: 0,
      max: 3,
      percentagePerUnit: 10,
      requires: [{ type: 'step', itemId: 'omnidroid-v9-played' }],
    },
    {
      type: 'step',
      id: 'omnidroid-v10-played',
      label: 'Omnidroide v.10 giocato',
      percentage: 0,
      requires: [
        { type: 'step', itemId: 'omnidroid-v9-played' },
        { type: 'counter', itemId: 'additional-modifications', min: 3 },
      ],
    },
    {
      type: 'counter',
      id: 'heroes-in-play',
      label: 'Eroi in gioco dopo aver giocato l’Omnidroide v.10',
      min: 0,
      max: 6,
      percentagePerUnit: -4,
      requires: [{ type: 'step', itemId: 'omnidroid-v10-played' }],
    },
    {
      type: 'step',
      id: 'remote-played',
      label: 'Telecomando giocato',
      percentage: 10,
    },
    {
      type: 'step',
      id: 'no-heroes-at-end',
      label: 'Nessun Eroe in gioco a fine partita',
      percentage: 10,
      requires: [
        { type: 'step', itemId: 'omnidroid-v10-played' },
        { type: 'step', itemId: 'remote-played' },
      ],
    },
    {
      type: 'step',
      id: 'remote-activated',
      label: 'Telecomando attivato nello stesso luogo dell’Omnidroide v.10',
      percentage: 10,
      requires: [
        { type: 'step', itemId: 'omnidroid-v10-played' },
        { type: 'step', itemId: 'remote-played' },
      ],
    },
  ],
};
