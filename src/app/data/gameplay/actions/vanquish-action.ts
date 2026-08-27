import { ActionGameplay } from '../../../models/gameplay/action-gameplay.model';

export const VANQUISH: ActionGameplay = {
  id: 'vanquish',
  name: 'Scontro',
  description:
    'Defeat one Hero at any unlocked location in your Realm by using one or more Allies that are already at the same location as the Hero. Each Ally and Hero has a Strength (lower left corner) which may be modified by other cards in the Realm. The Ally must have a Strength equal to or higher than the Hero’s Strength. Multiple Allies may be used by adding their Strengths together. To Vanquish the Hero, discard the Ally (or Allies) to your Villain discard pile. Discard the defeated Hero to your Fate discard pile.',
  iconPath: 'assets/images/gameplay/Vanquish.png',
  rules: {
    paragraphs: [
      'Defeat one Hero at any location in your Realm by using one or more Allies that are already at the same location as the Hero.',
      'Each Ally and Hero has a Strength which may be modified by other cards in the Realm.',
      'Multiple Allies may be used by adding their Strengths together.',
      'Discard the Hero to the Fate discard pile and the involved Allies to the Villain Discard pile.',
    ],
  },
  clarifications: {
    paragraphs: [
      'If multiple Heroes are at a location, you may choose which Hero to defeat.',
      "If a Hero's Strength is reduced to 0 by other card Abilities you must still use a Vanquish Action or card Ability to defeat the Hero.",
      "If you use a Vanquish Action to defeat a Hero with 0 Strength, no Allies need to be discarded. You can defeat the Hero even if you have no Allies at the Hero's location.",
      'You can use more Allies than necessary if you want to, even if the Hero is at 0 Strength.',
    ],
  },
};
