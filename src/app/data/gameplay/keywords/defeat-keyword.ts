import { KeywordGameplay } from '../../../models/gameplay/keyword-gameplay.model';

export const DEFEAT: KeywordGameplay = {
  id: 'defeat',
  name: 'Sconfiggere',
  description: `Discard a Hero from your Realm. Defeating is mostly done by Vanquishing, but some cards have Abilities that can defeat Heroes.`,
  imagePath: '',
  rules: {
    paragraphs: [
      `"Defeating" a Hero refers to removing that Hero from the top of your Board, either by performing a Vanquish action or by playing a card.`,
    ],
  },
  clarifications: {
    paragraphs: [``],
  },
  cardLists: [
    {
      id: 'defeat-cards',
      listType: 'Carte che possono sconfiggere gli Eroi',
      cardIds: [
        'a-snake-am-i',
        'dragon-form',
        'hypnotize',
        'binding-contract',
        'malice',
        'off-with-your-head',
        'take-a-bite',
      ],
    },
    {
      id: 'reaction-to-defeating-cards',
      listType: 'Carte innescate dalla sconfitta di Eroi',
      cardIds: [
        'arrogance',
        'fury',
        'golden-arrow',
        'illusion-powder',
        'malice',
        'obsession',
        'spinning-wheel',
        'talisman',
        'trident',
      ],
    },
    {
      id: 'fate-cards-on-defeat-abilities',
      listType: 'Carte Fato con abilità innescate dalla loro sconfitta',
      cardIds: [
        'abu',
        'aladdin',
        'cheshire-cat',
        'eudora',
        'little-john',
        'maid-marian',
        'steal-from-the-rich',
        'toby-prince-john',
      ],
    },
  ],
};
