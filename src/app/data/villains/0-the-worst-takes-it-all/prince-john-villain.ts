import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const PRINCE_JOHN: Villain = {
  id: 'prince-john',
  name: 'Principe Giovanni',
  expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
  portrait: 'assets/images/cards/prince_john/Prince_John.png',
  mover: 'assets/images/movers/Prince_Johnmover.png',
  mechanics: `Nulla da segnalare`,
  objective: 'Start your turn with at least 20 Power.',
  quote: `"This crown gives me a feeling of power!"`,
  villainDeckBack: `assets/images/cards/prince_john/Prince_John_Villain_Back.png`,
  fateDeckBack: `assets/images/cards/prince_john/Prince_John_Fate_Back.png`,
};
