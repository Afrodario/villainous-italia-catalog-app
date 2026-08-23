import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const RATIGAN: Villain = {
  id: 'ratigan',
  name: 'Rattigan',
  expansionId: EXPANSIONS_IDS.EvilComesPrepared,
  portrait: 'assets/images/cards/ratigan/Ratigan.png',
  mover: 'assets/images/movers/Ratiganmover.png',
  mechanics: `Ratigan, The Superior Mind, must play The Robot Queen, move it to Buckingham Palace, and start his turn with it there. 
  To do so, he must accumulate 15 Power (or enough Cost-reducing Items), and draw The Robot Queen from his deck. He can only win this way at the start of his turn.
    If The Robot Queen is discarded by Basil, Ratigan becomes The Rat, and his Objective changes. 
    Now he must defeat Basil, either using Allies to Vanquish him, or a Marvelous Trap.
Ratigan has an Objective Tile to track which win condition he must meet, turning it over when his Objective changes. 
He is the only Villain with more than one possible Objective.`,
  objective:
    'Start your turn with the Robot Queen at Buckingham Palace / Defeat Basil.',
  quote: `"Oh this is wicked. So delightfully wicked!"`,
  villainDeckBack: `assets/images/cards/ratigan/Ratigan_Villain_Back.png`,
  fateDeckBack: `assets/images/cards/ratigan/Ratigan_Fate_Back.png`,
};
