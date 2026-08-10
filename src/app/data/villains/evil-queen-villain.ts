import { Villain } from '../../models/villain.model';

export const EVIL_QUEEN: Villain = {
  id: 'evil-queen',

  name: 'Regina Cattiva',

  expansionId: 'wicked-to-the-core',

  portrait: 'assets/images/cards/evil_queen/Evil_Queen.png',

  mover: 'assets/images/movers/Evil_Queenmover.png',

  mechanics: `Evil Queen has a unique action, Brew Poison, and a unique card type, Ingredient. 
  She uses Poison to defeat Heroes (as she lacks a Vanquish action) by playing Take a Bite at their location. 
  She uses Ingredients to unlock the Dwarfs' Cottage, allowing her to fulfill her win condition and defeat Snow White.`,

  objective: 'Defeat Snow White.',

  quote: `"I'll be the fairest in the land!"`,
  villainDeckBack: ``,
  fateDeckBack: ``,
};
