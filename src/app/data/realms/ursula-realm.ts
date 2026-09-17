import { ACTIONS } from '../../models/actions-types.model';
import { Realm } from '../../models/realm.model';

export const URSULA_REALM: Realm = {
  id: 'ursula-realm',
  villainId: 'ursula',
  image: 'assets/images-webp/realms/ursula/Ursularealm.webp',
  locations: [
    {
      id: 'ursulas-lair',
      name: 'Il Covo di Ursula',
      image: 'assets/images-webp/realms/ursula/Ursulas_Lair.webp',
      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.GainPower, ACTIONS.Activate],
      lowerActions: [ACTIONS.MoveItemOrAlly, ACTIONS.PlayACard],
      gainPower: 1,
    },

    {
      id: 'erics-ship',
      name: 'La Nave di Eric',
      image: 'assets/images-webp/realms/ursula/Erics_Ship.webp',
      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.GainPower, ACTIONS.PlayACard],
      lowerActions: [ACTIONS.Fate, ACTIONS.DiscardCards],
      gainPower: 1,
    },
    {
      id: 'the-shore',
      name: 'La Riva',
      image: 'assets/images-webp/realms/ursula/The_Shore.webp',
      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.PlayACard, ACTIONS.DiscardCards],
      lowerActions: [ACTIONS.GainPower, ACTIONS.PlayACard],
      gainPower: 3
    },
    {
      id: 'the-palace',
      name: 'Il Palazzo',
      image: 'assets/images-webp/realms/ursula/The_Palace_Ursula.webp',

      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.MoveItemOrAlly, ACTIONS.Fate],
      lowerActions: [ACTIONS.MoveAHero, ACTIONS.GainPower],
      gainPower: 2,
    },
  ],
};
