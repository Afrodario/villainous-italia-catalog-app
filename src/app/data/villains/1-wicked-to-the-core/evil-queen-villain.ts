import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const EVIL_QUEEN: Villain = {
  id: 'evil-queen',
  name: 'Regina Cattiva',
  expansionId: EXPANSIONS_IDS.WickedToTheCore,
  portrait: 'assets/images-webp/cards/evil_queen/Evil_Queen.webp',
  mover: 'assets/images-webp/movers/Evil_Queenmover.webp',
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
  objectivePortrait: `assets/images-webp/cards/evil_queen/Evil_Queen_Objective.webp`,
  quote: `"I'll be the fairest in the land!"`,
  villainDeckBack: `assets/images-webp/cards/evil_queen/Evil_Queen_Villain_Back.webp`,
  fateDeckBack: `assets/images-webp/cards/evil_queen/Evil_Queen_Fate_Back.webp`,
  additionalSetIds: [EXPANSIONS_IDS.DarknessBrewing],
  speedLevel: 'green'
};
