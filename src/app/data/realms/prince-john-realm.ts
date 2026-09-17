import { ACTIONS } from '../../models/actions-types.model';
import { Realm } from '../../models/realm.model';

export const PRINCE_JOHN_REALM: Realm = {
  id: 'prince-john-realm',

  villainId: 'prince-john',

  image: 'assets/images-webp/realms/prince_john/Princejohnrealm.webp',

  locations: [
    {
      id: 'sherwood-forest',
      name: 'La Foresta di Sherwood',
      image: 'assets/images-webp/realms/prince_john/Sherwood_Forest.webp',
      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.GainPower, ACTIONS.DiscardCards],
      lowerActions: [ACTIONS.PlayACard, ACTIONS.Fate],
      gainPower: 1,
    },

    {
      id: 'friar-tucks-church',
      name: 'La Chiesa di Fra Tac',
      image: 'assets/images-webp/realms/prince_john/Friar_Tucks_Church.webp',
      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.GainPower, ACTIONS.PlayACard],
      lowerActions: [ACTIONS.PlayACard, ACTIONS.MoveItemOrAlly],
      gainPower: 2,
    },
    {
      id: 'nottingham',
      name: 'Nottingham',
      image: 'assets/images-webp/realms/prince_john/Nottingham.webp',
      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.Fate, ACTIONS.GainPower],
      lowerActions: [ACTIONS.Vanquish, ACTIONS.PlayACard],
      gainPower: 1
    },
    {
      id: 'the-jail',
      name: 'La Prigione',
      image: 'assets/images-webp/realms/prince_john/The_Jail.webp',

      description: {
        paragraphs: []
      },
      upperActions: [],
      lowerActions: [ACTIONS.GainPower, ACTIONS.PlayACard, ACTIONS.DiscardCards],
      gainPower: 3,
    },
  ],
};
