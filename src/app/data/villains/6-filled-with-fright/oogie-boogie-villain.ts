import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const OOGIE_BOOGIE: Villain = {
  id: 'oogie-boogie',
  name: 'Bau Bau',
  expansionId: EXPANSIONS_IDS.FilledWithFright,
  portrait: 'assets/images-webp/cards/oogie_boogie/Oogie_Boogie.webp',
  mover: 'assets/images-webp/movers/Oogieboogiemover.webp',
  mechanics: {
    setup: `Oogie Boogie has a special setup: he places Sandy Claws at Oogie Boogie's Lair at the beginning of the game.`,
    rules: [
      `Oogie Boogie has a pair of six-sided dice, which he rolls to resolve some of his cards. The number rolled determines the outcome of the card.`,
      `He has several ways of adjusting those rolls, and Hello, Oogie! can subtract from them.`,
    ],
    victory: `Oogie Boogie must convince Jack Skellington to return to Halloween Town, then defeat him with his Allies. He does this by playing Impostors of Sandy Claws, making Jack Skellington realize he should leave Christmas to him. Once four Impostors are successfully played, Jack Skellington returns, and must be Vanquished.`,
  },
  objective: 'Defeat Jack Skellington',
  objectivePortrait: `assets/images-webp/cards/oogie_boogie/Oogie_Boogie_Objective.webp`,
  quote: `"Looks like it's Oogie's turn to boogie now."`,
  villainDeckBack: `assets/images-webp/cards/oogie_boogie/Oogie_Boogie_Villain_Back.webp`,
  fateDeckBack: `assets/images-webp/cards/oogie_boogie/Oogie_Boogie_Fate_Back.webp`,
  speedLevel: 'yellow'
};