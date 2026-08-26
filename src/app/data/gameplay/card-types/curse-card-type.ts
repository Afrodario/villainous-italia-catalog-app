import { CARD_TYPES } from '../../../models/actions-types.model';
import { CardTypeGameplay } from '../../../models/gameplay/card-type-gameplay.model';

export const CURSE: CardTypeGameplay = {
  id: CARD_TYPES.Curse,
  name: 'Maledizione',
  description: `It is unique to Maleficent, and only appears in her Villain deck; it is denoted with a purple font. Curses are played to the bottom of Maleficent's board, in a particular location. Each Curse gives an effect to that location while it's there, and also has a condition under which it is discarded. If Maleficent starts her turn with a Curse at each of her locations, she wins the game. The three Curses are Forest of Thorns, Green Fire, and Dreamless Sleep.`,
  imagePath: '',
  isCommon: false,
  rules: {
    paragraphs: [
      `Curse is a card type unique to Maleficent.`,
      `Curses are played to locations, and each one has an Ability that affects Heroes at that location.`,
      `However, each Curse also has an action that will cause it to be discarded, so you’ll need to be strategic on when and where to play each Curse.`,
      `Multiple Curses may be played to the same location, and a Curse may be moved using a Move an Item or Ally action.`,
    ],
  },
  clarifications: {
    paragraphs: [
      `Curses can be played to any location in the Realm, not just the one where Maleficent is standing.`,
    ],
  },
};
