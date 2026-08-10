import { Villain } from '../../models/villain.model';

export const JAFAR: Villain = {
  id: 'jafar',

  name: 'Jafar',

  expansionId: 'the-worst-takes-it-all',

  portrait: 'assets/images/cards/jafar/Jafar.png',

  mover: 'assets/images/movers/Jafarmover.png',

  mechanics: 'Nulla di particolare da segnalare',

  objective:
    "Start your turn with the Magic Lamp in Sultan's Palace and Genie under your control.",

  quote: `"Finally, you will bow to me!"`,
  villainDeckBack: `assets/images/cards/jafar/Jafar_Villain_Back.png`,
  fateDeckBack: `assets/images/cards/jafar/Jafar_Fate_Back.png`,
};
