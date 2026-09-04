import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const MADAM_MIM: Villain = {
  id: 'madam-mim',
  name: 'Maga Magò',
  expansionId: EXPANSIONS_IDS.BiggerAndBadder,
  portrait: 'assets/images/cards/madam_mim/Madam_Mim.png',
  mover: 'assets/images/movers/Madammimmover.png',
  mechanics: {
    setup: `Madam Mim has two separate Fate decks with different card backs: a traditional one that functions as expected, though with only eight cards, and a deck solely for Merlin's Transformations. Madam Mim starts with a random Merlin Transformation on her board at Dueling Ground, and whenever she defeats one, she plays another one to Dueling Ground.`,
    rules: [
      `Madam Mim has a unique card type, Transformation. Transformations in her Villain deck function identically to Allies (except all of them add an extra Vanquish action to their location), and Transformations from her Fate deck function identically to Heroes. This functionality includes triggering opponents' Conditions.`,
      `In addition, each "Ally" Transformation can only be used to Vanquish a specific "Hero" Transformation.`,
      `When a player performs a Fate action against Madam Mim, they do so from her traditional Fate deck.`,
    ],
    victory: `Madam Mim must defeat all of Merlin's Transformations. She can do so by either Vanquishing them with their corresponding Mim Transformations in her Villain deck, or by playing I'll Make the Rules.`,
    victoryList: {
      header: `The matchups for the Transformations are:`,
      elements: [
        `Chicken Mim beats Caterpillar Merlin`,
        `Crocodile Mim beats Turtle Merlin`,
        `Elephant Mim beats Walrus Merlin`,
        `Fox Mim beats Rabbit Merlin`,
        `Purple Dragon Mim beats Goat Merlin`,
        `Rattlesnake Mim or Tiger Mim beats Mouse Merlin`,
        `Rhinoceros Mim beats Crab Merlin`,
      ],
    },
  },
  objective: "Defeat all of Merlin's Transformations.",
  objectivePortrait: `assets/images/cards/madam_mim/Madam_Mim_Objective.jpg`,
  quote: `"Want to fight? Want to have a Wizard's Duel?!"`,
  villainDeckBack: `assets/images/cards/madam_mim/Madam_Mim_Villain_Back.png`,
  fateDeckBack: `assets/images/cards/madam_mim/Madam_Mim_Fate_Back.png`,
  additionalDeck: true,
  additionalDeckBack: `assets/images/cards/madam_mim/Merlin_Back.png`,
  additionalDeckName: `Trasformazioni di Merlino`,
};
