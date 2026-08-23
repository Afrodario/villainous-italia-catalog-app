import { Villain } from '../../../models/villain.model';
import { EXPANSIONS_IDS } from '../../../models/villains-expansions-ids.model';

export const SCAR: Villain = {
  id: 'scar',
  name: 'Scar',
  expansionId: EXPANSIONS_IDS.EvilComesPrepared,
  portrait: 'assets/images/cards/scar/Scar.png',
  mover: 'assets/images/movers/Scarmover.png',
  mechanics: `Scar has a special mechanic called the Succession pile. 
  Once he defeats Mufasa, the latter is put there, alongside any subsequent Heroes he defeats, and the combined Strength of the Heroes in the pile determines whether or not he satisfies his Objective.`,
  objective:
    'Start your turn with at least 15 Strength in the Succession Pile.',
  objectivePortrait: ``,
  quote: `"Long live the king."`,
  villainDeckBack: `assets/images/cards/scar/Scar_Villain_Back.png`,
  fateDeckBack: `assets/images/cards/scar/Scar_Fate_Back.png`,
};
