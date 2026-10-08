import { VillainProgression } from "../../models/villain-progressions/villain-progress.model";

export const SCAR_PROGRESSION: VillainProgression = {
  villainId: 'scar',
  items: [
    {
      type: 'choice',
      id: 'mufasa-status',
      label: 'Stato di Mufasa',
      options: [
        {
          id: 'in-play',
          label: 'Avere Mufasa in gioco',
          percentage: 20,
        },
        {
          id: 'in-succession',
          label: 'Avere Mufasa nella Pila della Successione',
          percentage: 50,
        },
      ],
    },

    {
      type: 'step',
      id: 'enough-allies',
      label:
        'Avere Alleati con Forza sufficiente a sconfiggere Mufasa nel suo stesso Luogo',
      percentage: 30,
      requires: [
        {
          type: 'choice',
          itemId: 'mufasa-status',
          optionId: 'in-play',
        },
      ],
    },

    {
      type: 'counter',
      id: 'succession-strength-after-mufasa',
      label: 'Punti Forza successivi a Mufasa nella Pila della Successione',
      min: 0,
      percentagePerUnit: 0,
      requires: [
        {
          type: 'choice',
          itemId: 'mufasa-status',
          optionId: 'in-succession',
        },
      ],
    },

    {
      type: 'dynamic',
      id: 'succession-strength-progress',
      label: 'Progressione della Pila della Successione',
      maxPercentage: 45,
      counterId: 'succession-strength-after-mufasa',
      percentagePerUnit: 5,
      requires: [
        {
          type: 'choice',
          itemId: 'mufasa-status',
          optionId: 'in-succession',
        },
      ],
    },

    {
      type: 'step',
      id: 'start-turn-with-fifteen-strength',
      label:
        'Iniziare il turno con almeno 15 Punti Forza nella Pila della Successione',
      percentage: 5,
      requires: [
        {
          type: 'counter',
          itemId: 'succession-strength-after-mufasa',
          min: 9,
        },
      ],
    },
  ],
};
