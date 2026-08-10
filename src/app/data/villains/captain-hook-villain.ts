import { Villain } from '../../models/villain.model';

export const CAPTAIN_HOOK: Villain = {
  id: 'captain-hook',

  name: 'Capitan Uncino',

  expansionId: 'the-worst-takes-it-all',

  portrait: 'assets/images/cards/captain_hook/Captain_Hook.png',

  mover: 'assets/images/movers/Captain_Hookmover.png',

  mechanics: `Captain Hook must defeat Peter Pan at the Jolly Roger.
    In order to achieve his Objective, you must unlock Hangman's Tree location by playing the Never Land Map. Peter Pan must be played, either by you or an opponent, to Hangman's Tree. You will then need to move him to Mermaid Lagoon, then to Skull Rock, and finally to the Jolly Roger, where you must defeat him to win the game.
    The order of playing the Never Land Map and playing Peter Pan doesn't matter, either of them can be played first.`,

  objective: 'Defeat Peter Pan at the Jolly Roger.',

  quote: `"Double the powder and shorten the fuse!"`,

  villainDeckBack: ``,
  fateDeckBack: ``,
};
