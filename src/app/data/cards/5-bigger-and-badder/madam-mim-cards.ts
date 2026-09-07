import { CARD_TYPES } from '../../../models/actions-types.model';
import { CardDefinition } from '../../../models/card-definition.model';
import {
  EXPANSIONS_IDS,
  VILLAINS_IDS,
} from '../../../models/villains-expansions-ids.model';

export const MADAM_MIM_CARDS: CardDefinition[] = [
  //TRASFORMAZIONI DI MERLINO
  {
    id: 'caterpillar-merlin',
    villainId: VILLAINS_IDS.MadamMim,
    expansionId: EXPANSIONS_IDS.BiggerAndBadder,
    name: 'Melino Bruco',
    image: 'assets/images/cards/madam_mim/Caterpillar_Merlin.png',
    type: CARD_TYPES.TransformationMerlin,
    strength: 1,
    quantity: 1,
    description: 'Description.',
    strategy: {
      paragraphs: ['Paragrafo 1', 'Paragrafo 2 ’', 'Paragrafo 3'],
      warning: 'Warning',
    },
    isFateCard: false,
    deck: 'additional',
  },
];
