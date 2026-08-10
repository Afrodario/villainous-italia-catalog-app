import { Scenario } from '../models/scenario.model';
import { Card } from '../models/card.model';

export const JAFAR_SCENARIO: Scenario = {
  id: 'jafar-01',
  title: 'Il potere della Lampada',
  villain: 'Jafar',
  description:
    'Jafar è vicino al suo obiettivo. La Lampada Magica è nelle tue mani. Quale sarà la tua prossima mossa?',
  coverImage: 'assets/images/cards/jafar/Jafar.png',
  startSceneId: 'scene-01',
  initialGameState: {
    power: 7,
    hand: [],
    heroCount: 2,
    allyCount: 1,
    objectiveProgress: 2,
    villainDeck: [],
    playArea: [],
    discardPile: [],
    hasMagicLamp: true,

    sceneActions: {
      completedActions: [],
      discardedCards: 0,
      playedCards: 0,
      drawnCards: 0,
    },
  },
  //initialHand: ['magic-lamp', 'iago', 'palace-guard', 'hypnotize'],
  initialHandSize: 4,
  scenes: [
    {
      id: 'scene-01',
      title: 'Il momento decisivo',
      description:
        'È il tuo turno. Hai 7 Power e la Lampada Magica. Devi decidere come procedere.',
      image: 'assets/images/cards/jafar/Jafarrealm.jpg',
      availableActions: undefined,
      choices: [
        {
          id: 'choice-01',
          label: 'Muovi la pedina alle Strade di Agrabah',
          nextSceneId: 'scene-02-streets-of-agrabah',
          //   effects: {
          //     power: -2,
          //   },
        },
        {
          id: 'choice-02',
          label: 'Muovi la pedina all Oasi',
          nextSceneId: 'scene-03',
          //   effects: {
          //     power: -3,
          //     //handSize: -1
          //   },
        },
        {
          id: 'choice-03',
          label: 'Muovi la pedina alla Caverna delle Meraviglie',
          nextSceneId: 'scene-04',
          //   conditions: {
          //     requiresMagicLamp: true,
          //   },
          //   effects: {
          //     power: -5,
          //     hasMagicLamp: false,
          //     objectiveProgress: 1,
          //   },
        },
      ],
    },

    {
      id: 'scene-02-streets-of-agrabah',
      title: 'Le strade di Agrabah',
      description:
        'Hai scelto di muoverti alle Strade di Agrabah. Ora hai quattro nuove possibilità.',
      image: 'assets/images/jafar-scene-02.jpg',

      availableActions: ['fate', 'discard', 'play-card', 'draw-card'],

      choices: [
        {
          id: 'streets-choice-gain-1-power',
          label: 'Ottenere 1 Gettone Potere',
          nextSceneId: 'scene-03-streets-gained-1-power',
          effects: {
            power: 1,
          },
        },
        {
          id: 'streets-choice-fate',
          label: 'Scagliare il Fato',
          nextSceneId: 'scene-04',
        },
        {
          id: 'streets-choice-discard',
          label: 'Scartare',
          nextSceneId: 'scene-02-streets-of-agrabah',
          action: 'discard',
          disabledAfterAction: 'discard',
        },
        {
          id: 'streets-choice-play-a-card',
          label: 'Giocare una carta',
          nextSceneId: 'scene-04',
        },
      ],
    },

    {
      id: 'scene-03-streets-gained-1-power',
      title: 'Rifornimenti in corso',
      description:
        'Hai deciso di ottenere 1 Gettone Potere. Ora hai ancora più risorse. Quale altra azione vuoi svolgere?',
      image: 'assets/images/jafar-scene-03.jpg',
      availableActions: undefined,
      choices: [
        {
          id: 'streets-choice-fate',
          label: 'Scagliare il Fato',
          nextSceneId: 'scene-04',
        },
        {
          id: 'streets-choice-discard',
          label: 'Scartare',
          nextSceneId: 'scene-04',
        },
        {
          id: 'streets-choice-play-a-card',
          label: 'Giocare una carta',
          nextSceneId: 'scene-04',
        },
      ],
    },

    {
      id: 'scene-04-streets-discard',
      title: 'La vittoria è vicina',
      description:
        'Hai raggiunto il momento decisivo. È il momento di completare il tuo piano.',
      image: 'assets/images/jafar-scene-04.jpg',
      availableActions: ['discard'],
      choices: [
        {
          id: 'choice-05',
          label: 'Conquista il potere della Lampada',
          nextSceneId: 'final-victory',
          conditions: {
            minCardsDiscardedThisScene: 1,
          },
        },
      ],
    },

    {
      id: 'scene-04',
      title: 'La vittoria è vicina',
      description:
        'Hai raggiunto il momento decisivo. È il momento di completare il tuo piano.',
      image: 'assets/images/jafar-scene-04.jpg',
      choices: [
        {
          id: 'choice-05',
          label: 'Conquista il potere della Lampada',
          nextSceneId: 'final-victory',
        },
      ],
    },

    {
      id: 'final-victory',
      title: 'Vittoria!',
      description:
        'Hai portato Jafar alla vittoria e raggiunto il suo obiettivo.',
      image: 'assets/images/jafar-victory.jpg',
      choices: [],
      isFinal: true,
      finalMessage:
        'Complimenti! La tua strategia ha portato Jafar alla vittoria.',
    },
  ],
};
