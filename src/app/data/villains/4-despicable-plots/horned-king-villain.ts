import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const HORNED_KING: Villain = {
  id: 'horned-king',
  name: 'Re Cornelius',
  expansionId: EXPANSIONS_IDS.DespicablePlots,
  portrait: 'assets/images/cards/horned_king/Horned_King.png',
  mover: 'assets/images/movers/Horned_Kingmover.png',
  mechanics: {
    setup: `Horned King has a special Villain card, The Black Cauldron, that is not in his deck, but printed on a tile. It starts off the game set aside, and must be claimed in order to put it next to his Villain portrait. It is double-sided, and must be activated to flip it to its Power side, which will allow Horned King to play Cauldron Born.`,
    rules: [
      `The Black Cauldron can be claimed by playing Show Me the Black Cauldron or We Have Made a Bargain, or by defeating Hen Wen.`,
      `Once The Black Cauldron is activated, Horned King may use it to swap Ancient Soldiers for Cauldron Born.`,
    ],
    victory: `Horned King must have a Cauldron Born at each location. To do so, he must play Ancient Soldiers and claim The Black Cauldron then activate it.`,
  },
  objective: 'Have a Cauldron Born at each location',
  objectivePortrait: `assets/images/cards/horned_king/Horned_King_Objective.png`,
  quote: `"Arise, my messengers of death! Our time has arrived!"`,
  villainDeckBack: `assets/images/cards/horned_king/Horned_King_Villain_Back.jpg`,
  fateDeckBack: `assets/images/cards/horned_king/Horned_King_Fate_Back.jpg`,
};