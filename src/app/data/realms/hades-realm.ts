import { ACTIONS } from '../../models/actions-types.model';
import { Realm } from '../../models/realm.model';

export const HADES_REALM: Realm = {
  id: 'hades-realm',
  villainId: 'hades',
  image: 'assets/images-webp/realms/hades/Hadesrealm.webp',
  locations: [
    {
      id: 'the-underworld',
      name: "L'Oltretomba",
      image: 'assets/images-webp/realms/hades/The_Underworld.webp',
      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.PlayACard, ACTIONS.GainPower],
      lowerActions: [ACTIONS.Vanquish, ACTIONS.MoveItemOrAlly],
      gainPower: 2,
    },

    {
      id: 'thebes',
      name: 'Tebe',
      image: 'assets/images-webp/realms/hades/Thebes.webp',
      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.GainPower, ACTIONS.PlayACard],
      lowerActions: [ACTIONS.Fate, ACTIONS.DiscardCards],
      gainPower: 1,
    },
    {
      id: 'the-gardens',
      name: 'I Giardini',
      image: 'assets/images-webp/realms/hades/The_Gardens.webp',
      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.DiscardCards, ACTIONS.PlayACard],
      lowerActions: [ACTIONS.GainPower, ACTIONS.PlayACard],
      gainPower: 3
    },
    {
      id: 'mount-olympus',
      name: 'Il Monte Olimpo',
      image: 'assets/images-webp/realms/hades/Mount_Olympus.webp',

      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.Fate, ACTIONS.MoveItemOrAlly],
      lowerActions: [ACTIONS.PlayACard, ACTIONS.GainPower],
      gainPower: 1,
    },
  ],
};
