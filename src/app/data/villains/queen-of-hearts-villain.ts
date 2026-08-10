import { Villain } from '../../models/villain.model';

export const QUEEN_OF_HEARTS: Villain = {
  id: 'queen-of-hearts',

  name: 'Regina di Cuori',

  expansionId: 'the-worst-takes-it-all',

  portrait: 'assets/images/cards/queen_of_hearts/Queen_of_Hearts.png',

  mover: 'assets/images/movers/Queen_of_Heartsmover.png',

  mechanics: `Queen of Hearts has a unique mechanic: Shrinking and Enlarging Heroes. 
  Cards in her Villain deck can Shrink Heroes, turning them 45° so that they only cover one action instead of two. 
  Cards in her Fate deck can Enlarge them, turning them 90° from normal to cover three actions - the normal two, as well as one at an adjacent location, chosen by the Fating player. 
  An Enlarged Hero can be targeted in a Vanquish action by Allies at either location, or both. 
  If multiple Heroes are at a location, the priority is: Enlarged > Shrunken > Normal; so adding a Hero to a location with a Shrunken Hero will not cover back up the uncovered top action, but later Enlarging that normal Hero will successfully cover three actions, even though a Shrunken Hero is also present.`,

  objective: 'Have a Wicket at each location and successfully take a shot.',

  quote: `"If I lose my temper, you lose your head."`,
  villainDeckBack: ``,
  fateDeckBack: ``,
};
