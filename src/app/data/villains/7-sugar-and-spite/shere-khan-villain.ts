import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const SHERE_KHAN: Villain = {
  id: 'shere-khan',
  name: 'Shere Khan',
  expansionId: EXPANSIONS_IDS.SugarAndSpite,
  portrait: 'assets/images-webp/cards/shere_khan/Shere_Khan.webp',
  mover: 'assets/images-webp/movers/Sherekhanmover.webp',
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
  objectivePortrait: `assets/images-webp/cards/shere_khan/Shere_Khan_Objective.webp`,
  quote: `"Now, I'm going to close my eyes and count to ten. It makes the chase more interesting ... for me."`,
  villainDeckBack: `assets/images-webp/cards/shere_khan/Shere_Khan_Villain_Back.webp`,
  fateDeckBack: `assets/images-webp/cards/shere_khan/Shere_Khan_Fate_Back.webp`,
  additionalTokens: true,
  additionalTokensPath: `assets/images-webp/cards/shere_khan/Fire_Token.webp`,
  speedLevel: 'green'
};