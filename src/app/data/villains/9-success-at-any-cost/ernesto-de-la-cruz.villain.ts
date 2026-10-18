import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS, VILLAINS_IDS } from '../../../models/villains-expansions-ids.model';

export const ERNESTO_DE_LA_CRUZ: Villain = {
  id: VILLAINS_IDS.ErnestoDeLaCruz,
  name: 'Ernesto de la Cruz',
  expansionId: EXPANSIONS_IDS.SuccessAtAnyCost,
  portrait: 'assets/images-webp/cards/ernesto_de_la_cruz/Ernesto_de_la_Cruz.webp',
  mover: 'assets/images-webp/movers/Ernestodelacruz.webp',
  mechanics: {
    setup: `Ernesto de la Cruz has a unique mechanic of photo cards, which assemble to make either the Rivera family photo of Héctor, Imelda and Coco (called "face up"), or a publicity photo of Ernesto ("face down"). `,
    rules: [
      `These start the game with the Rivera side showing, except for the top right card bearing Héctor's face, which is flipped face down.`,
      ``,
      ``,
    ],
    victory: `Ernesto de la Cruz must have all six photo cards face down. He has multiple Villain cards that directly flip these cards, and he can also flip them by moving Miguel Rivera toward Allies.`,
  },
  objective: 'Have all six photo cards face down.',
  objectivePortrait: `assets/images-webp/cards/ernesto_de_la_cruz/Ernesto_de_la_Cruz_Objective.webp`,
  quote: `"I am the one who is willing to do what it takes to seize my moment. Whatever it takes."`,
  villainDeckBack: `assets/images-webp/cards/ernesto_de_la_cruz/Ernesto_de_la_Cruz_Villain_Back.webp`,
  fateDeckBack: `assets/images-webp/cards/ernesto_de_la_cruz/Ernesto_de_la_Cruz_Fate_Back.webp`,
  additionalTokens: true,
  additionalTokensPath: ``,
  speedLevel: 'green'
};