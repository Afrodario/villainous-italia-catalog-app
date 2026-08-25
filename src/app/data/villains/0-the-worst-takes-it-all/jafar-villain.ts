import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const JAFAR: Villain = {
  id: 'jafar',
  name: 'Jafar',
  expansionId: EXPANSIONS_IDS.TheWorstTakesItAll,
  portrait: 'assets/images/cards/jafar/Jafar.png',
  mover: 'assets/images/movers/Jafarmover.png',
  mechanics: {
    setup: ``,
    rules: [],
    victory: `Jafar must unlock the Cave of Wonders, play the Magic Lamp, hypnotize Genie, and move the Magic Lamp to the Sultan's Palace. He can only win at the start of his turn.'`,
  },
  objective:
    "Start your turn with the Magic Lamp in Sultan's Palace and Genie under your control.",
  objectivePortrait: `assets/images/cards/jafar/Jafar_Objective.jpg`,
  quote: `"Finally, you will bow to me!"`,
  villainDeckBack: `assets/images/cards/jafar/Jafar_Villain_Back.png`,
  fateDeckBack: `assets/images/cards/jafar/Jafar_Fate_Back.png`,
};
