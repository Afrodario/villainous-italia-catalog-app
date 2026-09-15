import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const LADY_TREMAINE: Villain = {
  id: 'lady-tremaine',
  name: 'La Matrigna',
  expansionId: EXPANSIONS_IDS.DespicablePlots,
  portrait: 'assets/images-webp/cards/lady_tremaine/Lady_Tremaine.webp',
  mover: 'assets/images-webp/movers/Lady_Tremainemover.webp',
  mechanics: {
    setup: ``,
    rules: [
      `Lady Tremaine cannot perform Vanquish actions, and only has three Effects in her deck that allow her to defeat certain Heroes.`,
      `Instead of removing Heroes, she manages them by Trapping them, indicated by placing one of five Trapped tokens on them.`,
      `Trapped Heroes' Abilities are ignored, though they still cover actions. Lady Tremaine can Trap Heroes with Trapped, Locked Up, Lucifer, and The Key.`,
      `Glass Slippers can only be removed by Lady Tremaine's Cane, while Heroes that block Ally movement or discard Items can either be Trapped, or defeated using You Little Thief! or Midnight.`
    ],
    victory: `Lady Tremaine must marry either Drizella or Anastasia to The Prince. To do this, she must first unlock The Ballroom by playing Invitation from the King. Then she must have either Ball Gown Drizella or Ball Gown Anastasia (which can only be played to replace their informal versions already in play) in The Ballroom with The Prince, and then activate Wedding Bells when no Glass Slippers are present.`,
  },
  objective: 'Marry Drizella or Anastacia to the Prince',
  objectivePortrait: `assets/images-webp/cards/lady_tremaine/Lady_Tremaine_Objective.webp`,
  quote: `"Above all, self-control."`,
  villainDeckBack: `assets/images-webp/cards/lady_tremaine/Lady_Tremaine_Villain_Back.webp`,
  fateDeckBack: `assets/images-webp/cards/lady_tremaine/Lady_Tremaine_Fate_Back.webp`,
  additionalTokens: true,
  additionalTokensPath: `assets/images-webp/cards/lady_tremaine/Trappedtokens.webp`,
  speedLevel: 'orange'
};