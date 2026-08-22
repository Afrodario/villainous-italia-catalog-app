import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const URSULA: Villain = {
  id: 'ursula',
  name: 'Ursula',
  expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
  portrait: 'assets/images/cards/ursula/Ursula.png',
  mover: 'assets/images/movers/Ursulamover.png',
  mechanics: `Ursula cannot perform Vanquish actions; instead, she must attach Binding Contracts to Heroes and move them to the Contracts' specified locations to defeat them. 
  However, her Allies and Heroes still have Strength values, so that other players' Conditions can be triggered.`,
  objective: `Start your turn with the Trident and the Crown at Ursula's lair.`,
  quote: `"The sea and all its spoils bow to my power!"`,
  villainDeckBack: `assets/images/cards/ursula/Ursula_Villain_Back.png`,
  fateDeckBack: `assets/images/cards/ursula/Ursula_Fate_Back.png`,
};
