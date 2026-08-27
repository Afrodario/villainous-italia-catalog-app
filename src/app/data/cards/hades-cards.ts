import { CARD_TYPES } from '../../models/actions-types.model';
import { CardDefinition } from '../../models/card-definition.model';
import {
  EXPANSIONS_IDS,
  VILLAINS_IDS,
} from '../../models/villains-expansions-ids.model';

export const HADES_CARDS: CardDefinition[] = [
  {
    id: 'get-ready-to-rumble',
    villainId: VILLAINS_IDS.Hades,
    expansionId: EXPANSIONS_IDS.WickedToTheCore,
    name: 'Prepariamoci al Primo Round!',
    image: 'assets/images/cards/hades/Get_Ready_to_Rumble.png',
    type: CARD_TYPES.Effect,
    cost: '?',
    quantity: 3,
    //strength: 2,
    description: 'Description.',
    strategy: {
      paragraphs: ['Paragrafo 1', 'Paragrafo 2 ’', 'Paragrafo 3'],
      warning: 'Warning',
    },
    isFateCard: false,
  },
  {
    id: 'mortality-potion',
    villainId: VILLAINS_IDS.Hades,
    expansionId: EXPANSIONS_IDS.WickedToTheCore,
    name: 'Pozione della Mortalità',
    image: 'assets/images/cards/hades/Mortality_Potion.png',
    type: CARD_TYPES.Item,
    cost: 2,
    quantity: 3,
    //strength: 2,
    description: 'Description.',
    strategy: {
      paragraphs: ['Paragrafo 1', 'Paragrafo 2 ’', 'Paragrafo 3'],
      warning: 'Warning',
    },
    isFateCard: false,
  },
  {
    id: 'planets-align',
    villainId: VILLAINS_IDS.Hades,
    expansionId: EXPANSIONS_IDS.WickedToTheCore,
    name: 'I Pianeti si Allineano',
    image: 'assets/images/cards/hades/Planets_Align.png',
    type: CARD_TYPES.Effect,
    cost: '?',
    quantity: 3,
    //strength: 2,
    description: 'Description.',
    strategy: {
      paragraphs: ['Paragrafo 1', 'Paragrafo 2 ’', 'Paragrafo 3'],
      warning: 'Warning',
    },
    isFateCard: false,
  },
]