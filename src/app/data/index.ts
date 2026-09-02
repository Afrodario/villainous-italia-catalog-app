import { CAPTAIN_HOOK_CARDS } from './cards/0-the-worst-takes-it-all/captain-hook-cards';
import { JAFAR_CARDS } from './cards/0-the-worst-takes-it-all/jafar-cards';
import { MALEFICENT_CARDS } from './cards/0-the-worst-takes-it-all/maleficent-cards';
import { PRINCE_JOHN_CARDS } from './cards/0-the-worst-takes-it-all/prince-john-cards';
import { QUEEN_OF_HEARTS_CARDS } from './cards/0-the-worst-takes-it-all/queen-of-hearts-cards';
import { URSULA_CARDS } from './cards/0-the-worst-takes-it-all/ursula-cards';
import { DR_FACILIER_CARDS } from './cards/1-wicked-to-the-core/dr-facilier-cards';
import { EVIL_QUEEN_CARDS } from './cards/1-wicked-to-the-core/evil-queen-cards';
import { HADES_CARDS } from './cards/1-wicked-to-the-core/hades-cards';
import { RATIGAN_CARDS } from './cards/2-evil-comes-prepared/ratigan-cards';
import { SCAR_CARDS } from './cards/2-evil-comes-prepared/scar-cards';
import { YZMA_CARDS } from './cards/2-evil-comes-prepared/yzma-cards';
import { CRUELLA_DE_VIL_CARDS } from './cards/3-perfectly-wretched/cruella-de-vil-cards';
import { MOTHER_GOTHEL_CARDS } from './cards/3-perfectly-wretched/mother-gothel-cards';
import { PETE_CARDS } from './cards/3-perfectly-wretched/pete-cards';
import { CAPTAIN_HOOK } from './villains/0-the-worst-takes-it-all/captain-hook-villain';
import { JAFAR } from './villains/0-the-worst-takes-it-all/jafar-villain';
import { MALEFICENT } from './villains/0-the-worst-takes-it-all/maleficent-villain';
import { PRINCE_JOHN } from './villains/0-the-worst-takes-it-all/prince-john-villain';
import { QUEEN_OF_HEARTS } from './villains/0-the-worst-takes-it-all/queen-of-hearts-villain';
import { URSULA } from './villains/0-the-worst-takes-it-all/ursula-villain';
import { DR_FACILIER } from './villains/1-wicked-to-the-core/dr-facilier-villain';
import { EVIL_QUEEN } from './villains/1-wicked-to-the-core/evil-queen-villain';
import { HADES } from './villains/1-wicked-to-the-core/hades-villain';
import { RATIGAN } from './villains/2-evil-comes-prepared/ratigan-villain';
import { SCAR } from './villains/2-evil-comes-prepared/scar-villain';
import { YZMA } from './villains/2-evil-comes-prepared/yzma-villain';
import { CRUELLA_DE_VIL } from './villains/3-perfectly-wretched/cruella-de-vil-villain';
import { MOTHER_GOTHEL } from './villains/3-perfectly-wretched/mother-gothel-villain';
import { PETE } from './villains/3-perfectly-wretched/pete-villain';
import { SANDERSON_SISTERS } from './villains/sanderson-sisters-villain';
export * from './expansions';
export * from './villains/0-the-worst-takes-it-all/jafar-villain';

export const ALL_CARDS = [
  ...JAFAR_CARDS,
  ...CAPTAIN_HOOK_CARDS,
  ...MALEFICENT_CARDS,
  ...PRINCE_JOHN_CARDS,
  ...QUEEN_OF_HEARTS_CARDS,
  ...URSULA_CARDS,
  ...EVIL_QUEEN_CARDS,
  ...DR_FACILIER_CARDS,
  ...HADES_CARDS,
  ...SCAR_CARDS,
  ...YZMA_CARDS,
  ...RATIGAN_CARDS,
  ...CRUELLA_DE_VIL_CARDS,
  ...MOTHER_GOTHEL_CARDS,
  ...PETE_CARDS
];

export const ALL_VILLAINS = [
  CAPTAIN_HOOK,
  JAFAR,
  MALEFICENT,
  PRINCE_JOHN,
  QUEEN_OF_HEARTS,
  URSULA,
  EVIL_QUEEN,
  DR_FACILIER,
  HADES,
  SCAR,
  YZMA,
  RATIGAN,
  CRUELLA_DE_VIL,
  MOTHER_GOTHEL,
  PETE,
  SANDERSON_SISTERS
];
