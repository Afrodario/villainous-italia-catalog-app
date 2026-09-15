import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const GASTON: Villain = {
  id: 'gaston',
  name: 'Gaston',
  expansionId: EXPANSIONS_IDS.DespicablePlots,
  portrait: 'assets/images-webp/cards/gaston/Gaston.webp',
  mover: 'assets/images-webp/movers/Gastonmover.webp',
  mechanics: {
    setup: ``,
    rules: [
      `Belle, despite being the target of Gaston's affections, prevents Obstacle removal while she is in Gaston's Realm, so she will need to be defeated as well (if she is in play) before Gaston can continue progressing toward his Objective.`,
      `Obstacles can be replaced by several Fate Effects, such as It Is You, and Gaston can even replace Obstacles himself with Swoon, which is an extra Cost for the card, but can also strategically hide how close Gaston is to victory.`,
    ],
    victory: `Gaston must remove all 8 Obstacles from his board. He does so by using Effects or Conditions like Temper or Beautiful as Me, by activating Monsieur D'Arque, and by defeating Beast or Maurice. `,
  },
  objective: 'Remove all 8 Obstacles',
  objectivePortrait: `assets/images-webp/cards/gaston/Gaston_Objective.webp`,
  quote: `"And don't I deserve the best?"`,
  villainDeckBack: `assets/images-webp/cards/gaston/Gaston_Villain_Back.webp`,
  fateDeckBack: `assets/images-webp/cards/gaston/Gaston_Fate_Back.webp`,
  additionalTokens: true,
  additionalTokensPath: `assets/images-webp/cards/gaston/Obstacletokens.webp`,
  speedLevel: 'orange'
};
