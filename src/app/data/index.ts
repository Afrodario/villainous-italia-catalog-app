import { CAPTAIN_HOOK_CARDS } from './cards/captain-hook-cards';
import { JAFAR_CARDS } from './cards/jafar-cards';
import { MALEFICENT_CARDS } from './cards/maleficent-cards';
import { PRINCE_JOHN_CARDS } from './cards/prince-john-cards';
import { QUEEN_OF_HEARTS_CARDS } from './cards/queen-of-hearts-cards';
import { URSULA_CARDS } from './cards/ursula-cards';
import { CAPTAIN_HOOK } from './villains/captain-hook-villain';
import { EVIL_QUEEN } from './villains/evil-queen-villain';
import { JAFAR } from './villains/jafar-villain';
import { MALEFICENT } from './villains/maleficent-villain';
import { PRINCE_JOHN } from './villains/prince-john-villain';
import { QUEEN_OF_HEARTS } from './villains/queen-of-hearts-villain';
import { URSULA } from './villains/ursula-villain';
export * from './expansions';
export * from './villains/jafar-villain';

export const ALL_CARDS = [
  ...JAFAR_CARDS,
  ...CAPTAIN_HOOK_CARDS,
  ...MALEFICENT_CARDS,
  ...PRINCE_JOHN_CARDS,
  ...QUEEN_OF_HEARTS_CARDS,
  ...URSULA_CARDS,
];

export const ALL_VILLAINS = [
  CAPTAIN_HOOK,
  JAFAR,
  MALEFICENT,
  PRINCE_JOHN,
  QUEEN_OF_HEARTS,
  URSULA,
  EVIL_QUEEN,
];
