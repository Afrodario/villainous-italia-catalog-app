import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const TAMATOA: Villain = {
  id: 'tamatoa',
  name: 'Tamatoa',
  expansionId: EXPANSIONS_IDS.TreacherousTides,
  portrait: 'assets/images/cards/tamatoa/Tamatoa.png',
  mover: 'assets/images/movers/Tamatoamover.png',
  mechanics: {
    setup: ``,
    rules: [
      `Tamatoa has a third deck of cards called the Maui deck, whose cards can help him, hinder him, or both.`,
      `While Maui is in play, each turn Tamatoa plays the top card of his Maui deck. Tamatoa can also play cards from the deck deliberately with Not Exactly Maui Time.`,
      `Rather than directly contributing to his Objective, the Maui deck serves as an extra set of tools and obstacles to add flavor to his gameplay.`,
    ],
    victory: `Tamatoa must get Maui's Hook and the Heart of Te Fiti to his lair. He plays the Hook from his Villain deck, while the Heart must be taken from his Fate deck, and he can find it using Crustacean With the Power of Creation. Moana and Maui can steal the Items from him, and he will need to defeat them to reclaim them.`,
  },
  objective: "Have the Heart of Te Fiti and Maui's Hook at Tamatoa's Lair.",
  objectivePortrait: `assets/images/cards/tamatoa/Tamatoa_Objective.png`,
  quote: `"What have we here? It's a sparkly, shiny... Wait a minute. Ugh! It's a human!"`,
  villainDeckBack: `assets/images/cards/tamatoa/Tamatoa_Villain_Back.png`,
  fateDeckBack: `assets/images/cards/tamatoa/Tamatoa_Fate_Back.png`,
  additionalDeck: true,
  additionalDeckBack: `assets/images/cards/tamatoa/Tamatoa_Maui_Back.png`,
  additionalDeckName: `Maui`,
  speedLevel: 'yellow'
};
