import { KeywordGameplay } from '../../../models/gameplay/keyword-gameplay.model';

export const DISCARD_KW: KeywordGameplay = {
  id: 'discard',
  name: 'Scartare',
  description: `When instructed to discard one or more cards, you put them in the discard pile of the deck they came from.`,
  imagePath: '',
  rules: {
    paragraphs: [
      `The most common way to discard cards is via the Discard Cards action, but you also discard the Hero and all Allies involved in a Vanquish action, the unchosen card from a Fate action, and a Condition or Effect after it is played. Cards may also instruct you to discard cards as part of their Ability.`,
    ],
  },
  clarifications: {
    paragraphs: [
      `Discard piles are public information, and other players may view the cards you're discarding.`,
    ],
  },
  cardLists: [
    {
      id: 'deck-discarders',
      listType: 'Carte che scartano dal Mazzo',
      listTypeDescription: [
        'These are cards that discard a set number of cards from a deck or a pile, usually from the top or randomly, but sometimes cards that the player may choose.',
        'Some directly discard these cards, while others look at or reveal them first.',
        "Though The Cards Will Tell does not mention discarding, Dr. Facilier's Villain guide says that aside from Rule New Orleans, resolved cards are discarded when revealed by it.",
        "Almost There and Charlotte take cards from Dr. Facilier's Villain deck and add them to his Fortune pile, and Big Daddy La Bouff takes a card from his Fortune pile and puts it on top of his deck, but neither of these are discarding.",
      ],
      cardIds: [
        'be-prepared',
        'crown',
        'give-them-a-scare',
        'illusion-powder',
        'injustice',
        'long-live-the-king',
        'magic-tomes',
        'sleight-of-hand',
        'smash-it-with-a-hammer',
        'take-the-shot',
        'the-cards-will-tell',
        'vanity',
      ],
    },
  ],
};
