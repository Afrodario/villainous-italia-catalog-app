export interface DeckDefinition {
  id: string;

  name: string;

  cardIds: string[];
}

export interface DeckEntry {
  cardId: string;

  quantity: number;
}

export const JAFAR_VILLAIN_DECK: DeckDefinition = {
  id: 'jafar-villain-deck',

  name: 'Mazzo Cattivo di Jafar',

  cardIds: [
    'magic-lamp',

    'iago',

    'palace-guard',
    'palace-guard',
    'palace-guard',

    'hypnotize',
    'hypnotize',

    'sorcerous-power',
    'sorcerous-power',

    'deception',
    'deception',

    'a-snake-am-i',
    'a-snake-am-i',
  ],
};
