import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const URSULA: Villain = {
  id: 'ursula',
  name: 'Ursula',
  expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
  portrait: 'assets/images-webp/cards/ursula/Ursula.webp',
  mover: 'assets/images-webp/movers/Ursulamover.webp',
  mechanics: {
    setup: ``,
    rules: [
      `Ursula cannot perform Vanquish actions; instead, she must attach Binding Contracts to Heroes and move them to the Contracts' specified locations to defeat them.`,
      `However, her Allies and Heroes still have Strength values, so that other players' Conditions can be triggered.`,
    ],
    victory: ``,
  },
  objective: `Start your turn with the Trident and the Crown at Ursula's lair.`,
  objectivePortrait: `assets/images-webp/cards/ursula/Ursula_Objective.webp`,
  quote: `"The sea and all its spoils bow to my power!"`,
  villainDeckBack: `assets/images-webp/cards/ursula/Ursula_Villain_Back.webp`,
  fateDeckBack: `assets/images-webp/cards/ursula/Ursula_Fate_Back.webp`,
  speedLevel: 'red'
};
