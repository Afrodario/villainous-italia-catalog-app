import { ActionGameplay } from '../../../models/gameplay/action-gameplay.model';

export const ACTIVATE: ActionGameplay = {
  id: 'activate',
  name: 'Attivare',
  description:
    'Perform an Activatable Ability of an Ally or Item in your Realm. Doing this does not discard that Ally or Item.',
  iconPath: 'assets/images/gameplay/Activate.png',
  rules: {
    paragraphs: [
      'Choose one Item or Ally in your Realm with the Activate symbol.',
      "Pay the card's Activation Cost, if any.",
      "Perform the card's Activated Ability.",
      "Each time you wish to use the card's Ability, you must perform the Activate action and pay the Activation Cost, if any.",
    ],
  },
  clarifications: {
    paragraphs: [
      'The card is not discarded after the Activated Ability is performed.',
      "There is no limit to the number of times you may activate a card's Ability, provided you use an Activate action and pay the card's Activation Cost, if any, each time.",
    ],
  },
};
