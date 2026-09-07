import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const KING_CANDY: Villain = {
  id: 'king-candy',
  name: 'Re Candito',
  expansionId: EXPANSIONS_IDS.SugarAndSpite,
  portrait: 'assets/images/cards/king_candy/King_Candy.png',
  mover: 'assets/images/movers/Kingcandymover.png',
  mechanics: {
    setup: `King Candy has a unique Realm setup which he moves through uniquely: his actions are placed along a figure-eight racetrack, and his mover can move forward one to four actions each turn, starting the game at a special Start/Finish action. After moving, he may perform the action he is on, as well as the actions immediately in front of and behind him. Heroes can cover parts of the racetrack or change how many actions forward he can move.`,
    rules: [
      `King Candy's Realm has a single location: Sugar Rush Speedway. He moves through the actions in that location in order, though he only ever has access to at most three actions at once per turn.`,
      `To do this, he must first get Vanellope into his Realm, either by being Fated, by Trickery, or by playing Ralph's Hero Medal and then defeating Wreck-It Ralph.`,
      `Then, he must play a Glitch attached to Vanellope, which moves him and Vanellope's Racer token to the Start/Finish action. The Racer token covers the action it is on, blocking it from King Candy's usage.`,
      `From that point on, King Candy and the Racer token will move forward each turn, and Villain and Fate cards can move both of them forward or back. King Candy wins if he crosses Start/Finish before the Racer token.`,
      `If the Racer token finishes first, all Glitches are removed from Vanellope and returned to King Candy's hand. The Racer token remains on the action it landed on until King Candy starts the race again. He will need to attach another Glitch to Vanellope to do so.`,
    ],
    victory: `King Candy must cross the finish line (marked by the Start/Finish action) while Vanellope von Schweetz is in his Realm, and trapped in a Glitch, before Vanellope's Racer Token finishes.`,
  },
  objective:
    'Pass Start/Finish with a Glitch attached to Vanellope Von Schweetz',
  objectivePortrait: `assets/images/cards/king_candy/King_Candy_Objective.png`,
  quote: `"Welcome to the boss level!"`,
  villainDeckBack: `assets/images/cards/king_candy/King_Candy_Villain_Back.png`,
  fateDeckBack: `assets/images/cards/king_candy/King_Candy_Fate_Back.png`,
  additionalTokens: true,
  additionalTokensPath: `assets/images/cards/king_candy/Racer_Token.png`,
};
