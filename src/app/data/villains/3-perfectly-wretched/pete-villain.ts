import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const PETE: Villain = {
  id: 'pete',
  name: 'Gambadilegno',
  expansionId: EXPANSIONS_IDS.PerfectlyWretched,
  portrait: 'assets/images/cards/pete/Pete.png',
  mover: 'assets/images/movers/Petemover.png',
  mechanics: {
    setup: `Pete has a special setup: he has five Goal Tokens, and he randomly places four of them in his Realm, one to each location.`,

    rules: [
      `They are played face down, though Pete can look at them (and some Fate cards will reveal them to his opponents).`,

      `Each one has a different Objective, and when a Goal is completed, it is removed from Pete's board.`,
    ],

    victory: `When he has completed all four selected Goals, Pete wins. The unused Goal remains face down, and is not public knowledge.`,
  },
  objective: 'Complete the four selected Goals.',
  objectivePortrait: `assets/images/cards/pete/Pete_Objective.jpg`,
  quote: `"I'm gonna knock you right into next week!"`,
  villainDeckBack: `assets/images/cards/pete/Pete_Villain_Back.png`,
  fateDeckBack: `assets/images/cards/pete/Pete_Fate_Back.png`,
  additionalTokens: true,
  additionalTokensPath: `assets/images/cards/pete/Pete_Goaltokens.png`,
};
