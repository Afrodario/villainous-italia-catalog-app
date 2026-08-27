import { ActionGameplay } from '../../../models/gameplay/action-gameplay.model';

export const MOVE_ITEM_OR_ALLY: ActionGameplay = {
  id: 'move-item-or-ally',
  name: 'Muovere un Oggetto o un Alleato',
  description:
    'Move one Item or one Ally at any unlocked location in your Realm to an adjacent unlocked location. You may not move an Item or Ally into or out of a locked location. You may not move an Item that is attached to an Ally or a Hero. When moving an Ally who has Items attached to them, you move them along with his attached Items.',
  iconPath: 'assets/images/gameplay/Move_Item_or_Ally.png',
  rules: {
    paragraphs: [
      'Move one Item or Ally at any unlocked location in your Realm to an adjacent unlocked location.',
      'You may not move an Item or Ally into or out of a locked location.',
      'You may not move an Item that is attached to an Ally or a Hero.',
      'You may not use this action to move an Ally or Item to the top of the board.',
    ],
  },
  clarifications: {
    paragraphs: [
      'Hades, Maleficent, and Syndrome can use this action in order to move their respective unique card types.',
      'If you move an Ally with attached Items, said Items move with the Ally.',
      'Attached Items may not move independently.',
      'Moving a card refers to taking a card that is in your Realm and moving it to a new location.',
      'If a card’s Ability is triggered when it (or another card) is moved, the Ability is not triggered if it is played, and vice versa.',
      'Moving a Hero with an attached Item counts as moving an Item when a Condition card requires it.',
    ],
  },
  trivia: {
    paragraphs: [
      'Evil Queen and Prince Hans are the only Villains without a Move an Item or Ally action.',
      'Gaston does not have that action in his Realm, but he has a card that lets him perform it.',
    ],
  },
};
