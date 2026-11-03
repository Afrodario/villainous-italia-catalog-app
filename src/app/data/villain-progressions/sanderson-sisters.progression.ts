import { VillainProgression } from "../../models/villain-progressions/villain-progress.model";

export const SANDERSON_SISTERS_PROGRESSION: VillainProgression = {
  villainId: 'sanderson-sisters',
  items: [
    {
      type: 'counter',
      id: 'ingredient-pages',
      label: 'Pagine degli Ingredienti completate',
      min: 0,
      max: 6,
      percentagePerUnit: 10,
    },
    {
      type: 'step',
      id: 'life-potion-assigned',
      label: 'Pozione della Vita assegnata a un Eroe',
      percentage: 10,
      requires: [
        {
          type: 'counter',
          itemId: 'ingredient-pages',
          min: 6,
        },
      ],
    },
    {
      type: 'step',
      id: 'winifred-positioned',
      label: 'Winifred nello stesso luogo dell’Eroe',
      percentage: 6.67,
      requires: [
        {
          type: 'step',
          itemId: 'life-potion-assigned',
        },
      ],
    },
    {
      type: 'step',
      id: 'sarah-positioned',
      label: 'Sarah nello stesso luogo dell’Eroe',
      percentage: 6.67,
      requires: [
        {
          type: 'step',
          itemId: 'life-potion-assigned',
        },
      ],
    },
    {
      type: 'step',
      id: 'mary-positioned',
      label: 'Mary nello stesso luogo dell’Eroe',
      percentage: 6.66,
      requires: [
        {
          type: 'step',
          itemId: 'life-potion-assigned',
        },
      ],
    },
    {
      type: 'step',
      id: 'hero-defeated',
      label: 'Eroe sconfitto con la Pozione della Vita assegnata',
      percentage: 10,
      requires: [
        {
          type: 'step',
          itemId: 'winifred-positioned',
        },
        {
          type: 'step',
          itemId: 'sarah-positioned',
        },
        {
          type: 'step',
          itemId: 'mary-positioned',
        },
      ],
    },
  ],
};
