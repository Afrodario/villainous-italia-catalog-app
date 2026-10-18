import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS, VILLAINS_IDS } from '../../../models/villains-expansions-ids.model';

export const PRINCE_HANS: Villain = {
  id: VILLAINS_IDS.PrinceHans,
  name: 'Il Principe Hans',
  expansionId: EXPANSIONS_IDS.SuccessAtAnyCost,
  portrait: 'assets/images-webp/cards/prince_hans/Prince_Hans.webp',
  mover: 'assets/images-webp/movers/Princehansmover.webp',
  mechanics: {
    setup: `Prince Hans has a unique mechanic of Frozen rings, which he places encircling his actions. As the start of the game, he places one on an action of his choice in each of his locations, for a total of four.`,
    rules: [
      `Once all sixteen rings are placed, he immediately flips over his Realm board to its Frozen side, places rings on two actions in each location (for a total of eight), and ends his turn (if it's his turn).`,
      `At this point, any location in the flipped Realm with four rings is considered fully frozen.`,
      `He has several cards that place Frozen rings on actions, and he may also place one Frozen ring after Vanquishing a Hero.`,
      `He can wait for Anna or Elsa to be played in a Fate action, or fetch them himself with Prince Hans In Charge. When either are defeated at a fully frozen location, they are removed from the game, rather than put in the Fate discard pile.`,
      `He can only defeat them via a Vanquish action, but he has several strong Allies for doing so, and he can reduce Elsa's Strength with You Froze Her Heart.`,
    ],
    victory: `Prince Hans must defeat Anna and Elsa at fully frozen locations.`,
  },
  objective: 'Defeat Elsa and Anna at fully frozen locations.',
  objectivePortrait: `assets/images-webp/cards/prince_hans/Prince_Hans_Objective.webp`,
  quote: `"Oh, Anna. If only there was someone out there who loved you."`,
  villainDeckBack: `assets/images-webp/cards/prince_hans/Prince_Hans_Villain_Back.webp`,
  fateDeckBack: `assets/images-webp/cards/prince_hans/Prince_Hans_Fate_Back.webp`,
  additionalTokens: true,
  additionalTokensPath: ``,
  speedLevel: 'orange'
};