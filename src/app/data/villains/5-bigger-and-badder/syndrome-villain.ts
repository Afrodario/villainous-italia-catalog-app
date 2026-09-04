import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const SYNDROME: Villain = {
  id: 'syndrome',
  name: 'Sindrome',
  expansionId: EXPANSIONS_IDS.BiggerAndBadder,
  portrait: 'assets/images/cards/syndrome/Syndrome.png',
  mover: 'assets/images/movers/Syndromemover.png',
  mechanics: {
    setup: `Syndrome has a unique setup and progression mechanic using Omnidroid tiles. He starts the game with Omnidroid v.X8 at Nomanisan Island on his side of the board, and he can upgrade his Omnidroid by using his current model in a Vanquish action and discarding it, then removing Major Modifications from his Realm.`,
    rules: [
      `The first two stages are removed after being used to Vanquish, but the final Omnidroid v.10 remains on the board after being defeated using Syndrome's Remote, covering the top side of its location like a Hero.`,
      `Syndrome has access to Strength Tokens - whenever an Ability tells him to modify Strength on a Hero, he places tokens on that Hero to indicate how much.`,
    ],
    victory: `Syndrome must activate Syndrome's Remote while at Omnidroid v.10's location to defeat it, then clear his Realm of Heroes. To do this, he must first upgrade his Omnidroid v.X8 to Omnidroid v.X9, then to Omnidroid v.10, using them in Vanquish actions and removing Major Modifications from his Realm. He can use 15 Years Later or Mirage to find Heroes for his Omnidroids to Vanquish, or wait until an opponent Fates him. To defeat Heroes, he can use his Omnidroids, his many Allies, and Bio Probe. `,
  },
  objective: 'Defeat Omnidroid v.10 and have no Heroes in your Realm',
  objectivePortrait: `assets/images/cards/syndrome/Syndrome_Objective.jpg`,
  quote: `"You can't count on anyone, especially your heroes."`,
  villainDeckBack: `assets/images/cards/syndrome/Syndrome_Villain_Back.png`,
  fateDeckBack: `assets/images/cards/syndrome/Syndrome_Fate_Back.png`,
};