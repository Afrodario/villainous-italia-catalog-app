import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const DR_FACILIER: Villain = {
  id: 'dr-facilier',
  name: 'Dr. Facilier',
  expansionId: EXPANSIONS_IDS.WickedToTheCore,
  portrait: 'assets/images/cards/dr_facilier/Dr_Facilier.png',
  mover: 'assets/images/movers/Dr_Faciliermover.png',
  mechanics: {
    setup: ``,
    rules: [
      `Dr. Facilier has a special mechanic called the Fortune pile. Some cards he plays automatically go to the Fortune pile, while cards in his Fate deck can add other cards to it. `,
      `When he plays The Cards Will Tell, he reveals three cards at random from the Fortune pile. Some cards (including his win condition, Rule New Orleans), have an Ability if revealed in this way, some helping him, some harming him. 
      Cards without a Fortune Ability are simply discarded if revealed.`,
    ],
    victory: ``,
  },
  objective: 'Control the Talisman and successfully rule New Orleans.',
  objectivePortrait: `assets/images/cards/dr_facilier/Dr_Facilier_Objective.jpg`,
  quote: `"I got friends on the other side."`,
  villainDeckBack: `assets/images/cards/dr_facilier/Dr_Facilier_Villain_Back.png`,
  fateDeckBack: `assets/images/cards/dr_facilier/Dr_Facilier_Fate_Back.png`,
};
