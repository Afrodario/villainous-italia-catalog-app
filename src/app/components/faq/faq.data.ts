import { FaqUpdate, GeneralFaq, SpecialCardFaq, VillainFaq } from './faq.model';
import { CardListGroup, AnyCardEntry } from './faq.model';

export const FAQ_UPDATE: FaqUpdate = {
  version: '6.1',
  date: '10/2026',
  changes: [
    'Scar: modificata specifica su Banzai la Iena.',
    'Regina Cattiva: aggiunta specifica su Il Nero della Notte.',
    'Gaston: precisata specifica sul movimento degli Eroi per Mrs. Bric e Chicco.',
  ],
};

export const GENERAL_FAQ: GeneralFaq[] = [
  {
    number: 1,
    text: `Una volta mossa la propria pedina in un nuovo luogo, il turno è ufficialmente iniziato. Per garantire un regolare svolgimento del torneo, è possibile ritrattare la propria mossa (e quindi recarsi in un luogo diverso da quello inizialmente scelto) solo se NON si è ancora svolta alcuna azione nel luogo di arrivo. Se si è svolta anche solo un’azione nel luogo di arrivo, bisogna rimanere per forza lì e continuare con le azioni restanti.`,
  },
  {
    number: 2,
    text: `Non è possibile giocare una Condizione se non si può fare esattamente ciò che descrive il testo.`,
  },
  {
    number: 3,
    text: `Un Eroe con Forza 0 può essere sconfitto con un’azione Scontro senza necessariamente impiegare Alleati. Se lo si desidera, però, si possono comunque impiegare degli Alleati. In quel caso, gli Alleati non vengono scartati dopo l'azione Scontro.`,
  },
  {
    number: 4,
    text: `Oggetti, Alleati ed Eroi non possono essere giocati né mossi in luoghi bloccati. Non si possono assegnare Oggetti ad Eroi o Alleati in luoghi bloccati. Non si possono attivare Oggetti in luoghi bloccati.`,
  },
  {
    number: 5,
    text: `Qualunque tipo di valore presente nel gioco non può andare sotto allo zero.`,
  },
  {
    number: 6,
    text: `Quando una carta istruisce di TROVARE un’altra carta bisogna nell’ordine cercare prima nel Reame, poi nella relativa pila degli scarti, poi nel relativo mazzo.`,
  },
  {
    number: 7,
    text: `Per correttezza nei confronti degli avversari, quando si deve recuperare una carta di una categoria specifica (Effetto, Alleato, ecc.) da una pila degli scarti o da un mazzo, bisogna mostrarla agli avversari per dimostrare che si sia presa proprio una carta della categoria designata. Se, invece, si deve recuperare una carta qualunque, non è necessario mostrarla agli avversari.`,
  },
  {
    number: 8,
    text: `Nel caso di carte che fanno rivelare da un mazzo finché non si trova una carta di un tipo specifico, può verificarsi un loop infinito se non esistono più copie di quelle carte nel mazzo o negli scarti. In quel caso, la carta in questione può essere comunque giocata, ma con l'unico effetto di rimescolare tutto il mazzo in questione, scarti compresi.`,
  },
  {
    number: 9,
    text: `Le Condizioni che si attivano quando un avversario scarta delle carte si possono usare solo quando un avversario scarta carte dalla mano, che sia tramite l'apposita azione o per effetto di altre carte (come, ad esempio, i Tomi Magici della Regina Cattiva). Scartare carte in qualunque altro modo non fa attivare quelle Condizioni.`,
  },
];

export const SPECIAL_CARD_FAQ: SpecialCardFaq[] = [
  {
    card: 'Il Corvo',
    villain: 'Malefica',
    text: `Permette di svolgere un'azione in un altro luogo. Malefica può svolgerla nuovamente, se si muove in quello stesso luogo.`,
  },
  {
    card: 'Diventare Gigantesca',
    villain: 'Ursula',
    text: `Permette di svolgere un'azione in un luogo adiacente. Quella stessa azione può essere svolta nuovamente con una seconda copia di Diventare Gigantesca.`,
  },
  {
    card: 'Nero della Notte',
    villain: 'Regina Cattiva',
    text: `Permette di svolgere un'azione nel luogo in cui si trova la Regina Cattiva, anche se è già stata svolta.`,
  },
  {
    card: 'Bravi! Bravi!',
    villain: 'Shere Khan',
    text: `Permette di svolgere un'azione coperta. La stessa azione può essere nuovamente svolta con un'altra copia di Bravi! Bravi!`,
  },
  {
    card: 'Sir Biss',
    villain: 'Principe Giovanni',
    text: `Permette di accedere ad un'azione coperta da un Eroe, come se quell'Eroe non ci fosse. Pertanto, l'azione viene considerata svolta e non la si può svolgere nuovamente se l'Eroe che la copriva viene mosso o sconfitto.`,
  },
  {
    card: 'A Qualunque Costo',
    villain: 'Crudelia de Mon',
    text: `Permette di accedere ad un'azione coperta da un Eroe, come se quell'Eroe non ci fosse. Pertanto, l'azione viene considerata svolta e non la si può svolgere nuovamente se l'Eroe che la copriva viene mosso o sconfitto.`,
  },
  {
    card: 'Vi Schiaccerò!',
    villain: 'Regina Cattiva',
    text: `Permette di accedere ad un'azione coperta da un Eroe, come se quell'Eroe non ci fosse. Pertanto, l'azione viene considerata svolta e non la si può svolgere nuovamente se l'Eroe che la copriva viene mosso o sconfitto.`,
  },
  {
    card: 'In Trappola',
    villain: 'Tamatoa',
    text: `Permette di accedere ad un'azione coperta da un Eroe, come se quell'Eroe non ci fosse. Pertanto, l'azione viene considerata svolta e non la si può svolgere nuovamente se l'Eroe che la copriva viene mosso o sconfitto.`,
  },
];

export const CURRENCY_LOSS_CARDS: CardListGroup[] = [
  {
    title: 'Era Prospero Hall',
    description:
      'Le seguenti carte sono da considerarsi con questi effetti, per specifica di Stephanie Straw, designer:',
    entries: [
      {
        villain: 'Dr. Facilier',
        card: 'Spiriti Ombra',
        clarification: 'Perdi fino a 2 gettoni Potere.',
      },
      {
        villain: 'Regina Cattiva',
        card: "Primo Bacio d'Amore",
        clarification: 'Perde fino a 1 segnalino Veleno.',
      },
      {
        villain: 'Yzma',
        card: 'Chicha',
        clarification: 'Perde fino a 2 gettoni Potere.',
      },
      {
        villain: 'Madre Gothel',
        card: 'Flynn Rider',
        clarification: 'Perde fino a 2 segnalini Fiducia.',
      },
    ],
  },
  {
    title: 'Era Ravensburger',
    description:
      'Le seguenti carte sono da considerarsi con questi effetti, causa mancanza di specifiche da parte di Mike Mulvihill, designer:',
    entries: [
      {
        villain: 'Re Cornelius',
        card: 'Le Streghe di Morva',
        clarification: 'Perdere 2 gettoni Potere (e necessariamente 2).',
      },
      {
        villain: 'Tamatoa',
        card: 'Maui Suino',
        clarification: 'Perde 3 gettoni Potere (e necessariamente 3).',
      },
    ],
  },
];

