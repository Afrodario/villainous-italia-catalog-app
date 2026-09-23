import { ACTIONS } from '../../models/actions-types.model';
import { Realm } from '../../models/realm.model';

export const DR_FACILIER_REALM: Realm = {
  id: 'dr-facilier-realm',
  villainId: 'dr-facilier',
  image: 'assets/images-webp/realms/dr_facilier/Drfacilierrealm.webp',
  locations: [
    {
      id: 'voodoo-emporium',
      name: 'Emporio Voodoo',
      image: 'assets/images-webp/realms/dr_facilier/Voodoo_Emporium.webp',
      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.GainPower, ACTIONS.Fate],
      lowerActions: [ACTIONS.Vanquish, ACTIONS.PlayACard],
      gainPower: 1,
    },

    {
      id: 'the-parade',
      name: 'La Parata',
      image: 'assets/images-webp/realms/dr_facilier/The_Parade.webp',
      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.GainPower, ACTIONS.PlayACard],
      lowerActions: [ACTIONS.DiscardCards, ACTIONS.MoveItemOrAlly],
      gainPower: 2,
    },
    {
      id: 'tianas-place',
      name: 'La Reggia di Tiana',
      image: 'assets/images-webp/realms/dr_facilier/Tianas_Place.webp',
      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.DiscardCards, ACTIONS.GainPower],
      lowerActions: [ACTIONS.PlayACard, ACTIONS.Fate],
      gainPower: 1
    },
    {
      id: 'the-bayou',
      name: 'Il Bayou',
      image: 'assets/images-webp/realms/dr_facilier/The_Bayou.webp',

      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.MoveItemOrAlly, ACTIONS.PlayACard],
      lowerActions: [ACTIONS.PlayACard, ACTIONS.GainPower],
      gainPower: 3,
    },
  ],
};
