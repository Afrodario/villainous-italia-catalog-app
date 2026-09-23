import { ACTIONS } from '../../models/actions-types.model';
import { Realm } from '../../models/realm.model';

export const SCAR_REALM: Realm = {
  id: 'scar-realm',
  villainId: 'scar',
  image: 'assets/images-webp/realms/scar/Scarrealm.webp',
  locations: [
    {
      id: 'pride-rock',
      name: "La Rupe dei Re",
      image: 'assets/images-webp/realms/scar/Pride_Rock.webp',
      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.GainPower, ACTIONS.PlayACard],
      lowerActions: [ACTIONS.PlayACard, ACTIONS.MoveItemOrAlly],
      gainPower: 2,
    },

    {
      id: 'the-savanna',
      name: 'La Savana',
      image: 'assets/images-webp/realms/scar/The_Savanna.webp',
      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.PlayACard, ACTIONS.Fate],
      lowerActions: [ACTIONS.DiscardCards, ACTIONS.GainPower],
      gainPower: 1,
    },
    {
      id: 'elephant-graveyard',
      name: 'Il Cimitero degli Elefanti',
      image: 'assets/images-webp/realms/scar/Elephant_Graveyard.webp',
      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.DiscardCards, ACTIONS.PlayACard],
      lowerActions: [ACTIONS.PlayACard, ACTIONS.GainPower],
      gainPower: 3
    },
    {
      id: 'the-gorge',
      name: 'La Gola',
      image: 'assets/images-webp/realms/scar/The_Gorge.webp',

      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.MoveItemOrAlly, ACTIONS.PlayACard],
      lowerActions: [ACTIONS.Vanquish, ACTIONS.Fate],
    },
  ],
};
