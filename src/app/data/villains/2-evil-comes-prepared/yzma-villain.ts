import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const YZMA: Villain = {
  id: 'yzma',
  name: 'Yzma',
  expansionId: EXPANSIONS_IDS.EvilComesPrepared,
  portrait: 'assets/images/cards/yzma/Yzma.png',
  mover: 'assets/images/movers/Yzmamover.png',
  mechanics: {
    setup: `Yzma has a unique setup for her Fate deck: at the start of the game, it is dealt into four different Fate decks, one for each location, placed above its corresponding location (with room to spare to place Heroes).`,
    rules: [
      `When another player takes a Fate action against her, they choose one of her four Fate decks, look at all of the cards in it, then secretly choose one of them to play, shuffle and return the rest, then finally play the chosen card to the location under the Fate deck it came from.`,
      `If none of the cards can be played, all of them are returned.`,
      `If a location's Fate deck is empty, that location cannot be chosen for a Fate action. `,
      `Yzma still has a single Fate discard pile; if a Fate action is taken against her and all of her Fate decks are empty, her Fate discard pile is shuffled and dealt into four Fate decks again.`,
    ],
    victory: ``,
  },
  objective: 'Defeat Kuzco using Kronk.',
  objectivePortrait: `assets/images/cards/yzma/Yzma_Objective.jpg`,
  quote: `"Our moment of triumph approaches!"`,
  villainDeckBack: `assets/images/cards/yzma/Yzma_Villain_Back.png`,
  fateDeckBack: `assets/images/cards/yzma/Yzma_Fate_Back.png`,
};
