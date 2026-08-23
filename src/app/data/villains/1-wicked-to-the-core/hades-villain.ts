import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const HADES: Villain = {
  id: 'hades',
  name: 'Ade',
  expansionId: EXPANSIONS_IDS.WickedToTheCore,
  portrait: 'assets/images/cards/hades/Hades.png',
  mover: 'assets/images/movers/Hadesmover.png',
  mechanics: `He has a unique card type, Titan. 
  Titans have a Strength like Allies and can be used to defeat Heroes. 
  They are his win condition, as he needs to move at least three of them to Mount Olympus. 
  They can be trapped, which means they are turned sideways 90°, and cannot be moved, cannot participate in Vanquish actions, and do not count towards Hades' objective, until they are untrapped.`,
  objective: 'Start your turn with three Titans at Mount Olympus.',
  objectivePortrait: ``,
  quote: `"Everybody's got a weakness."`,
  villainDeckBack: `assets/images/cards/hades/Hades_Villain_Back.png`,
  fateDeckBack: `assets/images/cards/hades/Hades_Fate_Back.png`,
};
