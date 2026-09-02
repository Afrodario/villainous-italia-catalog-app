import { CARD_TYPES } from "../../../models/actions-types.model";
import { CardDefinition } from "../../../models/card-definition.model";
import { EXPANSIONS_IDS, VILLAINS_IDS } from "../../../models/villains-expansions-ids.model";

export const CAPTAIN_HOOK_CARDS: CardDefinition[] = [
  {
    id: 'boarding-party',
    villainId: VILLAINS_IDS.CaptainHook,
    expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
    name: 'Banda d’Arrembaggio',
    image: 'assets/images/cards/captain_hook/Boarding_Party.png',
    type: CARD_TYPES.Ally,
    cost: 2,
    quantity: 3,
    strength: 2,
    description:
      'Description.',
    strategy: {
      paragraphs: [
        'Paragrafo 1',
        'Paragrafo 2 ’',
        'Paragrafo 3',
      ],
      warning:
        'Warning',
    },
    isFateCard: false,
  },
  {
    id: 'give-them-a-scare',
    villainId: VILLAINS_IDS.CaptainHook,
    expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
    name: 'Spaventare',
    image: 'assets/images/cards/captain_hook/Give_Them_a_Scare.png',
    type: 'effect',
    cost: 1,
    quantity: 3,
    description:
      'Description.',
    strategy: {
      paragraphs: [
        'Paragrafo 1',
        'Paragrafo 2 ’',
        'Paragrafo 3',
      ],
      warning:
        'Warning',
    },
    isFateCard: false,
  },
  {
    id: 'swashbuckler',
    villainId: VILLAINS_IDS.CaptainHook,
    expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
    name: 'Smargiasso',
    image: 'assets/images/cards/captain_hook/Swashbuckler.png',
    type: CARD_TYPES.Ally,
    cost: 1,
    quantity: 3,
    strength: 2,
    description:
      'Description.',
    strategy: {
      paragraphs: [
        'Paragrafo 1',
        'Paragrafo 2 ’',
        'Paragrafo 3',
      ],
      warning:
        'Warning',
    },
    isFateCard: false,
  },
  {
    id: 'worthy_opponent',
    villainId: VILLAINS_IDS.CaptainHook,
    expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
    name: 'Degno Avversario',
    image: 'assets/images/cards/captain_hook/Worthy_Opponent.png',
    type: CARD_TYPES.Ally,
    cost: 0,
    quantity: 3,
    description:
      'Description.',
    strategy: {
      paragraphs: [
        'Paragrafo 1',
        'Paragrafo 2 ’',
        'Paragrafo 3',
      ],
      warning:
        'Warning',
    },
    isFateCard: false,
  },
  {
    id: 'aye-aye-sir',
    villainId: VILLAINS_IDS.CaptainHook,
    expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
    name: 'Signore, signorsì, signore!',
    image: 'assets/images/cards/captain_hook/Aye_Aye_Sir.png',
    type: 'effect',
    cost: 1,
    quantity: 2,
    description:
      'Description.',
    strategy: {
      paragraphs: [
        'Paragrafo 1',
        'Paragrafo 2 ’',
        'Paragrafo 3',
      ],
      warning:
        'Warning',
    },
    isFateCard: false,
  },
  {
    id: 'cannon',
    villainId: VILLAINS_IDS.CaptainHook,
    expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
    name: 'Cannone',
    image: 'assets/images/cards/captain_hook/Cannon.png',
    type: CARD_TYPES.Item,
    cost: 2,
    quantity: 2,
    description:
      'Description.',
    strategy: {
      paragraphs: [
        'Paragrafo 1',
        'Paragrafo 2 ’',
        'Paragrafo 3',
      ],
      warning:
        'Warning',
    },
    isFateCard: false,
  },
  {
    id: 'cunning',
    villainId: VILLAINS_IDS.CaptainHook,
    expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
    name: 'Astuzia',
    image: 'assets/images/cards/captain_hook/Cunning.png',
    type: CARD_TYPES.Condition,
    quantity: 2,
    description:
      'Description.',
    strategy: {
      paragraphs: [
        'Paragrafo 1',
        'Paragrafo 2 ’',
        'Paragrafo 3',
      ],
      warning:
        'Warning',
    },
    isFateCard: false,
  },
  {
    id: 'cutlass',
    villainId: VILLAINS_IDS.CaptainHook,
    expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
    name: 'Sciabola',
    image: 'assets/images/cards/captain_hook/Cutlass.png',
    type: CARD_TYPES.Item,
    cost: 1,
    quantity: 2,
    strengthModifier: 2,
    description:
      'Description.',
    strategy: {
      paragraphs: [
        'Paragrafo 1',
        'Paragrafo 2 ’',
        'Paragrafo 3',
      ],
      warning:
        'Warning',
    },
    isFateCard: false,
  },
  {
    id: 'hooks-case',
    villainId: VILLAINS_IDS.CaptainHook,
    expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
    name: 'Uncino da Cerimonia',
    image: "assets/images/cards/captain_hook/Hook's_Case.png",
    type: CARD_TYPES.Item,
    cost: 2,
    quantity: 2,
    description:
      'Description.',
    strategy: {
      paragraphs: [
        'Paragrafo 1',
        'Paragrafo 2 ’',
        'Paragrafo 3',
      ],
      warning:
        'Warning',
    },
    isFateCard: false,
  },
  {
    id: 'obsession',
    villainId: VILLAINS_IDS.CaptainHook,
    expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
    name: 'Ossessione',
    image: 'assets/images/cards/captain_hook/Obsession.png',
    type: CARD_TYPES.Condition,
    quantity: 2,
    description:
      'Description.',
    strategy: {
      paragraphs: [
        'Paragrafo 1',
        'Paragrafo 2 ’',
        'Paragrafo 3',
      ],
      warning:
        'Warning',
    },
    isFateCard: false,
  },
  {
    id: 'pirate-brute',
    villainId: VILLAINS_IDS.CaptainHook,
    expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
    name: 'Bruto Pirata',
    image: 'assets/images/cards/captain_hook/Pirate_Brute.png',
    type: CARD_TYPES.Ally,
    cost: 3,
    quantity: 2,
    strength: 4,
    description:
      'Description.',
    strategy: {
      paragraphs: [
        'Paragrafo 1',
        'Paragrafo 2 ’',
        'Paragrafo 3',
      ],
      warning:
        'Warning',
    },
    isFateCard: false,
  },
  {
    id: 'ingenious-device',
    villainId: VILLAINS_IDS.CaptainHook,
    expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
    name: 'Dispositivo Ingegnoso',
    image: 'assets/images/cards/captain_hook/Ingenious_Device.png',
    type: CARD_TYPES.Item,
    cost: 2,
    quantity: 1,
    description:
      'Description.',
    strategy: {
      paragraphs: [
        'Paragrafo 1',
        'Paragrafo 2 ’',
        'Paragrafo 3',
      ],
      warning:
        'Warning',
    },
    isFateCard: false,
  },
  {
    id: 'mr-starkey',
    villainId: VILLAINS_IDS.CaptainHook,
    expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
    name: 'Mr. Starkey',
    image: 'assets/images/cards/captain_hook/Mr_Starkey.png',
    type: CARD_TYPES.Ally,
    cost: 2,
    quantity: 1,
    strength: 2,
    description:
      'Description.',
    strategy: {
      paragraphs: [
        'Paragrafo 1',
        'Paragrafo 2 ’',
        'Paragrafo 3',
      ],
      warning:
        'Warning',
    },
    isFateCard: false,
  },
  {
    id: 'never-land-map',
    villainId: VILLAINS_IDS.CaptainHook,
    expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
    name: 'Mappa dell’Isola Che non c’è',
    image: 'assets/images/cards/captain_hook/Never_Land_Map.png',
    type: CARD_TYPES.Item,
    cost: 4,
    quantity: 1,
    description:
      'Description.',
    strategy: {
      paragraphs: [
        'Paragrafo 1',
        'Paragrafo 2 ’',
        'Paragrafo 3',
      ],
      warning:
        'Warning',
    },
    isFateCard: false,
  },
  {
    id: 'smee',
    villainId: VILLAINS_IDS.CaptainHook,
    expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
    name: 'Spugna',
    image: 'assets/images/cards/captain_hook/Smee.png',
    type: CARD_TYPES.Ally,
    cost: 2,
    quantity: 1,
    strength: 2,
    description:
      'Description.',
    strategy: {
      paragraphs: [
        'Paragrafo 1',
        'Paragrafo 2 ’',
        'Paragrafo 3',
      ],
      warning:
        'Warning',
    },
    isFateCard: false,
  },
//MAZZO FATO
  {
    id: 'pixie-dust',
    villainId: VILLAINS_IDS.CaptainHook,
    expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
    name: 'Polvere di Fata',
    image: 'assets/images/cards/captain_hook/Pixie_Dust.png',
    type: CARD_TYPES.Item,
    quantity: 3,
    strengthModifier: 2,
    description:
      'Description.',
    strategy: {
      paragraphs: [
        'Paragrafo 1',
        'Paragrafo 2 ’',
        'Paragrafo 3',
      ],
      warning:
        'Warning',
    },
    isFateCard: true,
  },
  {
    id: 'lost-boys',
    villainId: VILLAINS_IDS.CaptainHook,
    expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
    name: 'Bimbi Sperduti',
    image: 'assets/images/cards/captain_hook/Lost_Boys.png',
    type: CARD_TYPES.Ally,
    quantity: 2,
    strength: 4,
    description:
      'Description.',
    strategy: {
      paragraphs: [
        'Paragrafo 1',
        'Paragrafo 2 ’',
        'Paragrafo 3',
      ],
      warning:
        'Warning',
    },
    isFateCard: true,
  },
  {
    id: 'splitting-headache',
    villainId: VILLAINS_IDS.CaptainHook,
    expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
    name: 'Terribile Mal di Testa',
    image: 'assets/images/cards/captain_hook/Splitting_Headache.png',
    type: 'effect',
    quantity: 2,
    description:
      'Description.',
    strategy: {
      paragraphs: [
        'Paragrafo 1',
        'Paragrafo 2 ’',
        'Paragrafo 3',
      ],
      warning:
        'Warning',
    },
    isFateCard: true,
  },
  {
    id: 'taunt',
    villainId: VILLAINS_IDS.CaptainHook,
    expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
    name: 'Schernire',
    image: 'assets/images/cards/captain_hook/Taunt.png',
    type: CARD_TYPES.Item,
    quantity: 2,
    description:
      'Description.',
    strategy: {
      paragraphs: [
        'Paragrafo 1',
        'Paragrafo 2 ’',
        'Paragrafo 3',
      ],
      warning:
        'Warning',
    },
    isFateCard: true,
  },
  {
    id: 'john',
    villainId: VILLAINS_IDS.CaptainHook,
    expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
    name: 'Gianni',
    image: 'assets/images/cards/captain_hook/John.png',
    type: CARD_TYPES.Hero,
    quantity: 1,
    strength: 2,
    description:
      'Description.',
    strategy: {
      paragraphs: [
        'Paragrafo 1',
        'Paragrafo 2 ’',
        'Paragrafo 3',
      ],
      warning:
        'Warning',
    },
    isFateCard: true,
  },
  {
    id: 'michael',
    villainId: VILLAINS_IDS.CaptainHook,
    expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
    name: 'Michele',
    image: 'assets/images/cards/captain_hook/Michael.png',
    type: CARD_TYPES.Hero,
    quantity: 1,
    strength: 1,
    description:
      'Description.',
    strategy: {
      paragraphs: [
        'Paragrafo 1',
        'Paragrafo 2 ’',
        'Paragrafo 3',
      ],
      warning:
        'Warning',
    },
    isFateCard: true,
  },
  {
    id: 'peter-pan',
    villainId: VILLAINS_IDS.CaptainHook,
    expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
    name: 'Peter Pan',
    image: 'assets/images/cards/captain_hook/Peter_Pan.png',
    type: CARD_TYPES.Hero,
    quantity: 1,
    strength: 8,
    description:
      'Description.',
    strategy: {
      paragraphs: [
        'Paragrafo 1',
        'Paragrafo 2 ’',
        'Paragrafo 3',
      ],
      warning:
        'Warning',
    },
    isFateCard: true,
  },
  {
    id: 'tick-tock',
    villainId: VILLAINS_IDS.CaptainHook,
    expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
    name: 'Tic Tac',
    image: 'assets/images/cards/captain_hook/Tick_Tock.png',
    type: CARD_TYPES.Hero,
    quantity: 1,
    strength: 5,
    description:
      'Description.',
    strategy: {
      paragraphs: [
        'Paragrafo 1',
        'Paragrafo 2 ’',
        'Paragrafo 3',
      ],
      warning:
        'Warning',
    },
    isFateCard: true,
  },
  {
    id: 'tinker-bell',
    villainId: VILLAINS_IDS.CaptainHook,
    expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
    name: 'Trilli',
    image: 'assets/images/cards/captain_hook/Tinker_Bell.png',
    type: CARD_TYPES.Hero,
    quantity: 1,
    strength: 2,
    description:
      'Description.',
    strategy: {
      paragraphs: [
        'Paragrafo 1',
        'Paragrafo 2 ’',
        'Paragrafo 3',
      ],
      warning:
        'Warning',
    },
    isFateCard: true,
  },
  {
    id: 'wendy',
    villainId: VILLAINS_IDS.CaptainHook,
    expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
    name: 'Wendy',
    image: 'assets/images/cards/captain_hook/Wendy.png',
    type: CARD_TYPES.Hero,
    quantity: 1,
    strength: 3,
    description:
      'Description.',
    strategy: {
      paragraphs: [
        'Paragrafo 1',
        'Paragrafo 2 ’',
        'Paragrafo 3',
      ],
      warning:
        'Warning',
    },
    isFateCard: true,
  },
]