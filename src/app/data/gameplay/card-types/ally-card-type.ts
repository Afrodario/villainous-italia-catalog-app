import { CARD_TYPES } from '../../../models/actions-types.model';
import { CardTypeGameplay } from '../../../models/gameplay/card-type-gameplay.model';

export const ALLY: CardTypeGameplay = {
  id: CARD_TYPES.Ally,
  name: 'Alleato',
  description: `It only appears in Villain decks, and is denoted with a red font. Allies are played to the bottom of a Villain's board, in a particular location. All Allies have a Strength, which is used to determine if they can Vanquish a Hero (even if they belong to a Villain without Vanquish actions, like Ursula or the Evil Queen).`,
  imagePath: '',
  isCommon: true,
  rules: {
    paragraphs: [
      `Ally cards appear only in the Villain deck and represent your Villain’s henchmen, helpers, and pets.`,
      `To play an Ally, pay its Cost (shown in the upper left corner) and place the card below any unlocked location in your Realm.`,
      `Once Allies have been played to a location, you may use them to defeat Heroes at the same location by performing the Vanquish action.`,
      `Each Ally has a Strength (shown in the lower left corner), which may be modified by other cards in the Realm.`,
      `Additionally, most Allies have an Ability that affects other cards or actions.`,
      `Once an Ally is in your Realm, you’ll need to decide whether to use it to defeat a Hero or keep it in your Realm for its Ability.`,
    ],
  },
  faq: {
    paragraphs: [
      `Whenever referring to an Ally's Strength, always consider all other card Abilities that are in effect in the Realm. For Example, if an Ally has a Strength of 5 printed on their card, but another card in the Realm gives them -1 Strength, then that Ally's Strength is considered to be 4 for all purposes.`,
    ],
  },
  clarifications: {
    paragraphs: [
      `Unless its Ability specifically forbids it, an Ally can always be played, even if its on-play Ability cannot be fully resolved.`,
    ],
  },
};
