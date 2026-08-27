import { ActionGameplay } from '../../../models/gameplay/action-gameplay.model';

export const DISCARD: ActionGameplay = {
  id: 'discard',
  name: 'Scartare',
  description:
    'Discard as many cards as you wish from your hand. Cards should be discarded face up to your Villain discard pile. Getting rid of unwanted cards will give you new options on your next turn. When discarding, do not immediately draw new cards. You must wait until the end of your turn to draw back to four cards.',
  iconPath: 'assets/images/gameplay/Discard.png',
  rules: {
    paragraphs: [
      'Take as many cards as you wish from your hand and place them in the Villain Discard pile.',
      'Cards must always be placed face up on the Villain Discard Pile.',
      "You don't draw cards as part of the Discard Cards Action.",
    ],
  },
  clarifications: {
    paragraphs: [
      'Cards are only drawn at the end of your turn. You do not immediately refill your hand after taking a Discard Cards action.',
    ],
  },
};
