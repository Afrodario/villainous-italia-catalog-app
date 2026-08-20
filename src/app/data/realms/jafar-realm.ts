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
      description: {
        paragraphs: [
          'Luogo utile sopratutto per il Fato sempre disponibile e per l’unica azione Scontro di cui dispone Jafar',
          'Se non ci sono eroi a coprire le azioni superiori, può essere utile sopratutto per l’azione Attivare',
          'Non è un luogo fondamentale per Jafar (in quanto lo Scontro non sempre è necessario poiché Jafar può anche usare Ipnotizzare o Ah, Sarei un Serpente?',
        ],
      },
      upperActions: [ACTIONS.PlayACard, ACTIONS.Activate],
      lowerActions: [ACTIONS.Vanquish, ACTIONS.Fate],
    },

    {
      id: 'streets-of-agrabah',
      name: 'Strade di Agrabah',
      image: 'assets/images/realms/jafar/Streets_of_Agrabah.png',
      description: {
        paragraphs: [
          'Un ottimo luogo per Jafar in quanto dispone dell’azione Scartare carte (unica disponibile se la Caverna delle Meraviglie è ancora bloccata) che vi permette di scorrere il vostro mazzo cattivo',
          'Utile anche per giocare una carta e, se non ci sono eroi a coprirne la parte superiore, il Fato',
        ],
      },
      upperActions: [ACTIONS.GainPower, ACTIONS.Fate],
      lowerActions: [ACTIONS.DiscardCards, ACTIONS.PlayACard],
    },
    {
      id: 'oasis',
      name: 'Oasi',
      image: 'assets/images/realms/jafar/Oasis.png',
      description: {
        paragraphs: [
          'Ottimo luogo per Jafar sopratutto nelle prime fasi della partita, prima di sbloccare la Caverna delle Meraviglie',
          'Ottimo per ottenere 3 gettoni Potere, giocare ben due carte e attivare un’abilità.',
        ],
      },

      upperActions: [ACTIONS.Activate, ACTIONS.PlayACard],
      lowerActions: [ACTIONS.GainPower, ACTIONS.PlayACard],
    },
    {
      id: 'cave-of-wonders',
      name: 'Caverna delle meraviglie',
      image: 'assets/images/realms/jafar/Cave_of_Wonders.png',

      description: {
        paragraphs: [
          'Una volta che viene sbloccato, è utile alternare lo spostamento di Jafar fra qua e Le Strade di Agrabah',
          'Luogo fondamentale per l’unica azione Muovere un Oggetto o un Alleato, per permettervi di muovere la Lampada Magica verso il Palazzo del Sultano.',
          'Vi permette di ottenere una discreta quantità di Potere e di scartare carte per scorrere il vostro mazzo',
        ],
      },

      upperActions: [ACTIONS.DiscardCards, ACTIONS.GainPower],
      lowerActions: [ACTIONS.PlayACard, ACTIONS.MoveItemOrAlly],
      isLocked: true,
    },
  ],
};
