import { ActionGameplay } from '../../../models/gameplay/action-gameplay.model';

export const FATE: ActionGameplay = {
  id: 'fate',
  name: 'Fato',
  description:
    'Choose an opponent to target and reveal two cards from the top of their Fate deck. Play one card and discard the other face up to that opponent’s Fate discard pile. You decide how to use the Fate card’s Ability against your opponent. By taking a Fate action, you can disrupt an opponent’s progress. A Hero may be played to any location in that opponent’s Realm, as long as it is not locked. Play the Hero to the top of their Board, covering the top of the location.',
  iconPath: 'assets/images/gameplay/Fate.png',
  rules: {
    paragraphs: [
      'Play one card and discard the other face up to that opponent’s Fate discard pile.',
      'You decide how to use the Fate card’s Ability against your opponent.',
      'By taking a Fate action, you can disrupt an opponent’s progress.',
      'A Hero may be played to any unlocked location in that opponent’s Realm.',
      'Play the Hero to the top of their Board, covering the top of the location.',
      'In a 5- or 6-Player game*: when you are the target of a Fate action, take the Fate Token from the last player who was targeted. As long as you have the Fate Token, you may not be targeted.',
      'Playing a card refers to adding a card to a Villain’s Realm, either from your hand or from a Villain or Fate deck.',
      'Moving a card refers to taking a card that is in your Realm and moving it to a new location.',
      'Revealing a card means to turn the card over so that all players can see it.',
      'If a revealed Fate card cannot be played, the card may not be played and must be discarded. You don’t get to draw more cards.',
      'If both revealed Fate cards cannot be played, you must discard both cards without effect, you don’t get to draw more cards.',
      'If a card’s Ability is triggered when it (or another card) is played, the Ability is not triggered if it is moved.',
      'If a card’s Ability is triggered when it (or another card) is moved, the Ability is not triggered if it is played.',
      'If a card instructs you to find a Specific Hero and play them, you must take the specified Hero from wherever they are and play them.',
      'When finding a Hero, first check to see if they are already at a location in the Realm. If so, remove them from their location and then play them to the specified location. If the Hero is not already in the Realm, search the Fate discard pile and play them, if they are not in the Fate discard pile, search the Fate deck, play them, and re-shuffle the Fate deck.',
    ],
  },
  clarifications: {
    paragraphs: [
      'When revealing cards, both cards are considered to be revealed at the same time.',
      'After revealing both cards, choose one card to play and discard the other card, then play the chosen card. Thus, if you pick a card that cares about the Fate discard pile (e.g. Return to Form), it can make use of the other card revealed during the action.',
      'If neither card can be played, fate favors your opponent and you discard both cards.',
      'If only one of those cards can be played, discard the card that cannot be played and play the only eligible card.',
    ],
  },
};
