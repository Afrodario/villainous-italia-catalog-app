import { ACTIONS } from '../../models/actions.model';
import { Realm } from '../../models/realm.model';

export const JAFAR_REALM: Realm = {
  id: 'jafar-realm',

  villainId: 'jafar',

  image: 'assets/images/cards/jafar/Jafarrealm.jpg',

  locations: [
    {
      id: 'sultans-palace',
      name: 'Palazzo del Sultano',
      image: 'assets/images/realms/jafar/Sultans_Palace.jpg',
      description: 'Il centro del regno di Agrabah.',
      upperActions: [ ACTIONS.PlayACard, ACTIONS.Activate ],
      lowerActions: [ ACTIONS.Vanquish, ACTIONS.Fate ],
    },

    {
      id: 'streets-of-agrabah',
      name: 'Strade di Agrabah',
      image: 'assets/images/realms/jafar/Streets_of_Agrabah.png',
      description: 'La dimora della Lampada Magica.',
      upperActions: [ACTIONS.GainPower, ACTIONS.Fate],
      lowerActions: [ACTIONS.DiscardCards, ACTIONS.PlayACard],
    },
    {
      id: 'oasis',
      name: 'Oasi',
      image: 'assets/images/realms/jafar/Oasis.png',

      description: 'La dimora della Lampada Magica.',

      upperActions: [ACTIONS.Activate, ACTIONS.PlayACard],
      lowerActions: [ACTIONS.GainPower, ACTIONS.PlayACard],
    },
    {
      id: 'cave-of-wonders',
      name: 'Caverna delle meraviglie',
      image: 'assets/images/realms/jafar/Cave_of_Wonders.png',

      description: 'La dimora della Lampada Magica.',

      upperActions: [ACTIONS.DiscardCards, ACTIONS.GainPower],
      lowerActions: [ACTIONS.PlayACard, ACTIONS.MoveItemOrAlly],
      isLocked: true,
    },
  ],
};
