import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const EVIL_QUEEN: Villain = {
  id: 'evil-queen',
  name: 'Regina Cattiva',
  expansionId: EXPANSIONS_IDS.WickedToTheCore,
  portrait: 'assets/images/cards/evil_queen/Evil_Queen.png',
  mover: 'assets/images/movers/Evil_Queenmover.png',
  mechanics: {
    setup: ``,
    rules: [
      `Evil Queen has a unique action, Brew Poison, and a unique card type, Ingredient.`,
      `She uses Poison to defeat Heroes (as she lacks a Vanquish action) by playing Take a Bite at their location. `,
      `She uses Ingredients to unlock the Dwarfs' Cottage, allowing her to fulfill her win condition and defeat Snow White.`,
    ],
    victory: ``,
  },
  objective: 'Defeat Snow White.',
  objectivePortrait: `assets/images/cards/evil_queen/Evil_Queen_Objective.jpg`,
  quote: `"I'll be the fairest in the land!"`,
  villainDeckBack: `assets/images/cards/evil_queen/Evil_Queen_Villain_Back.png`,
  fateDeckBack: `assets/images/cards/evil_queen/Evil_Queen_Fate_Back.png`,
};
