import { ACTIONS } from '../../models/actions-types.model';
import { Realm } from '../../models/realm.model';

export const QUEEN_OF_HEARTS_REALM: Realm = {
  id: 'queen-of-hearts-realm',

  villainId: 'queen-of-hearts',

  image: 'assets/images-webp/realms/queen_of_hearts/Queenofheartsrealm.webp',

  locations: [
    {
      id: 'courtyard',
      name: 'Il Cortile',
      image: 'assets/images-webp/realms/queen_of_hearts/Courtyard.webp',
      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.DiscardCards, ACTIONS.MoveItemOrAlly],
      lowerActions: [ACTIONS.GainPower, ACTIONS.PlayACard],
      gainPower: 2,
    },

    {
      id: 'hedge-maze',
      name: 'Labirinto di Siepi',
      image: 'assets/images-webp/realms/queen_of_hearts/Hedge_Maze.webp',
      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.PlayACard, ACTIONS.Activate],
      lowerActions: [ACTIONS.GainPower, ACTIONS.PlayACard],
      gainPower: 3,
    },
    {
      id: 'tulgey-wood',
      name: 'Foresta di Tulgi',
      image: 'assets/images-webp/realms/queen_of_hearts/Tulgey_Wood.webp',

      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.Fate, ACTIONS.PlayACard],
      lowerActions: [ACTIONS.DiscardCards, ACTIONS.Vanquish],
    },
    {
      id: 'white-rabbits-house',
      name: 'La Casa del Bianconiglio',
      image: 'assets/images-webp/realms/queen_of_hearts/White_Rabbits_House.webp',

      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.PlayACard, ACTIONS.GainPower],
      lowerActions: [ACTIONS.Activate, ACTIONS.Fate],
      gainPower: 1,
    },
  ],
};
