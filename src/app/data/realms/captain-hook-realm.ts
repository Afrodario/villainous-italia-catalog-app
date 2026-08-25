import { ACTIONS } from '../../models/actions-types.model';
import { Realm } from '../../models/realm.model';
import { VILLAINS_IDS } from '../../models/villains-expansions-ids.model';

export const CAPTAIN_HOOK_REALM: Realm = {
  id: 'captain-hook-realm',
  villainId: VILLAINS_IDS.CaptainHook,
  image: 'assets/images/realms/captain_hook/Hookrealm.jpg',
  locations: [
    {
      id: 'jolly-roger',
      name: 'Jolly Roger',
      image: 'assets/images/realms/captain_hook/Jolly_Roger.png',
      description: {
        paragraphs: [
          'Luogo utile sopratutto per il Fato sempre disponibile e per l’unica azione Scontro di cui dispone Jafar',
          'Se non ci sono eroi a coprire le azioni superiori, può essere utile sopratutto per l’azione Attivare',
          'Non è un luogo fondamentale per Jafar (in quanto lo Scontro non sempre è necessario poiché Jafar può anche usare Ipnotizzare o Ah, Sarei un Serpente?',
        ],
      },
      upperActions: [ACTIONS.GainPower, ACTIONS.DiscardCards],
      lowerActions: [ACTIONS.Vanquish, ACTIONS.PlayACard],
      gainPower: 1
    },
    {
      id: 'skull-rock',
      name: 'La Roccia del Teschio',
      image: 'assets/images/realms/captain_hook/Skull_Rock.png',
      description: {
        paragraphs: [
          'Un ottimo luogo per Jafar in quanto dispone dell’azione Scartare carte (unica disponibile se la Caverna delle Meraviglie è ancora bloccata) che vi permette di scorrere il vostro mazzo cattivo',
          'Utile anche per giocare una carta e, se non ci sono eroi a coprirne la parte superiore, il Fato',
        ],
      },
      upperActions: [ACTIONS.GainPower, ACTIONS.PlayACard],
      lowerActions: [ACTIONS.Fate, ACTIONS.DiscardCards],
      gainPower: 1
    },
    {
      id: 'mermaid-lagoon',
      name: 'La Laguna delle Sirene',
      image: 'assets/images/realms/captain_hook/Mermaid_Lagoon.png',
      description: {
        paragraphs: [
          'Ottimo luogo per Jafar sopratutto nelle prime fasi della partita, prima di sbloccare la Caverna delle Meraviglie',
          'Ottimo per ottenere 3 gettoni Potere, giocare ben due carte e attivare un’abilità.',
        ],
      },

      upperActions: [ACTIONS.PlayACard, ACTIONS.MoveItemOrAlly],
      lowerActions: [ACTIONS.GainPower, ACTIONS.PlayACard],
      gainPower: 3
    },
    {
      id: 'hangmans-tree',
      name: 'L’Albero dell’Impiccato',
      image: 'assets/images/realms/captain_hook/Hangmans_Tree.png',

      description: {
        paragraphs: [
          'Una volta che viene sbloccato, è utile alternare lo spostamento di Jafar fra qua e Le Strade di Agrabah',
          'Luogo fondamentale per l’unica azione Muovere un Oggetto o un Alleato, per permettervi di muovere la Lampada Magica verso il Palazzo del Sultano.',
          'Vi permette di ottenere una discreta quantità di Potere e di scartare carte per scorrere il vostro mazzo',
        ],
      },
      upperActions: [ACTIONS.Fate, ACTIONS.GainPower],
      lowerActions: [ACTIONS.MoveAHero, ACTIONS.PlayACard],
      isLocked: true,
      gainPower: 2
    },
  ],
};