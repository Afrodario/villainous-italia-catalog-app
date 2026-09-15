import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const PRINCE_JOHN: Villain = {
  id: 'prince-john',
  name: 'Principe Giovanni',
  expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
  portrait: 'assets/images-webp/cards/prince_john/Prince_John.webp',
  mover: 'assets/images-webp/movers/Prince_Johnmover.webp',
  mechanics: {
    setup: ``,
    rules: [],
    victory: `Prince John must collect Power until he has at least 20 Power. He can only win at the start of his turn.`,
  },
  objective: 'Start your turn with at least 20 Power.',
  objectivePortrait: `assets/images-webp/cards/prince_john/Prince_John_Objective.webp`,
  quote: `"This crown gives me a feeling of power!"`,
  villainDeckBack: `assets/images-webp/cards/prince_john/Prince_John_Villain_Back.webp`,
  fateDeckBack: `assets/images-webp/cards/prince_john/Prince_John_Fate_Back.webp`,
  speedLevel: 'green'
};
