import { ACTIONS } from '../../models/actions-types.model';
import { Realm } from '../../models/realm.model';

export const RATIGAN_REALM: Realm = {
  id: 'ratigan-realm',
  villainId: 'ratigan',
  image: 'assets/images-webp/realms/ratigan/Ratiganrealm.webp',
  locations: [
    {
      id: 'the-secret-lair',
      name: "Il Covo Segreto",
      image: 'assets/images-webp/realms/ratigan/The_Secret_Lair.webp',
      description: {
        paragraphs: []
      },
      upperActions: [],
      lowerActions: [ACTIONS.Fate, ACTIONS.PlayACard, ACTIONS.Activate],
    },

    {
      id: 'flavershams-toy-shop',
      name: 'Il Negozio di Giocattoli di Flaversham',
      image: 'assets/images-webp/realms/ratigan/Flavershams_Toy_Shop.webp',
      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.PlayACard, ACTIONS.DiscardCards],
      lowerActions: [ACTIONS.GainPower, ACTIONS.PlayACard],
      gainPower: 3,
    },
    {
      id: 'big-ben',
      name: 'Il Big Ben',
      image: 'assets/images-webp/realms/ratigan/Big_Ben.webp',
      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.GainPower, ACTIONS.MoveItemOrAlly],
      lowerActions: [ACTIONS.PlayACard, ACTIONS.Vanquish],
      gainPower: 2
    },
    {
      id: 'buckingham-palace',
      name: 'Buckingham Palace',
      image: 'assets/images-webp/realms/ratigan/Buckingham_Palace.webp',

      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.Fate, ACTIONS.PlayACard],
      lowerActions: [ACTIONS.MoveItemOrAlly, ACTIONS.GainPower, ACTIONS.DiscardCards],
      gainPower: 1
    },
  ],
};