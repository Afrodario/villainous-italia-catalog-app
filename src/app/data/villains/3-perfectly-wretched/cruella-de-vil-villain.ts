import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const CRUELLA_DE_VIL: Villain = {
  id: 'cruella-de-vil',
  name: 'Crudelia de Mon',
  expansionId: EXPANSIONS_IDS.PerfectlyWretched,
  portrait: 'assets/images/cards/cruella_de_vil/Cruella_De_Vil.png',
  mover: 'assets/images/movers/Cruella_De_Vilmover.png',
  mechanics: `Cruella De Vil has Puppy Tokens, which track her completion of her Objective. 
  There are twelve tokens: three for each location (two each with 11 Puppies, one each with 22 Puppies). 
  At the start of the game, all the tokens are placed face down above Cruella De Vil's board to form a Supply, whence they will be added to her board via various card Abilities. 
  When a Puppy Token is added to her board, it is turned face up, and put in the specified location. 
  Once a Puppy Token is turned face up, it is never turned face down again. Puppy Tokens do not prevent actions at their location from being used.`,
  objective:
    'Start your turn with at least 99 captured Puppies.',
  objectivePortrait: `assets/images/cards/cruella_de_vil/Cruella_De_Vil_Objective.jpg`,
  quote: `"I'll get even. Just wait. You'll be sorry."`,
  villainDeckBack: `assets/images/cards/cruella_de_vil/Cruella_De_Vil_Villain_Back.png`,
  fateDeckBack: `assets/images/cards/cruella_de_vil/Cruella_De_Vil_Fate_Back.png`,
  additionalTokens: true,
  additionalTokensPath: `assets/images/cards/cruella_de_vil/Cruella_De_Vil_Puppytokens.png`
};
