import { Realm } from '../../models/realm.model';

export const QUEEN_OF_HEARTS_REALM: Realm = {
  id: 'queen-of-hearts-realm',

  villainId: 'queen-of-hearts',

  image: 'assets/images/realms/queen_of_hearts/Queenofheartsrealm.png',

  locations: [
    {
      id: 'sultans-palace',
      name: 'Palazzo del Sultano',
      image: 'assets/images/realms/jafar/Sultans_Palace.jpg',
      description: 'Il centro del regno di Agrabah.',
      upperActions: ['Giocare una carta', 'Attivare'],
      lowerActions: ['Scontro', 'Fato'],
    },

    {
      id: 'streets-of-agrabah',
      name: 'Strade di Agrabah',
      image: 'assets/images/realms/jafar/Streets_of_Agrabah.png',
      description: 'La dimora della Lampada Magica.',
      upperActions: ['Giocare una carta', 'Attivare'],
      lowerActions: ['Scontro', 'Fato'],
    },
    {
      id: 'oasis',
      name: 'Oasi',
      image: 'assets/images/realms/jafar/Oasis.png',

      description: 'La dimora della Lampada Magica.',

      upperActions: ['Giocare una carta', 'Attivare'],
      lowerActions: ['Scontro', 'Fato'],
    },
    {
      id: 'cave-of-wonders',
      name: 'Caverna delle meraviglie',
      image: 'assets/images/realms/jafar/Cave_of_Wonders.png',

      description: 'La dimora della Lampada Magica.',

      upperActions: ['Giocare una carta', 'Attivare'],
      lowerActions: ['Scontro', 'Fato'],
      isLocked: true,
    },
  ],
};
