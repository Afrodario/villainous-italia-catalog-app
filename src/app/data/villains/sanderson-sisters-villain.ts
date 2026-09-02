import { Villain } from "../../models/villain.model";
import { EXPANSIONS_IDS } from "../../models/villains-expansions-ids.model";


export const SANDERSON_SISTERS: Villain = {
  id: 'sanderson-sisters',
  name: 'Le Sorelle Sanderson',
  expansionId: EXPANSIONS_IDS.ComeWeFly,
  portrait: 'assets/images/cards/sanderson_sisters/Sanderson_Sisters.png',
  mover: '',
  mechanics: {
    setup: ``,

    rules: [
      ``,

      ``,
    ],

    victory: ``,
  },
  objective: 'Defeat a Hero with the Life Potion',
  objectivePortrait: ``,
  quote: `"Amok! Amok! Amok! Amok! Amok!"`,
  villainDeckBack: ``,
  fateDeckBack: ``,
  additionalTokens: true,
  additionalTokensPath: ``,
  additionalSetIds: [EXPANSIONS_IDS.DarknessBrewing]
};