/**
 * Metadati che NON sono presenti nel file Excel.
 *
 * L'Excel contiene nomi e risultati dei tornei, ma non il tour di appartenenza
 * né gli eventuali riconoscimenti speciali.
 *
 * Se in futuro aggiungi un nuovo torneo all'Excel, aggiungilo anche qui.
 */

module.exports = {
  'MODENA PLAY 2023': {
    tour: 'Villainous Italia Tour',
  },
  'ROMA LUDICO 2023': {
    tour: 'Villainous Italia Tour',
  },
  'LUCCA COMICS 2023': {
    tour: 'Villainous Italia Tour',
  },
  'MILANO GAMES WEEK 2023': {
    tour: 'Villainous Italia Tour',
  },
  'VILLAINOUS BEFORE CHRISTMAS 2023': {
    tour: 'Villainous Italia Tour',
  },

  'GOOD TO BE BAD TOUR ROMA APERTURA 2024': {
    tour: 'Good to Be Bad Tour',
  },
  'MODENA PLAY 2024': {
    tour: 'Good to Be Bad Tour',
  },
  'GOOD TO BE BAD TOUR ROMA I 2024': {
    tour: 'Good to Be Bad Tour',
  },
  'LUCCA COMICS 2024': {
    tour: 'Good to Be Bad Tour',
  },
  'GOOD TO BE BAD TOUR ROMA II 2024': {
    tour: 'Good to Be Bad Tour',
  },
  'MILANO GAMES WEEK 2024': {
    tour: 'Good to Be Bad Tour',
  },
  'THE VILLAINOUS BEFORE CHRISTMAS 2024': {
    tour: 'Good to Be Bad Tour',
  },

  'BAD TO THE BONE TOUR ROMA APERTURA 2025': {
    tour: 'Bad to the Bone Tour',
  },
  'BAD TO THE BONE TOUR BOLOGNA PLAY 2025': {
    tour: 'Bad to the Bone Tour',
  },
  'BAD TO THE BONE TOUR ROMA 2025': {
    tour: 'Bad to the Bone Tour',
  },
  'TORNEO VILLAINOUS NAPOLI 2025': {
    tour: 'Bad to the Bone Tour',
  },
  'BAD TO THE BONE TOUR LUCCA COMICS 2025': {
    tour: 'Bad to the Bone Tour',
  },
  'BAD TO THE BONE TOUR ROMA NATALE 2025': {
    tour: 'Bad to the Bone Tour',
    specialResults: [
      {
        value: 5,
        label: 'Vincitore del torneo',
        description:
          'Riconoscimento speciale per la vittoria nel torneo con il maggior numero di iscritti mai organizzato.',
      },
    ],
  },

  'THE BAD SIDE TOUR BOLOGNA 2026': {
    tour: 'The Bad Side Tour',
  },
  'THE BAD SIDE TOUR (INKHEARTS) ROMA 2026': {
    tour: 'The Bad Side Tour',
  },
  'THE BAD SIDE TOUR GAMES ON BOARD 2026': {
    tour: 'The Bad Side Tour',
  },
  'THE BAD SIDE TOUR MILANO DRAFT 2026': {
    tour: 'The Bad Side Tour',
  },
  'THE BAD SIDE TOUR LUCCA COMICS 2026': {
    tour: 'The Bad Side Tour',
  },
};
