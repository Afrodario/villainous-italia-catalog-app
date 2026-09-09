export interface SpeedLevelInfo {
  title: string;
  subtitle: string;
  introduction: string[];
  levels: {
    id: 'red' | 'orange' | 'yellow' | 'green';
    label: string;
    description: string;
  }[];
  note: string;
}

export const SPEED_LEVEL_INFO: SpeedLevelInfo = {
  title: 'Livelli di velocità',
  subtitle: 'Classificazione della velocità dei Cattivi',

  introduction: [
    `I <strong>livelli di velocità</strong> sono una classificazione pensata per indicare quanto rapidamente un Cattivo tende, in generale, a raggiungere il proprio obiettivo di vittoria.`,

    `La classificazione tiene conto delle caratteristiche del Cattivo, delle condizioni necessarie per raggiungere il suo obiettivo e della rapidità con cui queste condizioni possono normalmente essere soddisfatte durante una partita.`,

    `La classificazione è stata ideata da <strong>Villainous Italia</strong> e viene, nella maggior parte dei casi, utilizzata durante i tornei e gli eventi ufficiali in Italia per favorire il massimo equilibrio nelle partite. Non è una classificazione pensata o promossa dai designer del gioco.`,
  ],

  levels: [
    {
      id: 'red',
      label: 'Molto lento',
      description:
        'Cattivi che generalmente richiedono molto tempo per completare il proprio obiettivo o che dipendono da condizioni difficili da ottenere.',
    },
    {
      id: 'orange',
      label: 'Lento',
      description:
        'Cattivi con una velocità di vittoria generalmente inferiore alla media.',
    },
    {
      id: 'yellow',
      label: 'Medio',
      description:
        'Cattivi con una velocità di vittoria nella media, senza particolari vantaggi o svantaggi sotto questo aspetto.',
    },
    {
      id: 'green',
      label: 'Veloce',
      description:
        'Cattivi che possono generalmente raggiungere il proprio obiettivo in tempi relativamente brevi.',
    },
  ],

  note: `<strong>Nota:</strong> il livello di velocità rappresenta una valutazione generale e non indica necessariamente il numero di turni necessari per vincere. L'andamento della partita, le azioni degli avversari e la casualità della pesca delle carte possono influenzare significativamente la velocità effettiva di un Cattivo.`,
};
