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
    paragraphs: [
      ``,
    ],
  },
  cardLists: [
    {
      listType: 'Carte che possono sconfiggere gli Eroi',
      cardIds: [
        'a-snake-am-i',
        'dragon-form',
        'hypnotize'
      ],
      //TODO inserire gli id delle carte interessate OPPURE inserire in ogni card una proprietà che specifica il tipo di keyword
    },
  ],
};
