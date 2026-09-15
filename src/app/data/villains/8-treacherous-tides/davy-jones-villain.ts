import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const DAVY_JONES: Villain = {
  id: 'davy-jones',
  name: 'Davy Jones',
  expansionId: EXPANSIONS_IDS.TreacherousTides,
  portrait: 'assets/images-webp/cards/davy_jones/Davy_Jones.webp',
  mover: 'assets/images-webp/movers/Davyjonesmover.webp',
  mechanics: {
    setup: `Davy Jones has five Treasure Tokens, each with a different name and Ability. They start the game in a shuffled pile face down.`,
    rules: [
      `Through gameplay, they are placed on Heroes, revealed, and then taken when the Hero is defeated.`,
      `While Treasure Tokens on Heroes can be moved around and sometimes flipped face down again, Treasure Tokens are taken permanently.`,
      `Heroes may only have one Treasure attached to them at a time.`,
    ],
    victory: `Davy Jones must collect all 5 of his Treasure tokens. To do this, he must first put face-down Treasure tokens on Heroes in his Realm, via Do You Fear Death? and They're Here. Then he must flip the Treasure face up (via Bootstrap Bill, Hadras or The Black Spot), and finally defeat that Hero to claim it. When he has claimed all 5 Treasures, he wins.`,
    victoryList: {
      header: `Each Treasure has an Ability:`,
      elements: [
        `<strong>Jack's Compass:</strong> This Hero gets +2 Strength.`,
        `<strong>Music Box:</strong> The Kraken cannot be used to defeat this Hero.`,
        `<strong>The Heart:</strong> When The Heart is collected, lose all Power.`,
        `<strong>The Key:</strong> When The Key is revealed, discard your hand.`,
        `<strong>Treasure Chest:</strong> Allies cannot be played to this location.`,
      ],
    },
  },
  objective: 'Collect all 5 Treasure Tokens',
  objectivePortrait: `assets/images-webp/cards/davy_jones/Davy_Jones_Objective.webp`,
  quote: `"Life is cruel. Why should the afterlife be any different?"`,
  villainDeckBack: `assets/images-webp/cards/davy_jones/Davy_Jones_Villain_Back.webp`,
  fateDeckBack: `assets/images-webp/cards/davy_jones/Davy_Jones_Fate_Back.webp`,
  additionalTokens: true,
  additionalTokensPath: `assets/images-webp/cards/davy_jones/Treasure_Tokens.webp`,
  speedLevel: 'red'
};
