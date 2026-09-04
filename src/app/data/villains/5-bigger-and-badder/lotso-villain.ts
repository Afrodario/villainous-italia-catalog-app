import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const LOTSO: Villain = {
  id: 'lotso',
  name: 'Lotso',
  expansionId: EXPANSIONS_IDS.BiggerAndBadder,
  portrait: 'assets/images/cards/lotso/Lotso.png',
  mover: 'assets/images/movers/Lotsomover.png',
  mechanics: {
    setup: `Lotso has a special setup: he places Buzz Lightyear at Caterpillar Room at the beginning of the game as a Guardian.`,
    rules: [
      `Lotso has access to Strength Tokens - whenever an Ability tells him to modify Strength on a Hero, he places Tokens on that Hero to indicate how much.`,
      `Additionally, if Lotso Vanquishes a Hero, instead of discarding them, they remain where they are, and their Strength is reduced to zero; any Allies used are still discarded.`,
      `The Ability of a Hero at zero Strength in Lotso's Realm is ignored.`,
    ],
    victory: `Lotso must reduce the Strength of all four of his Heroes and move them to Caterpillar Room, and also have Buzz Lightyear, in any mode, in the same location. He can pull Heroes from his Fate deck using Big Baby and Welcome to Sunnyside; he can reduce the Strength of Heroes by playing certain cards and Vanquishing; he can move Heroes using Stretch, Not Age Appropriate and Something Snapped; he can control Buzz Lightyear using Stretch, Not Age Appropriate, and Original Factory Settings.`,
  },
  objective: 'Have 4 Heroes with 0 Strength and Buzz Lightyear in the Caterpillar Room',
  objectivePortrait: `assets/images/cards/lotso/Lotso_Objective.png`,
  quote: `"You're a piece of plastic. You were meant to be thrown away."`,
  villainDeckBack: `assets/images/cards/lotso/Lotso_Villain_Back.png`,
  fateDeckBack: `assets/images/cards/lotso/Lotso_Fate_Back.png`,
};