export const ANY_TEXT_CARDS: AnyCardEntry[] = [
  {
    villain: 'Gaston',
    card: 'Bestia',
    originalText: 'any Allies to any other location',
    clarification:
      'Muove un qualsiasi numero di Alleati in uno ed un solo luogo.',
  },
  {
    villain: 'Gaston',
    card: 'Mrs Bric e Chicco',
    originalText: 'all Heroes to new locations',
    clarification: 'Muove tutti gli Eroi, anche in luoghi diversi.',
  },
  {
    villain: 'Re Cornelius',
    card: 'La Pentola Magica',
    originalText: 'any location',
    clarification: 'Scarta i Nati dalla Pentola da uno ed un solo luogo.',
  },
  {
    villain: 'Re Cornelius',
    card: 'Doli',
    originalText: 'each Hero to any other location',
    clarification: 'Muove ciascun Eroe in uno ed un solo luogo.',
  },
  {
    villain: 'Maga Magò',
    card: 'Detterò io le Regole',
    originalText: 'any Transformation',
    clarification: 'Sconfigge una ed una sola Trasformazione.',
  },
  {
    villain: 'Maga Magò',
    card: 'Il Sapere e la Saggezza',
    originalText: 'any Transformation',
    clarification: 'Muove una ed una sola Trasformazione.',
  },
  {
    villain: 'La Matrigna',
    card: 'La Chiave',
    originalText: 'any Hero',
    clarification: 'Muove uno ed un solo Eroe.',
  },
  {
    villain: 'Lotso',
    card: 'Non Adatti a Quell’Età',
    originalText: 'any Hero',
    clarification:
      'Muove uno ed un solo Eroe (o Buzz Lightyear, che sia Guardiano o Alleato).',
  },
  {
    villain: 'Lotso',
    card: 'Jessie',
    originalText: 'any Ally',
    clarification: 'Scarta uno ed un solo Alleato.',
  },
  {
    villain: 'Lotso',
    card: 'Woody',
    originalText: 'all Heroes to any other locations',
    clarification: 'Muove tutti gli Eroi, anche ciascuno in luoghi diversi.',
  },
  {
    villain: 'Re Candito',
    card: 'Turbastico',
    originalText: 'any of three... actions',
    clarification:
      'Possono essere svolte tutte, nessuna o solo alcune delle tre azioni.',
  },
  {
    villain: 'Re Candito',
    card: 'Non Le Permetterò di Correre',
    originalText: 'any number',
    clarification: 'Muove un qualsiasi numero di Alleati.',
  },
  {
    villain: 'Sindrome',
    card: 'Flash',
    originalText: 'any Hero',
    clarification: 'Muove uno ed un solo Eroe.',
  },
  {
    villain: 'Shere Khan',
    card: 'Bagheera',
    originalText: 'all… to “any other locations”',
    clarification:
      'Muove tutti gli Eroi e gli Alleati, anche ciascuno in luoghi diversi.',
  },
];

