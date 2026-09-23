import { ACTIONS } from '../../models/actions-types.model';
import { Realm } from '../../models/realm.model';

export const EVIL_QUEEN_REALM: Realm = {
  id: 'evil-queen-realm',
  villainId: 'evil-queen',
  image: 'assets/images-webp/realms/evil_queen/Evilqueenrealm.webp',
  locations: [
    {
      id: 'laboratory',
      name: 'Il Laboratorio',
      image: 'assets/images-webp/realms/evil_queen/Laboratory.webp',
      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.GainPower, ACTIONS.MoveAHero],
      lowerActions: [ACTIONS.PlayACard, ACTIONS.Fate, ACTIONS.BrewPoison],
      gainPower: 1,
    },

    {
      id: 'the-woods-evil-queen',
      name: 'La Foresta',
      image: 'assets/images-webp/realms/evil_queen/The_Woods.webp',
      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.GainPower, ACTIONS.Activate],
      lowerActions: [ACTIONS.DiscardCards, ACTIONS.PlayACard],
      gainPower: 2,
    },
    {
      id: 'the-mine',
      name: 'La Miniera',
      image: 'assets/images-webp/realms/evil_queen/The_Mine.webp',
      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.PlayACard, ACTIONS.Activate],
      lowerActions: [ACTIONS.GainPower, ACTIONS.PlayACard],
      gainPower: 3
    },
    {
      id: 'dwarfs-cottage',
      name: 'La Casetta dei Nani',
      image: 'assets/images-webp/realms/evil_queen/Dwarfs_Cottage.webp',

      description: {
        paragraphs: []
      },
      upperActions: [ACTIONS.DiscardCards, ACTIONS.Fate],
      lowerActions: [ACTIONS.PlayACard, ACTIONS.GainPower],
      gainPower: 1,
      isLocked: true
    },
  ],
};
