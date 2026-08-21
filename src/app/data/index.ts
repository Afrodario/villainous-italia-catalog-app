import { CAPTAIN_HOOK_CARDS } from './cards/captain-hook-cards';
import { JAFAR_CARDS } from './cards/jafar-cards';
import { MALEFICENT_CARDS } from './cards/maleficent-cards';
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
