import { ActionGameplay } from '../../../models/gameplay/action-gameplay.model';

export const PLAY_A_CARD: ActionGameplay = {
  id: 'play-a-card',
  name: 'Giocare una Carta',
  description:
    'play one card from your hand, paying its Cost, and doing what it says. If it is an Ally or Item, you play it to a location on your board; otherwise, you discard it.',
  iconPath: 'assets/images/gameplay/Play_a_Card.png',
  rules: {
    paragraphs: [
      'You may play only one card for each Play a Card action icon.',
      'Most cards have a Cost that is shown in the upper left corner. When you play a card, you must pay its Cost by returning that many Power to the Cauldron. If you do not have enough Power to pay a card’s Cost, you may not play the card.',
      'An Item or Ally may be played to any unlocked location in your Realm. Play the card to the bottom of your Board, below the location.',
      "King Candy's Start/Finish action functions as a Play a Card action.",
    ],
  },
  clarifications: {
    paragraphs: [
      'If the Ability on a card violates a rule in the rulebook, the card takes precedence.',
      'If a Villain Effect text does not read "you may" the action is required in order to play the card, the card cannot be played if all the actions in the text cannot be performed.',
      'When a card being played triggers something in play, you first finish fulfilling the card being played before fulfilling the card that reacts to it. For example: If you play Little John against Prince John at a location with a Warrant, and Prince John only has one power, The effect of Little John resolves before the Warrant, Little John steals that 1 Power, then the Warrant gives 2 power to Prince John.',
      "This shouldn't be confused with ongoing effects that affect the state of the game. For Example: Robin Hood's ability isn't triggered, it's just an ongoing effect reducing all power gains via card effect or action.",
    ],
  },
};
