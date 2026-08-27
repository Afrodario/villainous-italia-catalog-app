import { ActionGameplay } from '../../../models/gameplay/action-gameplay.model';

export const BREW_POISON: ActionGameplay = {
  id: 'brew-poison',
  name: 'Preparare Veleno',
  description:
    'Unique to Evil Queen. Convert any amount of her Power into Poison, a resource she uses to defeat Heroes via Take a Bite.',
  iconPath: 'assets/images/gameplay/Brew_Poison.png',
  rules: {
    paragraphs: [
      'The Brew Poison action is unique to Evil Queen and is found at the Laboratory location.',
      'Each time you perform this action, you may convert as many of your Power as you wish into Poison.',
      'Move the Power onto your Board to indicate that it is now Poison.',
      'Note: Poison is no longer considered Power. Poison may not be used to pay a card or Ability’s Cost. Having Poison or adding Power from the Supply to your Poison do not trigger Conditions that require having Power or gaining Power.',
    ],
  },
};
