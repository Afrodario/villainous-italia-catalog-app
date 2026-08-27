import { ActionGameplay } from '../../../models/gameplay/action-gameplay.model';

export const MOVE_A_HERO: ActionGameplay = {
  id: 'move-a-hero',
  name: 'Muovere un Eroe',
  description:
    'Move one Hero at any unlocked location in your Realm to an adjacent unlocked location. You may not move a Hero into or out of a locked location. When moving a Hero who has Items attached to them, you move them along with his attached items.',
  iconPath: 'assets/images/gameplay/Move_a_Hero.png',
  rules: {
    paragraphs: [
      'Move one Hero at any unlocked location in your Realm to an adjacent unlocked location.',
      'You may not move a Hero into or out of a locked location.',
      'You may not use this action to move a Hero to the bottom of the board.',
    ],
  },
  clarifications: {
    paragraphs: [
      'If you move a Hero with attached Items, those Items are moved with the Hero.',
      'Attached Items may not move independently.',
      'Unattached Fate Items at the top of the board cannot be moved with this action.',
      'Moving a card refers to taking a card that is in your Realm and moving it to a new location.',
      'If a card’s Ability is triggered when it (or another card) is moved, the Ability is not triggered if it is played, and vice versa.',
    ],
  },
  trivia: {
    paragraphs: [
      'Move a Hero is the rarest non-unique action, only appearing in the Realms of Captain Hook, Evil Queen, Madam Mim, Prince Hans, and Ursula.',
      'Ernesto de la Cruz and Sanderson Sisters don’t have that action in their Realms, but they each have cards that let them perform it.',
    ],
  },
};
