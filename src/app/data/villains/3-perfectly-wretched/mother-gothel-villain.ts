import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const MOTHER_GOTHEL: Villain = {
  id: 'mother-gothel',
  name: 'Madre Gothel',
  expansionId: EXPANSIONS_IDS.PerfectlyWretched,
  portrait: 'assets/images/cards/mother_gothel/Mother_Gothel.png',
  mover: 'assets/images/movers/Mother_Gothelmover.png',
  mechanics: `Mother Gothel has a Hero, Rapunzel, that is always in her Realm. 
  At the start of the game, Mother Gothel plays Rapunzel (who is printed on a tile instead of a card) to Rapunzel's Tower. 
  If Rapunzel is defeated, she is not discarded, but instead moved back to her Tower. 
  At the end of Mother Gothel's turn, Rapunzel moves one location to the right, if she can.
    Mother Gothel also has a unique mechanic: Trust. It is tracked by Power tokens placed on her board above her Objective. 
    Various card Abilities will cause her to gain or lose Trust - when she gains Trust, she takes Power from the Supply and adds it to her Trust, and when she loses Trust, she returns the specified amount to the Supply of Power Tokens.`,
  objective:
    'Start your turn with at least 10 Trust.',
  objectivePortrait: `assets/images/cards/mother_gothel/Mother_Gothel_Objective.jpg`,
  quote: `"You want me to be the bad guy? Fine. Now I'm the bad guy."`,
  villainDeckBack: `assets/images/cards/mother_gothel/Mother_Gothel_Villain_Back.png`,
  fateDeckBack: `assets/images/cards/mother_gothel/Mother_Gothel_Fate_Back.png`,
};
