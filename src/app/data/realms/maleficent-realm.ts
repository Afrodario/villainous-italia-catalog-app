import { ACTIONS } from '../../models/actions-types.model';
import { Realm } from '../../models/realm.model';
import { VILLAINS_IDS } from '../../models/villains-expansions-ids.model';

export const MALEFICENT_REALM: Realm = {
  id: 'maleficent-realm',
  villainId: VILLAINS_IDS.Maleficent,
  image: 'assets/images/realms/maleficent/Maleficentrealm.jpg',
  locations: [
    {
      id: 'forbidden-mountains',
      name: 'La Montagna Proibita',
      image: 'assets/images/realms/maleficent/Forbidden_Mountains.png',
      description: {
        paragraphs: ['', '', ''],
      },
      upperActions: [ACTIONS.MoveItemOrAlly, ACTIONS.PlayACard],
      lowerActions: [ACTIONS.GainPower, ACTIONS.Fate],
      gainPower: 1,
    },
    {
      id: 'briar-roses-cottage',
      name: 'La Casetta di Rosaspina',
      image: 'assets/images/realms/maleficent/Briar_Roses_Cottage.png',
      description: {
        paragraphs: ['', '', ''],
      },
      upperActions: [ACTIONS.GainPower, ACTIONS.MoveItemOrAlly],
      lowerActions: [ACTIONS.PlayACard, ACTIONS.DiscardCards],
      gainPower: 2,
    },
    {
      id: 'the-forest-maleficent',
      name: 'La Foresta',
      image: 'assets/images/realms/maleficent/The_Forest_Maleficent.png',
      description: {
        paragraphs: ['', '', ''],
      },

      upperActions: [ACTIONS.DiscardCards, ACTIONS.PlayACard],
      lowerActions: [ACTIONS.GainPower, ACTIONS.PlayACard],
      gainPower: 3,
    },
    {
      id: 'king-stefans-castle',
      name: 'Il Castello di Re Stefano',
      image: 'assets/images/realms/maleficent/King_Stefans_Castle.png',
      description: {
        paragraphs: ['', '', ''],
      },

      upperActions: [ACTIONS.GainPower, ACTIONS.Fate],
      lowerActions: [ACTIONS.Vanquish, ACTIONS.PlayACard],
      gainPower: 1,
    },
  ],
};