export const VILLAIN_FAQ: VillainFaq[] = [
  {
    villainId: 'captain-hook',
    villainName: 'Capitan Uncino',
    cards: [
      {
        card: 'Peter Pan',
        question:
          'Se Peter Pan è la prima carta rivelata durante un’azione Fato, anche l’altra va necessariamente rivelata perché vengono rivelate allo stesso tempo.',
        source: 'Regolamento di gioco.',
      },
    ],
  },

  {
    villainId: 'maleficent',
    villainName: 'Malefica',
    cards: [
      {
        card: 'Fauna & Sonno Senza Sogni',
        question:
          'Se Fauna viene giocata in un luogo in cui ci sono due Sonno Senza Sogni ne va scartata una copia sola.',
        source: 'Ruby Wishnietsky, designer del gioco.',
      },
      {
        card: 'Foresta di Rovi & Sonno Senza Sogni',
        question:
          'Se Foresta di Rovi e Sonno Senza Sogni si trovano nello stesso luogo, quando un Eroe con Forza 4 o superiore viene giocato in quello stesso luogo Foresta di Rovi viene scartata. Dopodiché l’Eroe prende -2 Forza per via di Sonno Senza Sogni.',
        source: 'Ruby Wishnietsky, designer del gioco.',
      },
    ],
  },

  {
    villainId: 'jafar',
    villainName: 'Jafar',
    cards: [
      {
        card: 'Inganno',
        question:
          'Il requisito di attivazione (un avversario ha nel suo Reame due o più Oggetti) considera anche gli Oggetti del Fato. Non scatena un’azione Fato, quindi non innesca le Condizioni azionate da un’azione Fato.',
        source: 'Regolamento di gioco.',
      },
      {
        card: 'Ipnotizzare',
        question:
          'Ogni Eroe ipnotizzato conta come Alleato ai fini dell’attivazione delle Condizioni altrui. Per coerenza con le altre meccaniche di gioco simili, gli Eroi ipnotizzati vanno spostati nella parte inferiore della plancia nello stesso luogo in cui si trovavano.',
        source: 'Guida al cattivo.',
      },
      {
        card: 'Potere dello Stregone',
        question:
          'Le due azioni sono opzionali. È possibile giocare la carta anche senza svolgere nessuna delle due azioni.',
        source: 'Testo della carta.',
      },
      {
        card: 'Abu & Aladdin',
        question:
          'Se Abu viene giocato nello stesso luogo di Aladdin (e viceversa), Abu NON può prendere un Oggetto già assegnato ad Aladdin (e viceversa).',
        source: 'Servizio clienti Ravensburger Italia.',
      },
    ],
  },

  {
    villainId: 'prince-john',
    villainName: 'Principe Giovanni',
    cards: [
      {
        card: 'Tendere una Trappola',
        question:
          'Muovere un Alleato è opzionale, ma l’azione Scontro è obbligatoria. Non è necessario utilizzare l’Alleato mosso nell’azione Scontro.',
        source: 'Testo della carta.',
      },
      {
        card: 'Sir Biss',
        question:
          'Sir Biss consente di svolgere un’azione coperta una sola volta. Non si può eseguire nuovamente quell’azione anche se l’Eroe che la copriva viene sconfitto.',
        source: 'Regolamento di gioco.',
      },
      {
        card: 'Rubare ai Ricchi',
        question:
          'Quando l’Eroe bersaglio viene sconfitto, il Potere “ritorna” al Principe Giovanni, non viene “ottenuto”, quindi non conta ai fini dell’attivazione di carte innescate dal guadagnare Potere.',
        source: 'Aaron Donogh, designer del gioco.',
      },
      {
        card: 'Lady Marian',
        question:
          'Se Robin Hood è già nel Reame quando Lady Marian viene sconfitta e Robin Hood ha del Potere rubato da Rubare ai Ricchi, il Potere viene restituito al Calderone e non al Principe Giovanni. Se Lady Marian viene sconfitta da un Alleato con la Freccia dorata, Robin Hood viene trovato prima di ottenere Potere con la Freccia, quindi si otterrebbe 1 solo Gettone Potere.',
        source: 'Regolamento di gioco.',
      },
      {
        card: 'Freccia Dorata',
        question:
          'Se la Freccia Dorata è assegnata ad un Alleato usato per sconfiggere Robin Hood, si ottengono 2 Gettoni Potere, perché Robin Hood sparisce dal Reame prima che si inneschi l’effetto della Freccia Dorata.',
        source: 'Regolamento di gioco.',
      },
      {
        card: 'Robin Hood',
        question:
          'Il potere “ritornato” al Principe Giovanni da un Eroe su cui è stato giocato Rubare ai Ricchi NON viene influenzato da Robin Hood, quindi non si riceve un Gettone Potere in meno. Stessa cosa vale per il Potere rubato da Little John.',
        source: 'Aaron Donogh, designer del gioco.',
      },
    ],
  },

  {
    villainId: 'queen-of-hearts',
    villainName: 'Regina di Cuori',
    mechanics: [
      {
        question:
          'Se c’è più di un Eroe nello stesso luogo di un Eroe rimpicciolito, questi è l’unico Eroe a coprire un’azione. Gli altri Eroi non coprono alcuna azione finché l’Eroe rimpicciolito non viene sconfitto o mosso.',
        source: 'Ruby Wishnietsky, designer del gioco.',
      },
      {
        question:
          'La priorità degli effetti delle dimensioni è INGRANDITO → RIMPICCIOLITO → NORMALE.',
        source: 'Ruby Wishnietsky, designer del gioco.',
      },
      {
        question:
          'Quando un Eroe viene Rimpicciolito o Ingrandito il giocatore che lo sta facendo sceglie quale azione coprire. I simboli azione coperti non possono essere cambiati finché l’Eroe non viene riportato alla normalità e poi nuovamente Rimpicciolito o Ingrandito.',
        source: 'Ruby Wishnietsky, designer del gioco.',
      },
      {
        question:
          'Eroi Rimpiccioliti ed Eroi Ingranditi hanno SEMPRE effetto e possono contemporaneamente coinvolgere lo stesso luogo, anche più di uno alla volta. In generale, un Eroe “Alterato” copre SEMPRE l’azione che deve coprire: 1 per gli Eroi Rimpiccioliti, 3 per gli Eroi Ingranditi.',
        source: 'Ruby Wishnietsky, designer del gioco.',
      },
      {
        question:
          'Eroi Ingranditi ed Eroi Normali POSSONO coinvolgere lo stesso luogo e, quindi, coprire entrambi le azioni contemporaneamente.',
        source: 'Ruby Wishnietsky, designer del gioco.',
      },
      {
        question:
          'Eroi Rimpiccioliti ed Eroi Normali NON POSSONO coinvolgere contemporaneamente lo stesso luogo. Se ci sono uno o più Eroi Rimpiccioliti in un luogo, qualsiasi Eroe Normale in quello stesso luogo non copre azioni finché gli Eroi Rimpiccioliti non vengono mossi o sconfitti.',
        source: 'Ruby Wishnietsky, designer del gioco.',
      },
    ],
    cards: [
      {
        card: 'Furia',
        question:
          'Può solo rimpicciolire Eroi in dimensioni normali, non può riportare alla normalità Eroi ingranditi.',
        source: 'Testo della carta.',
      },
    ],
  },

  {
    villainId: 'dr-facilier',
    villainName: 'Dr. Facilier',
    cards: [
      {
        card: 'Disperazione',
        question:
          'Si attiva quando un avversario scarta due o più carte dalla mano, tramite l’azione Scartare o tramite l’effetto di altre carte. Non deve scartarle necessariamente tutte insieme. Giocare un Effetto non conta come scartare una carta, come anche scartare Alleati usati in uno Scontro.',
        source: 'Ruby Wishnietsky, designer del gioco.',
      },
      {
        card: 'Terrore',
        question:
          'Il Potere necessario per azionare questa Condizione non deve essere necessariamente guadagnato tutto insieme.',
        source: 'Regolamento di gioco.',
      },
    ],
  },

  {
    villainId: 'hades',
    villainName: 'Ade',
    mechanics: [
      {
        question:
          'I Titani non sono Alleati, quindi non azionano le Condizioni altrui che si riferiscono ad Alleati.',
        source: 'Regolamento di gioco.',
      },
    ],
    cards: [
      {
        card: 'Prepariamoci al Primo Round',
        question:
          'Quando mossi di due luoghi, i Titani scavalcano qualunque luogo intermedio (quindi evitano le abilità di Eroi posizionati nel mezzo) e possono usare la loro abilità solo una volta, perché il movimento è unico.',
        source: 'Testo della carta.',
      },
      {
        card: 'Pegaso',
        question: 'Muovere un Titano con Pegaso innesca la sua abilità.',
        source: 'Testo della carta.',
      },
    ],
  },

  {
    villainId: 'evil-queen',
    villainName: 'Regina Cattiva',
    cards: [
      {
        card: 'Vi Schiaccerò!',
        question: 'Può essere usata anche se c’è più di un Eroe in quel luogo.',
        source: 'Testo della carta.',
      },
      {
        card: 'Specchio Magico & Polvere di Mummia',
        question:
          'La carta Fato e il segnalino Veleno vanno pescate/ottenuti solo al termine dell’azione Fato, non prima. Pescare una carta con lo Specchio Magico, nonostante il testo della carta, rimane un’azione opzionale, come specificato nella Guida Cattivo.',
        source: 'Ruby Wishnietsky, designer del gioco.',
      },
      {
        card: 'Il Primo Bacio d’Amore',
        question:
          'Può essere giocata se la Regina non ha Veleno, ma non se non ci sono Eroi nella pila degli scarti.',
        source: 'Stephanie Straw, designer del gioco.',
      },
      {
        card: 'Il Nero della Notte',
        question:
          'Non si può usare il Nero della Notte per svolgere nuovamente un’azione svolta tramite Vi Schiaccerò. Il Nero della Notte specifica che l’azione deve essere disponibile.',
        source: 'Testo della carta.',
      },
    ],
  },

  {
    villainId: 'scar',
    villainName: 'Scar',
    cards: [
      {
        card: 'Sarò Re',
        question:
          'Non può essere messa nella propria mano perché finisce nella pila degli scarti solo dopo che il suo Effetto è terminato.',
        source: 'Regolamento di gioco.',
      },
      {
        card: 'Ingiustizia',
        question:
          'Le carte Fato guardate possono essere scartate entrambe, tenute entrambe o scartata una e tenuta l’altra. Se si hanno due copie di Ingiustizia in mano e si desidera giocarle, bisogna giocarle entrambe allo stesso tempo e risolverne una per una.',
        source: 'Regolamento di gioco.',
      },
      {
        card: 'Banzai la Iena',
        question:
          'La sua abilità entra in funzione anche quando Banzai stesso viene scartato.',
        source: 'Guida al Cattivo.',
      },
      {
        card: 'Bastone di Rafiki',
        question:
          'Se viene sconfitto un Eroe con il Bastone di Rafiki assegnato, questo NON attiva le Condizioni altrui basate sullo sconfiggere Eroi, perché, da regolamento, un Eroe è considerato sconfitto quando viene scartato dal Reame in seguito ad un’azione Scontro o all’effetto di una carta.',
        source: 'Regolamento di gioco.',
      },
    ],
  },

  {
    villainId: 'ratigan',
    villainName: 'Rattigan',
    cards: [
      {
        card: 'Dirigibile',
        question:
          'L’Oggetto o l’Alleato da muovere deve trovarsi nello stesso luogo del Dirigibile.',
        source:
          'Nella traduzione italiana manca la specifica “at its location”, presente in lingua originale.',
      },
    ],
  },

  {
    villainId: 'yzma',
    villainName: 'Yzma',
    mechanics: [
      {
        question:
          'Le carte Fato che hanno come abilità di rimescolare uno o più mazzi possono avere come bersaglio anche i mazzi da cui la carta Fato è stata pescata. Se nessuna carta di un mazzo Fato può essere giocata, il mazzo viene rimescolato e rimesso a posto. Nessuna carta viene scartata.',
        source: 'Regolamento di gioco.',
      },
    ],
    cards: [
      {
        card: 'Sonno di Bellezza',
        question:
          'Yzma può scegliere di svolgere una, tutte o nessuna delle azioni di Sonno di Bellezza all’inizio del suo turno successivo. Una Crudele Ironia può giocare questa carta se è la prima ed unica azione del turno.',
        source: 'Testo della carta.',
      },
      {
        card: 'Ferocia',
        question:
          'Attenzione all’errore nella carta in alcune versioni. È 3 o superiore per sconfiggere un Eroe con 3 o meno.',
        source: 'Testo della carta.',
      },
      {
        card: 'Pugnale',
        question:
          'Se Kronk diventa un Eroe e ha già il pugnale assegnato, il Pugnale rimane assegnato a lui anche nella parte superiore del Reame. Quando Kronk viene scartato dal Reame, il Pugnale torna in mano al giocatore.',
        source: 'Testo della carta.',
      },
      {
        card: 'Chicha',
        question:
          'Il testo di Chicha è da intendersi come “perde FINO A 2 Gettoni Potere”, quindi se Yzma ha meno di 2 Gettoni Potere quando si muove nel luogo di Chicha, deve perderli tutti quanti.',
        source: 'Stephanie Straw, designer del gioco.',
      },
      {
        card: 'Kronk & La Via dello Sballo',
        question:
          'Quando Kronk raggiunge 3 Gettoni Potere su di sé e viene spostato nella parte alta del Reame, il Potere rimane su di lui perché può essere recuperato in ogni momento con la Via dello Sballo.',
        source: 'Testo della carta.',
      },
      {
        card: 'Occhio al Ritmo',
        question:
          'Se è l’unica carta rimasta dei mazzi Fato, bisogna scegliere un Eroe dalla pila degli scarti, mescolare gli scarti per formare quattro nuovi mazzi senza la carta scelta e Occhio al Ritmo, mescolare l’Eroe scelto in fino a due mazzi e infine scartare Occhio al Ritmo.',
        source: 'Ruby & Karla, designer del gioco.',
      },
    ],
  },

  {
    villainId: 'mother-gothel',
    villainName: 'Madre Gothel',
    cards: [
      {
        card: 'Egocentrica',
        question:
          'Attivabile anche se viene mosso un Oggetto o un Alleato durante un’azione Fato, come anche un Eroe con un Oggetto assegnato.',
        source: 'Regolamento di gioco.',
      },
      {
        card: 'Inganno & Ora mi Trasformo nella Cattiva',
        question:
          'Vale la regola del poter svolgere le azioni sulla carta per poterla giocare. Se non si ha almeno un Segnalino Fiducia da perdere, non possono essere giocate.',
        source: 'Regolamento di gioco.',
      },
      {
        card: 'Flynn Rider',
        question:
          'Può essere giocata anche se Madre Gothel ha meno di due segnalini Fiducia. Se viene sconfitto, Madre Gothel guadagna comunque 2 segnalini Fiducia.',
        source: 'Stephanie Straw, designer del gioco.',
      },
    ],
  },

  {
    villainId: 'pete',
    villainName: 'Gambadilegno',
    cards: [
      {
        card: 'Bandito',
        question:
          'Se si gioca più di un Bandito grazie alla sua abilità, bisogna comunque pagare il costo di ogni singolo Bandito.',
        source: 'Testo della carta.',
      },
      {
        card: 'Pappagallo',
        question: 'Recuperare una carta dalla pila degli Scarti è opzionale.',
        source: 'Stephanie Straw, designer del gioco.',
      },
      {
        card: 'Pippo',
        question:
          'La sua abilità fa il cambio di due segnalini Obiettivo adiacenti l’uno all’altro.',
        source: 'Errore di adattamento italiano in alcune versioni.',
      },
      {
        card: 'Gioco di Forza & Topolino',
        question:
          'Se Gambadilegno spende 6 gettoni Potere con Topolino nel Reame, Gioco di Forza non può essere risolto. Ma se Gambadilegno spende parte dei 6 gettoni, sconfigge Topolino e dopo spende i gettoni rimanenti, allora Gioco di Forza può essere risolto.',
        source: 'Testo della carta.',
      },
    ],
  },

  {
    villainId: 'gaston',
    villainName: 'Gaston',
    cards: [
      {
        card: 'Avvenente Quanto Me',
        question:
          'Tutte le azioni extra fornite da carte di altri avversari contano al numero minimo di quattro richiesto per attivare Avvenente Quanto Me. Nel caso in cui l’ultima delle quattro azioni avversarie sia un’azione Fato, bisogna attendere che questa sia conclusa per poter giocare Avvenente Quanto Me.',
        source: 'Regolamento di gioco.',
      },
      {
        card: 'Prenda Me al Suo Posto',
        question:
          'Le carte rivelate dal mazzo Fato, che non siano Eroi, non vanno scartate, ma vanno rimescolate nel mazzo Fato. Nel caso in cui l’eroe giocato da Prenda Me al Suo Posto sia Belle non è possibile rimuovere un Ostacolo.',
        source: 'Testo della carta.',
      },
      {
        card: 'Se ne Vada!',
        question:
          'La formulazione del suo testo non recita “fino a”, come accade in Venga Sotto alla Luce. Per questo motivo, con Se ne Vada è possibile rimuovere 3 e solo 3 Ostacoli.',
        source: 'Testo della carta.',
      },
      {
        card: 'Le Tont',
        question:
          'L’abilità di Le Tont è obbligatoria, quindi gli Alleati usati nello Scontro tornano in mano al giocatore, compreso Le Tont se ha partecipato allo Scontro.',
        source: 'Testo della carta.',
      },
      {
        card: 'Mrs. Bric & Chicco',
        question:
          'Se l’Invenzione di Maurice è assegnata ad un Eroe, quando Mrs Bric e Chicco vengono giocati può essere assegnata ad un qualunque altro Eroe.',
        source:
          'Confermato da Lord of the Board, playtester, a Villainous Italia.',
      },
      {
        card: 'La Rosa',
        question:
          'Se l’altra carta Fato rivelata non può essere giocata, oppure la Rosa è stata rivelata tramite Inganno di Jafar e Ursula, si può comunque risolvere il testo della Rosa nella sua interezza. La Rosa viene scartata dopo aver giocato l’altra carta Fato rivelata.',
        source: 'Canale YouTube di Ravensburger America.',
      },
      {
        card: 'Bestia',
        question:
          'La sua abilità è obbligatoria, anche se è stato Gaston a giocarla tramite Prenda Me al Suo Posto. Quindi un qualsiasi numero di Alleati presenti nel luogo in cui viene giocata la Bestia devono essere mossi in uno e un solo luogo.',
        source: 'Testo della carta.',
      },
      {
        card: 'Sei Proprio Tu',
        question:
          'Può essere giocata SOLO e SOLTANTO se manca almeno un Ostacolo da ogni luogo. Se anche solo un luogo ha ancora tutti e due gli Ostacoli, Sei Proprio Tu non può essere giocata.',
        source: 'Testo della carta.',
      },
      {
        card: 'Maurice',
        question:
          'Quando Maurice viene giocato e l’Invenzione di Maurice viene trovata, l’Invenzione può essere assegnata a lui o a qualunque altro Eroe nel suo stesso luogo.',
        source: 'Testo della carta.',
      },
      {
        card: 'Invenzione di Maurice',
        question:
          'È un Oggetto da assegnare ad un Eroe. Se non ci sono Eroi nel Reame, non può essere giocata. Ignorare il valore in Forza presente nell’angolo inferiore sinistro, è da considerarsi un errore di stampa.',
        source:
          'Confermato da Lord of the Board, playtester, a Villainous Italia.',
      },
      {
        card: 'Mostrami la Bestia',
        question:
          'L’esatto scopo di questa carta è ancora oscuro. Consigliamo di utilizzarla per rimuovere un Ostacolo, se la Bestia è in gioco, o per rimpiazzarne uno, se Belle è in gioco, così da potersi preparare ad usare carte che rimuovono un determinato numero di Ostacoli in un colpo solo.',
        source:
          'Confermato da Lord of the Board, playtester, a Villainous Italia.',
      },
      {
        card: 'Mi Hai Salvato la Vita',
        question:
          'Può essere usata per riposizionare anche un solo Ostacolo in un singolo luogo, dovuto al fatto che il testo originale recita “all”.',
        source: 'Testo della carta.',
      },
    ],
  },

  {
    villainId: 'lady-tremaine',
    villainName: 'La Matrigna',
    mechanics: [
      {
        question:
          'Le uniche carte che possono essere mosse o giocate nella Sala da Ballo sono il Principe, Cenerentola con il Vestito da Ballo, Anastasia con il Vestito da Ballo, Genoveffa con il Vestito da Ballo. Non possono neanche essere giocati Oggetti nella Sala da Ballo, perché altrimenti sfuggirebbero alla protezione di Lucifero e agli effetti di Giac.',
        source: 'Guida al cattivo.',
      },
    ],
    cards: [
      {
        card: 'Ho Detto Se',
        question: 'Non viene rimischiata nel mazzo rimescolato.',
        source: 'Regolamento di gioco.',
      },
      {
        card: 'Stupidi Scherzi',
        question:
          'Può essere scelta una carta che non può essere giocata, annullando il Fato. Se si sceglie un Effetto, il giocatore che scaglia il Fato decide come applicarlo. Se si sceglie un Eroe, la Matrigna sceglie dove giocarlo, ma il giocatore che scaglia il Fato ne risolve gli Effetti. Questa carta non può annullare le restrizioni del Principe, delle Scarpette e di Cenerentola Col Vestito da Ballo.',
        source: 'Mike Mulvihill, designer del gioco.',
      },
      {
        card: 'Lucifero',
        question:
          'Ogni Eroe che condivide in un qualunque momento lo stesso luogo di Lucifero, che sia perché Eroe e/o Lucifero vengono mossi o giocati nello stesso luogo, viene intrappolato. Il segnalino Trappola rimane sull’Eroe anche quando Lucifero viene mosso o scartato dal luogo dell’Eroe intrappolato.',
        source:
          'Confermato da Lord of the Board, playtester, a Villainous Italia.',
      },
      {
        card: 'La Chiave',
        question:
          'Può essere giocata anche se Cenerentola non è in gioco. Cenerentola Col Vestito da Ballo può essere mossa, ma non intrappolata.',
        source:
          'Specifiche di Mike Mulvihill, designer del gioco, e confermate da Lord of the Board, playtester, a Villainous Italia.',
      },
      {
        card: 'Giac',
        question: 'Non può scartare le Scarpette di Cristallo.',
        source: 'Lord of the Board, playtester, e altri playtester.',
      },
      {
        card: 'Principe',
        question:
          'Quando il Principe viene rivelato durante un’azione Fato, deve essere immediatamente giocato e l’altra carta Fato rivelata deve essere scartata.',
        source:
          'Confermato da Lord of the Board, playtester, a Villainous Italia.',
      },
      {
        card: 'Cenerentola Col Vestito da Ballo',
        question:
          'Se Cenerentola col Vestito da Ballo viene giocata in sostituzione di Cenerentola e Cenerentola è intrappolata, perde il segnalino Trappola dato che Cenerentola col Vestito da Ballo non può essere intrappolata.',
        source: 'Testo della carta.',
      },
    ],
  },

  {
    villainId: 'king-cornelius',
    villainName: 'Re Cornelius',
    cards: [
      {
        card: 'Nati dalla Pentola',
        question:
          'Possono essere giocati solo sostituendo i Soldati Antichi prima dell’inizio del turno di Re Cornelius se è visibile il Potere della Pentola Magica. Il loro costo zero segnalato in alto a sinistra NON significa che possono essere giocati gratuitamente tramite un’azione Giocare una carta.',
        source: 'Guida al cattivo.',
      },
      {
        card: 'Abbiamo Fatto un Patto',
        question:
          'Non viene rimischiata insieme alla pila degli scarti del mazzo Fato.',
        source: 'Regolamento di gioco.',
      },
      {
        card: 'Le Streghe di Morva',
        question:
          'Il giocatore che scaglia il Fato decide cosa deve fare Re Cornelius. In caso sia stato deciso che Re Cornelius deve scartare carte, Re Cornelius decide quali. Re Cornelius non può perdere i Gettoni Potere se ne ha meno di 2.',
        source: 'Traduzione italiana imprecisa.',
      },
    ],
  },

  {
    villainId: 'madame-mim',
    villainName: 'Maga Magò',
    cards: [
      {
        card: 'Deterò Io le Regole',
        question:
          'Può essere usata per sconfiggere UNA qualunque trasformazione di Merlino, non tutte le trasformazioni di Merlino.',
        source: 'Testo della carta.',
      },
      {
        card: 'La Magnifica, Splendida Maga Magò',
        question:
          'Non va rimescolata insieme alle altre carte nella pila degli scarti del mazzo Cattivo.',
        source: 'Regolamento di gioco.',
      },
      {
        card: 'Anacleto',
        question:
          'Non può essere giocato se il mazzo delle Trasformazioni di Merlino è vuoto.',
        source: 'Testo della carta.',
      },
    ],
  },

  {
    villainId: 'lotso',
    villainName: 'Lotso',
    cards: [
      {
        card: 'Benvenuti al Sunnyside',
        question: 'Vd. Regole Generali, num. 8.',
        source: 'Regolamento di gioco.',
      },
      {
        card: 'Profuma di Fragole',
        question:
          'Bisogna attendere la fine dell’azione Fato per usare questa Condizione. Non viene rimescolata insieme al resto della pila degli scarti del mazzo.',
        source: 'Regolamento di gioco.',
      },
      {
        card: 'Bimbo',
        question: 'Le altre carte rivelate vanno rimischiate nel mazzo Fato.',
        source: 'Testo della carta.',
      },
      {
        card: 'Il Ciondolo di Daisy',
        question: 'Può essere giocata anche se Bimbo non è nel Reame di Lotso.',
        source: 'Testo della carta.',
      },
      {
        card: 'Woody',
        question:
          'Gli Eroi possono essere mossi anche in luoghi diversi fuori dall’Aula Bruco.',
        source: 'Testo della carta.',
      },
      {
        card: 'Cappello di Woody',
        question:
          'Bisogna piazzare un gettone -1 Forza su ogni Eroe quando si gioca il Cappello, ad eccezione di Woody. Per quanto riguarda Rex, ottiene -1 nei casi specificati nella FAQ.',
        source:
          'Regole condivise stabilite con la community americana, presumibilmente con l’approvazione dei playtester.',
      },
    ],
  },

  {
    villainId: 'syndrome',
    villainName: 'Sindrome',
    cards: [
      {
        card: 'Identificarsi Prego',
        question:
          'Non può muovere l’Omnidroide v.10 quando è in cima al Reame.',
        source: 'Regolamento di gioco.',
      },
      {
        card: 'Chi è Super Adesso?',
        question:
          'Fa riferimento al costo effettivo di una carta pagata dall’avversario, non al costo stampato sulla carta.',
        source: 'Testo della carta.',
      },
      {
        card: 'Omnidroide v.10',
        question:
          'Va sempre giocato al Centro di Metroville. Se il Telecomando non è presente o è sotto il controllo di Sindrome, va giocato nella parte alta del Reame. Se il Telecomando di Sindrome è assegnato ad un Eroe, va giocato nella parte bassa del Reame.',
        source:
          'Meccanica confermata da Lord of the Board, playtester, a Villainous Italia.',
      },
      {
        card: 'Lavoro di Squadra',
        question:
          'Va scartato prima di guardare le sei carte in cima al mazzo. Nel caso in cui vengano rivelate due copie di Lavoro di Squadra il loro effetto si annulla a vicenda e dovrà esserne giocata una copia sola. Se l’altra carta Fato rivelata non può essere giocata, Lavoro di Squadra può comunque essere giocata. Se c’è bisogno di rimescolare gli scarti del mazzo per rivelare sei carte, Lavoro di Squadra NON viene rimescolata insieme agli scarti.',
        source: 'Regolamento di gioco + presumibili specifiche di playtester.',
      },
    ],
  },

  {
    villainId: 'oogie-boogie',
    villainName: 'Bau Bau',
    cards: [
      {
        card: 'È una Vacanza',
        question:
          'Se È una Vacanza dovesse scartare Jack Skeletron, è considerato un Eroe, dato che non è stato giocato dal mazzo Fato.',
        source: 'Testo della carta.',
      },
      {
        card: 'Pipistrelli & Chi Abbiamo Qui?',
        question:
          'Se usate Chi Abbiamo Qui? e il lancio dei dadi risulta in un 8 o più i Pipistrelli non vengono scartati, dato che l’Effetto di Chi Abbiamo Qui? è in funzione e finisce di risolversi prima di quello dei Pipistrelli.',
        source: 'Regolamento di gioco.',
      },
      {
        card: 'Che Ti Ha Portato Babbo Natale?',
        question:
          'È possibile decidere anche di non scartare alcuna carta, ma di pescarne comunque due.',
        source: 'Testo della carta.',
      },
      {
        card: 'Salve, Bau',
        question:
          'La riduzione di 2 alla somma del lancio di dadi va effettuata solo dopo aver considerato altre eventuali variazioni fornite da abilità di altre carte, inclusi i Dadi Truccati. Il -2 inflitto da Salve, Bau sarà quindi l’ultimissimo calcolo da fare per ottenere il risultato finale.',
        source: 'Regolamento di gioco.',
      },
      {
        card: 'Sally',
        question:
          'Può essere giocata anche nello stesso luogo dove si trova già il Bau Bau, nonostante la sua abilità imponga di muovere la pedina dove si trova Sally. Gli Eroi possono sempre essere giocati in un luogo che non sia bloccato, a prescindere da che le loro abilità possano essere o meno risolte completamente.',
        source: 'Regolamento di gioco.',
      },
      {
        card: 'Il Sindaco del Paese di Halloween',
        question:
          'Quando il Sindaco viene sconfitto, è il Bau Bau che rivela carte dal mazzo Fato e decide dove giocare l’Eroe pescato. Le carte Fato non utilizzate vanno rimescolate nel mazzo. Se viene pescato Jack Skeletron, avendo la dicitura Eroe, deve essere giocato, ma come Effetto perché viene giocato dal mazzo Fato.',
        source: 'Regolamento di gioco + testo della carta.',
      },
      {
        card: 'Dottor Finkelstein',
        question:
          'Una volta sconfitto, va rimescolato all’interno del mazzo, senza che ci sia bisogno di metterlo in cima.',
        source:
          'Confermato da Lord of the Board, playtester, a Villainous Italia.',
      },
    ],
  },

  {
    villainId: 'shere-khan',
    villainName: 'Shere Khan',
    mechanics: [
      {
        question:
          'Più di un segnalino Fuoco può essere impilato su una stessa azione.',
        source:
          'Confermato da Lord of the Board, playtester, a Villainous Italia.',
      },
    ],
    cards: [
      {
        card: 'Bravi! Bravi!',
        question:
          'Due copie di Bravi! Bravi! possono essere giocate per svolgere la stessa azione nello stesso turno, dato che è l’Effetto della carta che consente di svolgere l’azione; non la si sta svolgendo direttamente.',
        source:
          'Regole condivise stabilite con la community americana, presumibilmente con l’approvazione dei playtester.',
      },
      {
        card: 'Ehi, Cugino',
        question:
          'Se decidete di non giocare la carta Alleato rivelata, questa viene scartata insieme alle altre carte.',
        source: 'Testo della carta.',
      },
      {
        card: 'Spera in Me',
        question:
          'Potete decidere di rimescolare nel mazzo un numero qualunque di carte, da 0 a 3, quindi anche nessuna, il che rende Spera in Me giocabile anche se non si ha una pila degli scarti.',
        source: 'Testo della carta.',
      },
      {
        card: 'Bagheera',
        question:
          'Se decidete di sfruttare l’abilità di Bagheera, dovete necessariamente muovere tutti gli Eroi e tutti gli Alleati nel luogo di Bagheera in altri luoghi, non solo alcuni.',
        source: 'Testo della carta.',
      },
      {
        card: 'È Mio Amico',
        question:
          'Questa carta può sempre essere scelta per un’azione Fato. In questo caso, scegliereste semplicemente un luogo e tutti gli eventuali Eroi lì presenti otterrebbero un +1 di Forza. Se non ci sono Eroi, giocate e scartate semplicemente la carta.',
        source: 'Testo della carta.',
      },
      {
        card: 'Il Micio di Casa',
        question:
          'Potete sempre scegliere questa carta e decidere di non svolgere nessuno dei suoi due effetti o solo uno dei due.',
        source: 'Testo della carta.',
      },
    ],
  },

  {
    villainId: 'king-candy',
    villainName: 'Re Candito',
    mechanics: [
      {
        question:
          'Se l’effetto di alcune carte farà arretrare la pedina di Re Candito o il segnalino Corsa prima della Grande Corsa, avranno entrambi bisogno di compiere un giro completo della pista per poter vincere. Il segnalino Corsa copre le azioni su cui si trova e impedisce di svolgerle. Il segnalino Corsa rimane fermo nel Reame se tutti i Glitch dovessero essere rimossi da Vanellope.',
        source:
          'Specifiche confermate da Lord of the Board, playtester, a Villainous Italia.',
      },
    ],
    cards: [
      {
        card: 'Scarafoidi Canditi',
        question:
          'Se gli Scarafoidi Canditi sono bersaglio dell’effetto di Non le Permetterò di Correre non si muovono in un altro luogo e non ottengono +1 Forza, perché questo accade solo quando vengono effettivamente utilizzati in un’azione Scontro che li scarterebbe come risultato.',
        source: 'Testo della carta.',
      },
      {
        card: 'Via!',
        question:
          'Questo Effetto può essere giocato anche se non si hanno Alleati in campo o se non li si desidera muovere.',
        source: 'Testo della carta.',
      },
      {
        card: 'Turbastico',
        question:
          'Ai fini dell’utilizzo di Turbastico sono considerate coperte anche le azioni sulle quali si trova il segnalino Corsa.',
        source: 'Lord of the Board, playtester.',
      },
      {
        card: 'Non le Permetterò di Correre',
        question:
          'Potete decidere di non muovere alcun Alleato per giocare questa carta (un qualsiasi numero implica anche 0), ma dovete comunque poter svolgere un’azione Scontro per poterla giocare.',
        source: 'Testo della carta.',
      },
      {
        card: 'Tassa d’Iscrizione alla Corsa',
        question:
          'La Tassa d’Iscrizione alla Corsa va giocata PRIMA di muovere la pedina di Re Candito. Tuttavia, può essere giocata solo DOPO aver risolto il movimento del segnalino Corsa. Quindi, nell’ordine: 1) muovere il segnalino Corsa, 2) giocare Tassa d’Iscrizione, 3) dichiarare il movimento della pedina e muoverla.',
        source: 'Guida al cattivo.',
      },
      {
        card: 'Glitch',
        question:
          'A prescindere che Vanellope abbia o no già un Glitch assegnato, nel momento in cui viene giocata una carta Glitch il turno di Re Candito termina sempre. Nel caso in cui, per effetto di un Glitch, Re Candito e il segnalino Corsa si trovino a tagliare il traguardo nello stesso momento, la vittoria va a Re Candito, dato che sul testo della carta il suo nome viene prima di quello del segnalino Corsa.',
        source: 'Testo della carta.',
      },
      {
        card: 'La Medaglia dell’Eroe di Ralph',
        question:
          'Vanellope Von Schweetz potrà essere giocata nello stesso luogo di Ralph solo se sconfiggerete Ralph con la Medaglia assegnata. Sconfiggere Ralph Spaccatutto senza Medaglia assegnata non avrà alcun effetto.',
        source: 'Testo della carta.',
      },
      {
        card: 'Principessa Vanellope',
        question:
          'Il testo è formulato con “fino a quattro spazi azione”, il che significa che potete scegliere di giocare questa carta e di non muovere affatto Re Candito.',
        source: 'Testo della carta.',
      },
      {
        card: 'Il Faro',
        question:
          'Potete giocare questa carta anche se non ci sono Scarafoidi Canditi in gioco, in quanto vi chiede di scegliere un luogo e di muovere lì tutti gli Scarafoidi eventualmente presenti in luoghi adiacenti. La seconda parte della carta è opzionale, quindi non vi impedisce di giocarla.',
        source: 'Testo della carta.',
      },
      {
        card: 'La Medaglia di Vanellope',
        question:
          'Questa carta può essere giocata anche se non ci sono Eroi nella pila degli scarti dato che il testo è formulato con il “puoi”. Quindi potete scegliere questa carta, tra le due opzioni di Fato, ma decidere di non sfruttarne l’abilità.',
        source: 'Testo della carta.',
      },
    ],
  },

  {
    villainId: 'davy-jones',
    villainName: 'Davy Jones',
    mechanics: [
      {
        question:
          'Un Eroe non può avere più di un segnalino Tesoro assegnato. Quando viene sconfitto un Eroe con un segnalino Tesoro assegnato non rivelato, il segnalino ritorna a faccia in giù nella riserva.',
        source: 'Guida al cattivo.',
      },
    ],
    cards: [
      {
        card: 'La Ciurma dell’Olandese Volante & L’Equipaggio',
        question:
          'Le loro modifiche in Forza sono dinamiche. Bisogna ricordarsi di aggiungere o togliere di volta in volta i gettoni Forza in base alla presenza di Alleati o Eroi.',
        source: 'Testo della carta.',
      },
      {
        card: 'Temi tu la Morte?',
        question:
          'Può essere giocata anche se non ci sono più Eroi nel mazzo Fato, con il risultato di ricomporre tutto il mazzo Fato, rimescolando gli scarti.',
        source: 'Regolamento di gioco.',
      },
      {
        card: 'Primo Ufficiale Maccus',
        question:
          'L’Alleato da scartare al posto del Primo Ufficiale Maccus non deve essere stato coinvolto nell’azione Scontro.',
        source: 'Regolamento di gioco.',
      },
      {
        card: 'L’Olandese Volante',
        question: 'Può essere usato per svolgere un’azione coperta.',
        source:
          'Confermato da Lord of the Board, playtester, a Villainous Italia.',
      },
      {
        card: 'E Dove Punta?',
        question:
          'Entrambe le frasi sono formulate con il “puoi”, quindi si può decidere di giocare questa carta, ma non risolverne gli effetti.',
        source: 'Testo della carta.',
      },
      {
        card: 'Elizabeth Swann',
        question:
          'La sua modifica in Forza è cumulativa per ogni Eroe che viene giocato successivamente a lei, quindi non perde Forza se altri Eroi abbandonano il Reame.',
        source: 'Testo della carta.',
      },
      {
        card: 'James Norrington',
        question:
          'Nel caso in cui abbia il Cuore come segnalino assegnato, bisogna prima risolvere gli effetti di James Norrington quando viene sconfitto e poi quelli del Cuore. Quindi bisogna prima ottenere 2 gettoni Potere e poi perdere tutto il Potere raccolto.',
        source: 'Regolamento di gioco.',
      },
    ],
  },

  {
    villainId: 'tamatoa',
    villainName: 'Tamatoa',
    cards: [
      {
        card: 'Il Potere della Creazione ai Crostacei',
        question:
          'Nonostante nell’edizione italiana la carta sia formulata con “rimescola”, è da intendersi con “puoi rimescolare” a causa della mancata stampa dell’ultima revisione inviata negli USA.',
        source: 'Testo della carta.',
      },
      {
        card: 'Si Confondono in Tanti, Lattanti',
        question:
          'Può essere giocata solo al termine del turno di un avversario, se questi ha svolto due o meno azioni.',
        source:
          'Confermato da Lord of the Board, playtester, a Villainous Italia.',
      },
      {
        card: 'Con una Bella Canzone',
        question:
          'Può essere giocata solo se si hanno almeno tre carte nella pila degli scarti del mazzo Cattivo.',
        source: 'Testo della carta.',
      },
      {
        card: 'Non Sei Così Forte',
        question:
          'Ai fini dell’attivazione di questa Condizione, contare la Forza degli Alleati avversari già modificata da altri effetti passivi non appena entrano nel Reame, come ad esempio le Iene Affamate di Scar o la Ciurma dell’Olandese Volante di Davy Jones.',
        source: 'Regolamento di gioco.',
      },
      {
        card: 'In Trappola',
        question:
          'Se un’azione è coperta da un Eroe e da Qualcosa che Splende in contemporanea, In Trappola non può comunque permettere a Tamatoa di svolgerla. Dev’essere coperta solo da un Eroe. Se l’azione coperta si trova nello stesso luogo di Tamatoa e l’Eroe che la copriva viene sconfitto nello stesso turno, Tamatoa NON può svolgere una seconda volta quell’azione se già l’aveva svolta con In Trappola.',
        source: 'Regolamento di gioco + testo della carta.',
      },
      {
        card: 'L’Amo di Maui',
        question:
          'Quando è sotto al controllo di Tamatoa e si è bersaglio di un’azione Fato occorre attendere che questa sia terminata per ottenere 2 gettoni Potere. Se viene giocata l’Ora di Maui e si perde il controllo dell’Amo, non si possono ottenere i 2 Gettoni Potere.',
        source: 'Regolamento di gioco.',
      },
      {
        card: 'L’Ora di Maui',
        question:
          'Per forza di cose, se l’Amo di Maui si trova nella mano di Tamatoa, va comunque preso e assegnato a Maui. Se Maui ha dei gettoni Forza con sé, quando viene trovato, questi vanno scartati.',
        source:
          'Confermato da Lord of the Board, playtester, a Villainous Italia.',
      },
      {
        card: 'Maui Insetto',
        question:
          'I gettoni Forza eventualmente assegnati agli Alleati non vengono scartati. In caso ci siano Alleati con lo stesso nome, ma con segnalini Forza diversi, è necessario ridistribuirli casualmente.',
        source:
          'Confermato da Lord of the Board, playtester, a Villainous Italia.',
      },
      {
        card: 'Maui Hei Hei',
        question:
          'Se viene rivelata tramite Non è Proprio l’Ora di Maui, deve essere obbligatoriamente giocata.',
        source: 'Testo della carta.',
      },
    ],
  },
];
