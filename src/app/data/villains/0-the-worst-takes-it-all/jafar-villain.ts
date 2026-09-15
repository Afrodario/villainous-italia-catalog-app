import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const JAFAR: Villain = {
  id: 'jafar',
  name: 'Jafar',
  expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
  portrait: 'assets/images-webp/cards/jafar/Jafar.webp',
  mover: 'assets/images-webp/movers/Jafarmover.webp',
  mechanics: {
    setup: ``,
    rules: [],
    victory: `Jafar must unlock the Cave of Wonders, play the Magic Lamp, hypnotize Genie, and move the Magic Lamp to the Sultan's Palace. He can only win at the start of his turn.'`,
  },
  objective:
    "Start your turn with the Magic Lamp in Sultan's Palace and Genie under your control.",
  objectivePortrait: `assets/images-webp/cards/jafar/Jafar_Objective.webp`,
  quote: `"Finally, you will bow to me!"`,
  villainDeckBack: `assets/images-webp/cards/jafar/Jafar_Villain_Back.webp`,
  fateDeckBack: `assets/images-webp/cards/jafar/Jafar_Fate_Back.webp`,
  speedLevel: 'orange'
};
