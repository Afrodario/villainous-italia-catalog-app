import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const MALEFICENT: Villain = {
  id: 'maleficent',
  name: 'Malefica',
  expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
  portrait: 'assets/images-webp/cards/maleficent/Maleficent.webp',
  mover: 'assets/images-webp/movers/Maleficentmover.webp',
  mechanics: {
    setup: ``,
    rules: [
      `She has cards of a unique type, Curse, which add effects to locations, but also each have a condition under which they are discarded from play.`,
      `She can move them to different locations using the Move an Item or Ally action.`,
    ],
    victory: ``,
  },
  objective: 'Start your turn with a Curse at each location.',
  objectivePortrait: `assets/images-webp/cards/maleficent/Maleficent_Objective.webp`,
  quote: `"Now go with a curse and serve me well!"`,
  villainDeckBack: `assets/images-webp/cards/maleficent/Maleficent_Villain_Back.webp`,
  fateDeckBack: `assets/images-webp/cards/maleficent/Maleficent_Fate_Back.webp`,
  speedLevel: 'yellow'
};
