import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const SHERE_KHAN: Villain = {
  id: 'shere-khan',
  name: 'Shere Khan',
  expansionId: EXPANSIONS_IDS.SugarAndSpite,
  portrait: 'assets/images/cards/shere_khan/Shere_Khan.png',
  mover: 'assets/images/movers/Sherekhanmover.png',
  mechanics: {
    setup: ``,
    rules: [
      `Shere Khan has a unique mechanic in Fire tokens, which can cover individual actions in his locations, preventing them from being used much like a Hero blocks the top row of actions in a location.`,
      `These are placed and moved by Fate cards, and removed by Villain cards, and he must remove any present in his Realm before he can win.`,
    ],
    victory: `Shere Khan must defeat Mowgli while there are no Fire Tokens in his Realm. To do this, he must bring Mowgli into his Realm, either by being Fated, by Deception/Trickery, or by playing Sure to Pick Up His Trail, which can also be used to defeat Mowgli, who can also be defeated in the usual way via a Vanquish action. However, he must hold off on defeating Mowgli until all Fire tokens are removed from his Realm, and he is guaranteed to have at least one, as Mowgli adds one when he is played. Fire tokens can be removed by playing It's Me, Shere Khan or activating Monkeys.`,
  },
  objective:
    'Defeat Mowgli while there are no Fire Tokens in his Realm.',
  objectivePortrait: `assets/images/cards/shere_khan/Shere_Khan_Objective.png`,
  quote: `"Now, I'm going to close my eyes and count to ten. It makes the chase more interesting ... for me."`,
  villainDeckBack: `assets/images/cards/shere_khan/Shere_Khan_Villain_Back.png`,
  fateDeckBack: `assets/images/cards/shere_khan/Shere_Khan_Fate_Back.png`,
  additionalTokens: true,
  additionalTokensPath: `assets/images/cards/shere_khan/Fire_Token.png`,
};