import { ACTIONS } from '../../models/actions-types.model';
import { Realm } from '../../models/realm.model';

export const YZMA_REALM: Realm = {
  id: 'yzma-realm',
  villainId: 'yzma',
  image: 'assets/images-webp/realms/yzma/Yzmarealm.webp',
  locations: [
    {
      id: 'the-palace-yzma',
      name: "Il Palazzo",
      image: 'assets/images-webp/realms/yzma/The_Palace_Yzma.webp',
      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.GainPower, ACTIONS.MoveItemOrAlly],
      lowerActions: [ACTIONS.Vanquish, ACTIONS.PlayACard],
      gainPower: 2,
    },

    {
      id: 'pachas-house',
      name: 'La Casa di Pacha',
      image: 'assets/images-webp/realms/yzma/Pachas_House.webp',
      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.PlayACard, ACTIONS.GainPower],
      lowerActions: [ACTIONS.MoveItemOrAlly, ACTIONS.Fate],
      gainPower: 1,
    },
    {
      id: 'the-jungle',
      name: 'La Giungla',
      image: 'assets/images-webp/realms/yzma/The_Jungle.webp',
      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.PlayACard, ACTIONS.DiscardCards],
      lowerActions: [ACTIONS.GainPower, ACTIONS.PlayACard],
      gainPower: 3
    },
    {
      id: 'mudkas-meat-hut',
      name: 'La Casa della Carne di Mudka',
      image: 'assets/images-webp/realms/yzma/Mudkas_Meat_Hut.webp',

      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.GainPower, ACTIONS.Fate],
      lowerActions: [ACTIONS.DiscardCards, ACTIONS.PlayACard],
      gainPower: 1
    },
  ],
};