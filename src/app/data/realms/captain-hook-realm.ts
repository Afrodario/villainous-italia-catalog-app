import { ACTIONS } from '../../models/actions-types.model';
import { Realm } from '../../models/realm.model';
import { VILLAINS_IDS } from '../../models/villains-expansions-ids.model';

export const CAPTAIN_HOOK_REALM: Realm = {
  id: 'captain-hook-realm',
  villainId: VILLAINS_IDS.CaptainHook,
  image: 'assets/images-webp/realms/captain_hook/Hookrealm.webp',
  locations: [
    {
      id: 'jolly-roger',
      name: 'Jolly Roger',
      image: 'assets/images-webp/realms/captain_hook/Jolly_Roger.webp',
      description: {
        paragraphs: [
          'Luogo fondamentale per il raggiungimento dell’obiettivo di Capitan Uncino. Cercate di tenerlo il più libero possibile dagli Eroi.',
          'Unico luogo del Reame con l’azione Scontro.',
          'Preparate qui i vostri Alleati in vista dello scontro con Peter Pan così da essere pronti ad affrontarlo quando lo muoverete sulla Jolly Roger.',
        ],
      },
      upperActions: [ACTIONS.GainPower, ACTIONS.DiscardCards],
      lowerActions: [ACTIONS.Vanquish, ACTIONS.PlayACard],
      gainPower: 1
    },
    {
      id: 'skull-rock',
      name: 'La Roccia del Teschio',
      image: 'assets/images-webp/realms/captain_hook/Skull_Rock.webp',
      description: {
        paragraphs: [
          'Luogo fondamentale per Uncino in quanto dispone dell’azione Scartare carte sempre disponibile. Questo vi permette di scorrere il vostro mazzo alla ricerca della Mappa, sopratutto nelle fasi iniziali se non è ancora in vostro possesso.',
          'Utile anche per scagliare il Fato contro gli avversari, se non avete altro modo di avanzare al momento.',
        ],
      },
      upperActions: [ACTIONS.GainPower, ACTIONS.PlayACard],
      lowerActions: [ACTIONS.Fate, ACTIONS.DiscardCards],
      gainPower: 1
    },
    {
      id: 'mermaid-lagoon',
      name: 'La Laguna delle Sirene',
      image: 'assets/images-webp/realms/captain_hook/Mermaid_Lagoon.webp',
      description: {
        paragraphs: [
          'Luogo importante per raccogliere rapidamente Potere e per giocare fino a due carte nello stesso turno (se non ci sono Eroi a coprirne la parte superiore).',
          'Giocando qui l’Uncino da Cerimonia potete ottenere il suo Potere e muoverlo con l’apposita azione in un luogo adiacente per sfruttarlo nuovamente, se pianificate di andare lì al prossimo turno.',
        ],
      },

      upperActions: [ACTIONS.PlayACard, ACTIONS.MoveItemOrAlly],
      lowerActions: [ACTIONS.GainPower, ACTIONS.PlayACard],
      gainPower: 3
    },
    {
      id: 'hangmans-tree',
      name: 'L’Albero dell’Impiccato',
      image: 'assets/images-webp/realms/captain_hook/Hangmans_Tree.webp',

      description: {
        paragraphs: [
          'Unico Luogo con l’azione Muovere un Eroe, che è fondamentale per muovere Peter Pan, una volta giocato qui, fino alla Jolly Roger.',
          'Permette di ottenere una discreta quantità di Potere, sopratutto se riuscite a sbloccarlo nelle fasi iniziali.',
          'Se giocate qui il Cannone, che vi permette di aggiungere l’azione Scontro ad un Luogo, potete muovere Peter Pan dalla Roccia del Teschio alla Jolly Roger e sconfiggerlo nello stesso turno.',
          'Altrimenti, potreste anche giocare qui il Dispositivo Ingegnoso per riuscire a muovere Peter Pan di due luoghi in un solo turno.'
        ],
      },
      upperActions: [ACTIONS.Fate, ACTIONS.GainPower],
      lowerActions: [ACTIONS.MoveAHero, ACTIONS.PlayACard],
      isLocked: true,
      gainPower: 2
    },
  ],
};