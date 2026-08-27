import { ActionGameplay } from '../../../models/gameplay/action-gameplay.model';

export const GAIN_POWER: ActionGameplay = {
  id: 'gain-power',
  name: 'Ottenere Potere',
  description: 'Take Power tokens from the Cauldron. Power is mostly used to pay the Cost of cards you play.',
  iconPath: 'assets/images/gameplay/Gain_Power.png',
  rules: {
    paragraphs: [
      'Take Power from the Supply equal to the number in the symbol on your location.',
      'Keep your Power next to your board.',
      'Power is the currency of the game. You need Power to play cards and activate Abilities.',
    ],
  },
  clarifications: {
    paragraphs: [
      'Power tokens are considered an infinite resource, if the supply runs out of power tokens, players still gain power, use any available method to keep track of the gained power.',
    ],
  },
  trivia: {
    paragraphs: [
      'Gaston, Madam Mim, and Tamatoa are the only Villains without a Gain 3 Power action.',
      'Cruella De Vil is the only Villain without a Gain 2 Power action.',
      'Oogie Boogie and King Candy are the only Villains without a Gain 1 Power action.',
    ],
  },
};
