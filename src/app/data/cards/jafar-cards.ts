import { CardDefinition } from '../../models/card-definition.model';
import { Card } from '../../models/card.model';

export const JAFAR_CARDS: CardDefinition[] = [
  {
    id: 'magic-lamp',
    villainId: 'jafar',
    expansionId: 'the-worst-takes-it-all',
    name: 'Lampada Magica',
    image: 'assets/images/cards/jafar/Magic_Lamp.png',
    type: 'item',
    cost: 4,
    quantity: 1,
    description:
      'Magic Lamp may only be played to the Cave of Wonders. When Magic Lamp is played, find Genie and play him to the Cave of Wonders.',
    strategy: {
      paragraphs: [
        'L’Oggetto più importante nel mazzo Cattivo di Jafar.',
        'Scartare carte frequentemente serve principalmente per arrivare alla Lampada. Cercate di giocarla quanto prima, ovviamente solo se prima avrete sbloccato la Caverna delle Meraviglie con l’Amuleto dello Scarabeo.',
        'Usare Chiaroveggenza, inoltre, è un altro buon modo per cercare di raggiungerla quanto prima.',
      ],
      warning:
        'Quando giocherete la Lampada e troverete il Genio, se dovesse già essere nel vostro Reame ricordatevi sempre di scartare ogni eventuale Oggetto a lui assegnato. Inoltre, NON ipnotizzate il Genio prima di aver giocato la Lampada Magica, altrimenti tornerà automaticamente nella parte alta della plancia e dovrete ricominciare dal principio.',
    },
    isFateCard: false,
  },

  {
    id: 'iago',
    villainId: 'jafar',
    expansionId: 'the-worst-takes-it-all',
    name: 'Iago',
    image: 'assets/images/cards/jafar/Iago.png',
    type: 'ally',
    cost: 1,
    quantity: 1,
    description:
      'Activate: Pay 1 Power. Move Iago and one unattached Item at his location to an adjacent unlocked location.',
    strategy: {
      paragraphs: [
        'Lo scopo principale di Iago è aiutarvi a trasportare la Lampada Magica fino al Palazzo del Sultano più velocemente.',
        'Una volta giocata la Lampada, spostatela all’Oasi e, nel turno successivo, giocate Iago sempre all’Oasi e, con un’azione Attivare libera, muovete Iago e Lampada. In questo modo avrete ridotto di due turni il tempo solitamente necessario per muovere la Lampada.',
        'Quando Iago avrà compiuto il suo compito, sperando che non venga scartato prima, sarà un ottimo bersaglio per Sacrificio Necessario.',
      ],
      warning: '',
    },
    strength: 1,
    isFateCard: false,
  },

  {
    id: 'palace-guard',
    villainId: 'jafar',
    expansionId: 'the-worst-takes-it-all',
    name: 'Guardia di Palazzo',
    image: 'assets/images/cards/jafar/Palace_Guard.png',
    type: 'ally',
    cost: 1,
    quantity: 3,
    description: 'No additional Ability.',
    strategy: {
      paragraphs: [
        'Un semplice ed economico Alleato. Se avete Potere in abbondanza, sparpagliatele per il Reame, in modo da essere pronti ad affrontare qualunque Eroe o a giocare Sacrificio Necessario.',
        'Se poi avete giocato Razoul, potrete giocarle gratis dove si trova lui e poi muoverle.',
      ],
      warning: '',
    },
    strength: 2,
    isFateCard: false,
  },

  {
    id: 'hypnotize',
    villainId: 'jafar',
    expansionId: 'the-worst-takes-it-all',
    name: 'Ipnotizzare',
    image: 'assets/images/cards/jafar/Hypnotize.png',
    type: 'effect',
    cost: '?',
    quantity: 2,
    faq: [
      'Any Fate Items attached to the Hero are discarded.',
      'If Abu or Aladdin had a Villain Item attached to them, it is returned to Jafar at that location, except Scimitar, which is discarded instead.',
      'If Princess Jasmine is Hypnotized, Rajah still gets the Strength bonus while he is in the Hero side of the Board.',
      'If the Genie is Hypnotized before the Magic Lamp is played, he will need to be Hypnotized again once the Magic Lamp is played in order to fulfill the winning condition.',
      'Hypnotized Heroes count as Allies for the purposes of Condition triggers, such as for Cunning.',
    ],
    description:
      "Defeat a Hero and move them to the bottom of your board. That Hero is under your control and treated as an Ally with the same Strength. Ignore their ability. The cost to play Hypnotize is equal to the Hero's Strength.",
    strategy: {
      paragraphs: [
        'Parte delle condizioni di vittoria di Jafar ruota attorno a questa carta, dato che dovrà ipnotizzare il Genio. Ne avete solo due copie, ma potete recuperarne all’occorrenza con Manipolazione o con l’Attivazione del Bastone del Serpente.',

        'Oltre al Genio, Abu ed Aladdin dovrebbero sempre essere ipnotizzati, per impedire loro di rubare la Lampada Magica.',

        'Ricordate che gli Eroi ipnotizzati sono considerati a tutti gli effetti Alleati, quindi possono essere utilizzati nello Scontro e valgono per le attivazioni delle Condizioni altrui.',

        'Inoltre, dato che Ipnotizzare sconfigge un Eroe, come in uno Scontro, i suoi eventuali Oggetti assegnati vanno sempre scartati, salvo indicazioni contrarie (come per Abu o Aladdin).',
      ],
      warning:
        'Se Abu o Aladdin vengono ipnotizzati mentre sono in possesso di un Oggetto rubato che necessita di essere assegnato ad un Alleato, tipo una Scimitarra, quell’Oggetto viene scartato. Se, invece, la principessa Jasmine viene ipnotizzata, Rajah continua ad avere il suo bonus in Forza, almeno fin quando rimane nella parte superiore del Reame.',
    },
    isFateCard: false,
  },

  {
    id: 'a-snake-am-i',
    villainId: 'jafar',
    expansionId: 'the-worst-takes-it-all',
    name: 'Ah, sarei un serpente?',
    image: 'assets/images/cards/jafar/A_Snake_Am_I.png',
    type: 'effect',
    cost: 2,
    quantity: 2,
    description:
      "Defeat a Hero with a Strength of 4 or less at Jafar's location.",
    strategy: {
      paragraphs: [
        'Grazie a questo Effetto, sarete in grado di sconfiggere in un istante qualunque Eroe del mazzo Fato di Jafar, ad eccezione del Genio.',
        'Il lato negativo è il fatto che Jafar deve trovarsi nello stesso luogo dell’Eroe, per poterlo giocare, il che significa che non potrà mai essere giocato al Palazzo del Sultano e quindi non potrà mai sconfiggere Abu o Aladdin, se dovessero sottrarvi la Lampada proprio in quel luogo.',
      ],
      warning:
        'un Eroe soggetto ad Ah, Sarei un Serpente? è a tutti gli effetti considerato sconfitto ai fini dell’attivazione delle Condizioni altrui. ',
    },
    isFateCard: false,
  },

  {
    id: 'deception',
    villainId: 'jafar',
    expansionId: 'the-worst-takes-it-all',
    name: 'Inganno',
    image: 'assets/images/cards/jafar/Deception.png',
    type: 'condition',
    quantity: 2,
    description:
      "During their turn, if another player has two or more Items in their Realm, you may play Deception. Reveal and play the top card of that player's Fate deck.",
    strategy: {
      paragraphs: [
        'Una delle Condizioni più potenti del gioco, dato che può interrompere all’improvviso i piani dell’avversario e rallentare il suo gioco per consentire a Jafar di raggiungere i suoi Oggetti chiave più in fretta.',
        'E’ anche piuttosto semplice da attivare, considerando che diversi Cattivi avranno almeno due Oggetti nel loro Reame ad un certo punto, soprattutto Ursula o Rattigan.',
        'Ricordate sempre che valgono sia gli Oggetti del mazzo Cattivo che quelli del mazzo Fato.',
      ],
      warning: '',
    },
    isFateCard: false,
  },

  {
    id: 'sorcerous-power',
    villainId: 'jafar',
    expansionId: 'the-worst-takes-it-all',
    name: 'Potere dello Stregone',
    image: 'assets/images/cards/jafar/Sorcerous_Power.png',
    type: 'effect',
    cost: 2,
    quantity: 2,
    description:
      'You may move a Hero to any unlocked location. You may move an Ally to any unlocked location.',
    strategy: {
      paragraphs: [
        'Solitamente, questa carta non ha modo di essere utilizzata spesso, a meno che non vogliate liberare da un Eroe un luogo o spostare un Alleato dove potrà servire ad uno Scontro.',
        'Tuttavia, in una determinata circostanza, può attuare un trucchetto devastante. Può, infatti, muovere Abu o Aladdin, in possesso della Lampada Magica, fino al Palazzo del Sultano senza che dobbiate spostarli voi di turno in turno, risparmiando un bel po’ di tempo.',
      ],
      warning: '',
    },
    isFateCard: false,
  },
  {
    id: 'necessary-sacrifice',
    villainId: 'jafar',
    expansionId: 'the-worst-takes-it-all',
    name: 'Sacrificio Necessario',
    image: 'assets/images/cards/jafar/Necessary_Sacrifice.png',
    type: 'effect',
    cost: 0,
    quantity: 3,
    description:
      'Discard any Ally or Item under your control and gain 3 Power.',
    strategy: {
      paragraphs: [
        'Considerando che Jafar ha bisogno di diverso Potere per giocare i suoi Oggetti chiave e per ipnotizzare gli Eroi, Sacrificio Necessario è un ottimo modo per accumulare in un colpo solo un bel po’ di Potere.',
        'I bersagli ideali sono, in quest’ordine, la Scimitarra, una Guardia di Palazzo, Gazeem (per poter sfruttare la sua abilità e recuperare un Oggetto dalla Pila degli Scarti) e Iago (dopo che ha già portato la Lampada Magica fino al Palazzo del Sultano).',
        'Ricordate che gli Eroi ipnotizzati sono considerati Alleati, quindi possono essere scartati anche loro da Sacrificio Necessario (sebbene, in questo modo, potranno sempre rispuntare dal vostro mazzo Fato).',
      ],
      warning: '',
    },
    isFateCard: false,
  },
  {
    id: 'scimitar',
    villainId: 'jafar',
    expansionId: 'the-worst-takes-it-all',
    name: 'Scimitarra',
    image: 'assets/images/cards/jafar/Scimitar.png',
    type: 'item',
    cost: 0,
    quantity: 3,
    strengthModifier: +1,
    description:
      'When Scimitar is played, attach it to an Ally. That Ally gets +1 Strength.',
    strategy: {
      paragraphs: [
        'Se giocate Chiaroveggenza, aspettatevi di veder spuntare spesso una Scimitarra, in quanto ce ne sono tre copie nel mazzo Cattivo.',
        'Oltre a dare un bonus in Forza ad un Alleato, cosa che può sempre essere utile per un’azione Scontro, rappresenta il bersaglio ideale per Sacrificio Necessario.',
        'Se state ancora cercando Lampada e Amuleto e in campo avete degli Alleati, non fa mai male giocare una Scimitarra, considerando che è gratis, in modo da sfoltire la mano e avere comunque un piccolo beneficio.',
      ],
      warning: '',
    },
    isFateCard: false,
  },
  {
    id: 'scrying',
    villainId: 'jafar',
    expansionId: 'the-worst-takes-it-all',
    name: 'Chiaroveggenza',
    image: 'assets/images/cards/jafar/Scrying.png',
    type: 'effect',
    cost: 1,
    quantity: 3,
    description:
      'Choose either Item or Ally. Reveal cards from the top of your deck until you reveal a card of the chosen type. Put that card into your hand. Discard the rest.',
    strategy: {
      paragraphs: [
        'All’inizio della partita, Chiaroveggenza è di vitale importanza per trovare velocemente l’Amuleto dello Scarabeo e la Lampada Magica.',
        'Una buona strategia è di giocare questo Effetto dove potete anche scartare, in modo da liberarvi dell’Oggetto rivelato, se non è di vostro gradimento.',
        'Dato che le carte vanno rivelate, quindi mostrate a tutti i giocatori, ricordate sempre di annunciare prima di scoprirle dal mazzo se scegliete un Oggetto o un Alleato.',
      ],
      warning: '',
    },
    isFateCard: false,
  },
  {
    id: 'giant-hourglass',
    villainId: 'jafar',
    expansionId: 'the-worst-takes-it-all',
    name: 'Clessidra Gigante',
    image: 'assets/images/cards/jafar/Giant_Hourglass.png',
    type: 'item',
    cost: 1,
    quantity: 2,
    description:
      'Activate: Heroes at this location get -2 Strength until the end of your turn.',
    strategy: {
      paragraphs: [
        'Il costo esiguo di questo Oggetto lo rende valido da tenere in campo, se avete Potere in abbondanza. Ricordate sempre che il suo effetto, se attivato, vale solo fino alla fine del turno.',
        'La sua utilità principale è quella di ridurre la Forza del Genio prima di poterlo ipnotizzare, ma può anche essere utile contro Abu, Tappeto e il Sultano.',
        'Il luogo migliore per sfruttarla è l’Oasi, considerando che dispone di due azioni Giocare una Carta, oltre all’Attivare, se intendete ipnotizzare il vostro bersaglio.',
        'Diventa inutile per sconfiggere un Eroe al Palazzo del Sultano, dato che l’azione Attivare sarà sempre bloccata dall’Eroe, quindi assicuratevi di giocare altrove la Clessidra.',
        'Non dimenticate che, in caso di bisogno, è un ottimo bersaglio per Sacrificio Necessario.',
      ],
      warning: '',
    },
    isFateCard: false,
  },
  {
    id: 'manipulation',
    villainId: 'jafar',
    expansionId: 'the-worst-takes-it-all',
    name: 'Manipolazione',
    image: 'assets/images/cards/jafar/Manipulation.png',
    type: 'condition',
    quantity: 2,
    description:
      'During their turn, if another player has three or more Allies in their Realm, you may play Manipulation. Choose any card from your discard pile and put it in your hand.',
    strategy: {
      paragraphs: [
        'Giocata al momento giusto, Manipolazione può farvi risparmiare un bel po’ di tempo, dato che vi consente di recuperare qualunque carta dalla pila degli scarti.',
        'I bersagli principali sono idealmente una copia di Ipnotizzare o, addirittura, uno dei due Oggetti chiave, se ne avete appositamente scartato uno sapendo di poterlo recuperare velocemente, a seconda della vostra strategia.',
        'L’attivazione di Manipolazione, però, è strettamente condizionata dai Cattivi contro i quali state giocando. Contro Capitan Uncino, la Regina di Cuori o Scar sarà molto facilmente giocabile, mentre diventa del tutto inutile contro Ursula o la Regina Cattiva.',
      ],
      warning: '',
    },
    isFateCard: false,
  },
  {
    id: 'gazeem',
    villainId: 'jafar',
    expansionId: 'the-worst-takes-it-all',
    name: 'Gazeem',
    image: 'assets/images/cards/jafar/Gazeem.png',
    type: 'ally',
    cost: 2,
    quantity: 1,
    description:
      'When Gazeem is discarded from your Realm, you may choose an Item from your discard pile and put it into your hand.',
    strength: 2,
    strategy: {
      paragraphs: [
        'Nonostante la sua Forza sia scarsa, Gazeem ha comunque un’utile abilità che giustifica il suo costo.',
        'Nel caso abbiate pescato la Lampada Magica prima dell’Amuleto dello Scarabeo, con Gazeem in campo potrete tranquillamente scartarla, sapendo di poterla poi recuperare scartando a sua volta Gazeem, con un’azione Scontro o, ancora meglio, con Sacrificio Necessario.',
      ],
      warning: '',
    },
    isFateCard: false,
  },
  {
    id: 'razoul',
    villainId: 'jafar',
    expansionId: 'the-worst-takes-it-all',
    name: 'Razoul',
    image: 'assets/images/cards/jafar/Razoul.png',
    type: 'ally',
    cost: 3,
    quantity: 1,
    description:
      "The Cost to play Allies to Razoul's location is reduced by 1 Power.",
    strength: 3,
    strategy: {
      paragraphs: [
        'Razoul è l’Alleato più forte di cui dispone Jafar, ma il suo utilizzo principale è quello di ridurre il costo degli altri Alleati, per aiutarvi a risparmiare Potere.',
        'Iago e le Guardie di Palazzo diventano gratis se vengono giocate dove si trova Razoul. Un buon luogo per giocarlo è l’Oasi, dato che i luoghi che contengono un’azione Ottenere 3 Potere sono quelli più frequentemente coperti da Eroi.',
        'Inoltre, l’Oasi è il luogo ideale anche per giocare Iago, quindi, in questo modo, potrete pagarlo zero.',
      ],
      warning:
        'Razoul non contiene la dicitura "Guardia di Palazzo" nel nome, quindi può essere usato per sconfiggere il Sultano.',
    },
    isFateCard: false,
  },
  {
    id: 'scarab-pendant',
    villainId: 'jafar',
    expansionId: 'the-worst-takes-it-all',
    name: 'Amuleto dello Scarabeo',
    image: 'assets/images/cards/jafar/Scarab_Pendant.png',
    type: 'effect',
    cost: 3,
    quantity: 1,
    description:
      'When Scarab Pendant is played, unlock the Cave of Wonders. At the end of each turn, draw until you have five cards in your hand.',
    strategy: {
      paragraphs: [
        'Un altro Oggetto di vitale importanza, anch’esso da reperire quanto prima, scartando carte e usando Chiaroveggenza.',
        'Una volta giocato, oltre a sbloccare la Caverna delle Meraviglie e darvi accesso alle sue azioni, vi consente di pescare fino a cinque carte alla fine del turno, cosa che vi dà sempre una possibilità in più di trovare la Lampada Magica.',
        'Assicuratevi di tenervi stretto l’Amuleto quando in campo (Abu o Aladdin possono sottrarvelo), a meno di non avere estremo bisogno di Potere e usarlo come bersaglio di Sacrificio Necessario.',
      ],
      warning:
        'Se l’Amuleto dello Scarabeo e la principessa Jasmine, non ipnotizzata, sono in campo allo stesso momento, Jafar potrà pescare come di consueto fino ad avere quattro carte.',
    },
    isFateCard: false,
  },
  {
    id: 'snake-staff',
    villainId: 'jafar',
    expansionId: 'the-worst-takes-it-all',
    name: 'Bastone del Serpente',
    image: 'assets/images/cards/jafar/Snake_Staff.png',
    type: 'effect',
    cost: 2,
    quantity: 1,
    description:
      'Activate: Pay 1 Power. Put a Hypnotize that is in your discard pile into your hand.',
    strategy: {
      paragraphs: [
        'Il fido bastone di Jafar è anche un ottimo strumento per avere sempre la possibilità di recuperare una copia di Ipnotizzare, in caso di necessità, ad un costo tutto sommato esiguo.',
        'Oltretutto, a differenza della Clessidra Gigante, è indipendente dal luogo in cui viene piazzato, quindi potrete utilizzarlo quando vorrete, ammesso di avere sufficiente Potere e un’azione Attivare disponibile.',
      ],
      warning: '',
    },
    isFateCard: false,
  },
  // MAZZO FATO
  {
    id: 'abu',
    villainId: 'jafar',
    expansionId: 'the-worst-takes-it-all',
    name: 'Abu',
    image: 'assets/images/cards/jafar/Abu.png',
    type: 'hero',
    strength: 2,
    quantity: 1,
    description:
      'When Abu is played, you may choose any Item at his location and attach it to him. Jafar cannot use the Item. When Abu is defeated, the Item is returned to Jafar at the same location.',
    strategy: {
      paragraphs: [
        'L’abilità di Abu è identica a quella di Aladdin, con la differenza che Abu ha meno Forza, quindi sarà sempre più semplice da sconfiggere o ipnotizzare, ed è soggetto all’effetto di Brutto Colpo.',
        'Nonostante questo, è una seconda buona scelta da scagliare contro Jafar se dovesse essere vicino alla vittoria.',
      ],
      warning: '',
    },
    isFateCard: true,
  },

  {
    id: 'aladdin',
    villainId: 'jafar',
    expansionId: 'the-worst-takes-it-all',
    name: 'Aladdin',
    image: 'assets/images/cards/jafar/Aladdin.png',
    type: 'hero',
    strength: 4,
    quantity: 1,
    description:
      'When Aladdin is played, you may choose any Item at his location and attach it to him. Jafar cannot use the Item. When Aladdin is defeated, the Item is returned to Jafar at the same location.',
    strategy: {
      paragraphs: [
        'Il nemico principale di Jafar, la cui abilità gli consente di rubare la Lampada Magica e mettere in stallo l’obiettivo di Jafar fin quando non sarà stato sconfitto o ipnotizzato.',
        'In mancanza della Lampada, l’Amuleto e il Bastone del Serpente sono degli ottimi bersagli.',
      ],
      warning:
        'Aladdin può anche sottrarre Oggetti assegnati, come la Scimitarra, dal luogo in cui viene giocato, ma non ottiene alcun bonus in Forza dato che la Scimitarra potenzia solo gli Alleati (inclusi gli Eroi ipnotizzati). Fin quando in possesso di Aladdin, qualunque effetto o condizione di vittoria conferita dall’Oggetto rubato sono annullati. Se Aladdin viene sconfitto o ipnotizzato, l’Oggetto torna in possesso di Jafar nello stesso luogo, ad eccezione della Scimitarra che viene scartata.',
    },
    isFateCard: true,
  },

  {
    id: 'carpet',
    villainId: 'jafar',
    expansionId: 'the-worst-takes-it-all',
    name: 'Tappeto Magico',
    image: 'assets/images/cards/jafar/Carpet.png',
    type: 'hero',
    strength: 2,
    quantity: 1,
    description: 'Jafar must defeat Carpet before defeating other Heroes.',
    strategy: {
      paragraphs: [
        'Fin quando Tappeto è in campo, altri Eroi non possono essere sconfitti o ipnotizzati.',
        'Questo lo rende una scelta ideale se la Lampada Magica è stata già giocata, e il Genio non ancora ipnotizzato, o se Abu o Aladdin l’hanno rubata.',
        'Altrimenti, può anche essere utilizzato per prolungare l’effetto in campo della Principessa Jasmine.',
      ],
      warning: '',
    },
    isFateCard: true,
  },

  {
    id: 'crushing-blow',
    villainId: 'jafar',
    expansionId: 'the-worst-takes-it-all',
    name: 'Brutto Colpo',
    image: 'assets/images/cards/jafar/Crushing_Blow.png',
    type: 'effect',
    quantity: 2,
    description:
      "Discard an Ally with a Strength of 3 or less from Jafar's Realm.",
    strategy: {
      paragraphs: [
        'Questo Effetto può essere molto utile in due principali circostanze: per scartare Iago prima che possa portare la Lampada fino al Palazzo del Sultano, oppure scartare un Eroe ipnotizzato perché possa tornare ad essere una minaccia per Jafar (preferibilmente Abu o Tappeto).',
      ],
      warning:
        'Un Alleato scartato per effetto di Brutto Colpo NON è considerato sconfitto.',
    },
    isFateCard: true,
  },
  {
    id: 'wish',
    villainId: 'jafar',
    expansionId: 'the-worst-takes-it-all',
    name: 'Desiderio',
    image: 'assets/images/cards/jafar/Wish.png',
    type: 'item',
    quantity: 3,
    strengthModifier: 2,
    description:
      'When Wish is played, attach it to a Hero. That Hero gets +2 Strength.',
    strategy: {
      paragraphs: [
        'Il bersaglio ideale di Desiderio è sempre il Genio, ma solo quando la Lampada Magica è già stata giocata e il Genio non è ancora stato ipnotizzato.',
        'In assenza del Genio, Abu o Aladdin, in possesso della Lampada, sono altri due ottimi bersagli. Inoltre, con rispettivamente uno e due Desideri assegnati, Aladdin e Abu possono anche diventare immuni ad Ah, Sarei un Serpente?',
      ],
      warning: '',
    },
    isFateCard: true,
  },
  {
    id: 'narrow-escape',
    villainId: 'jafar',
    expansionId: 'the-worst-takes-it-all',
    name: `C'è mancato poco`,
    image: 'assets/images/cards/jafar/Narrow_Escape.png',
    type: 'effect',
    quantity: 2,
    description: "Choose and play a Hero from Jafar's Fate discard pile.",
    strategy: {
      paragraphs: [
        'Una delle armi più efficaci contro Jafar nel suo mazzo Fato.',
        'La possibilità di riportare in gioco Abu o Aladdin perché possano nuovamente rubare la Lampada Magica può sempre essere utile. Altrimenti, a seconda delle circostanze e della fase di gioco, anche Tappeto o la Principessa Jasmine sono due ottime scelte.',
      ],
      warning: '',
    },
    isFateCard: true,
  },
  {
    id: 'genie',
    villainId: 'jafar',
    expansionId: 'the-worst-takes-it-all',
    name: 'Genio',
    image: 'assets/images/cards/jafar/Genie.png',
    type: 'hero',
    strength: 6,
    quantity: 1,
    description: 'Genie gets +2 Strength if Magic Lamp is at his location.',
    strategy: {
      paragraphs: [
        'A dispetto di quanto si potrebbe pensare, il Genio è un’ottima scelta come Fato, a causa della sua grande Forza.',
        'Fin quando Jafar non giocherà la Lampada Magica, il Genio coprirà insistentemente le azioni nella parte superiore di un suo luogo, costringendo Jafar a scegliere se spendere tempo e risorse per sconfiggerlo o attendere l’arrivo della Lampada per rimuoverlo e rigiocarlo.',
        'Attenzione, però, a non giocare mai i Desideri su di lui prima che la Lampada Magica sia stata giocata da Jafar.',
      ],
      warning: '',
    },
    isFateCard: true,
  },
  {
    id: 'princess-jasmine',
    villainId: 'jafar',
    expansionId: 'the-worst-takes-it-all',
    name: 'Principessa Jasmine',
    image: 'assets/images/cards/jafar/Princess_Jasmine.png',
    type: 'hero',
    strength: 3,
    quantity: 1,
    description:
      'When Jafar draws cards at the end of each turn, he draws one less card.',
    strategy: {
      paragraphs: [
        'Jasmine può essere una vera seccatura per Jafar, a causa della sua abilità, specialmente se l’Amuleto dello Scarabeo non è ancora stato giocato.',
        'Jafar vorrà sconfiggerla il prima possibile, quindi non sarebbe una cattiva idea potenziarla con un Desiderio.',
      ],
      warning:
        'Se Jasmine viene ipnotizzata, la sua abilità non ha più effetto, come con tutti gli Eroi ipnotizzati.',
    },
    isFateCard: true,
  },
  {
    id: 'rajah',
    villainId: 'jafar',
    expansionId: 'the-worst-takes-it-all',
    name: 'Rajah',
    image: 'assets/images/cards/jafar/Rajah.png',
    type: 'hero',
    strength: 4,
    quantity: 1,
    description:
      "Rajah gets +2 Strength if Princess Jasmine is in Jafar's Realm.",
    strategy: {
      paragraphs: [
        'Rajah ha un valore in Forza che lo rende piuttosto ostico, specie se Jasmine è in campo, cosa che lo rende anche immune ad Ah, Sarei un Serpente? Conviene giocarlo in un luogo che Jafar visita spesso, per mettergli ancora di più i bastoni tra le ruote.',
        'Ricordate che Rajah ottiene il bonus in Forza anche se Jasmine è stata ipnotizzata, dato che è ancora presente nel Reame di Jafar.',
      ],
      warning: '',
    },
    isFateCard: true,
  },
  {
    id: 'sultan',
    villainId: 'jafar',
    expansionId: 'the-worst-takes-it-all',
    name: 'Sultano',
    image: 'assets/images/cards/jafar/Sultan.png',
    type: 'hero',
    strength: 2,
    quantity: 1,
    description: 'Palace Guards cannot be used to defeat Sultan.',
    strategy: {
      paragraphs: [
        'Nonostante il Sultano sia piuttosto debole, è immune a metà degli Alleati di Jafar e può essere facilmente utilizzato per bloccargli azioni essenziali.',
        'Tuttavia, Razoul può comunque sconfiggerlo, non avendo la dicitura Guardia di Palazzo nel nome.',
      ],
      warning: '',
    },
    isFateCard: true,
  },
  {
    id: 'treachery',
    villainId: 'jafar',
    expansionId: 'the-worst-takes-it-all',
    name: 'Tradimento',
    image: 'assets/images/cards/jafar/Treachery.png',
    type: 'effect',
    quantity: 1,
    description: 'Jafar loses up to 2 Power.',
    strategy: {
      paragraphs: [
        'Una delle cose che può danneggiare di più Jafar è sicuramente perdere Potere.',
        'Tradimento è un buon modo per mettergli i bastoni tra le ruote ad inizio del gioco, se deve ancora giocare Lampada e Amuleto, o più avanti, quando avrà bisogno di Potere per ipnotizzare il Genio o altri Eroi.',
      ],
      warning: '',
    },
    isFateCard: true,
  },
];
