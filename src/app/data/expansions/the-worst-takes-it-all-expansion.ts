import { Expansion } from '../../models/expansion.model';
import { CAPTAIN_HOOK } from '../villains/0-the-worst-takes-it-all/captain-hook-villain';
import { JAFAR } from '../villains/0-the-worst-takes-it-all/jafar-villain';
import { MALEFICENT } from '../villains/0-the-worst-takes-it-all/maleficent-villain';
import { PRINCE_JOHN } from '../villains/0-the-worst-takes-it-all/prince-john-villain';
import { QUEEN_OF_HEARTS } from '../villains/0-the-worst-takes-it-all/queen-of-hearts-villain';
import { URSULA } from '../villains/0-the-worst-takes-it-all/ursula-villain';

export const THE_WORST_TAKES_IT_ALL: Expansion = {
  id: 'the-worst-takes-it-all',
  name: 'The Worst Takes It All',
  coverImage: 'assets/images/expansions/the-worst-takes-it-all-box.png',
  releaseDate: new Date('2018-07'),
  expansionNumber: 0,
  villains: [
    CAPTAIN_HOOK,
    JAFAR,
    MALEFICENT,
    PRINCE_JOHN,
    QUEEN_OF_HEARTS,
    URSULA,
  ],
  nameReference:
    "Slogan originale, probabilmente un gioco di parole sulla canzone 'The Winner Takes It All' degli ABBA",
};
