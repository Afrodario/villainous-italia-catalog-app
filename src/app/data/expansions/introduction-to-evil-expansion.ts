import { Expansion } from '../../models/expansion.model';
import { CAPTAIN_HOOK } from '../villains/0-the-worst-takes-it-all/captain-hook-villain';
import { MALEFICENT } from '../villains/0-the-worst-takes-it-all/maleficent-villain';
import { PRINCE_JOHN } from '../villains/0-the-worst-takes-it-all/prince-john-villain';
import { URSULA } from '../villains/0-the-worst-takes-it-all/ursula-villain';

export const INTRODUCTION_TO_EVIL: Expansion = {
  id: 'introduction-to-evil',
  name: 'Introduction to Evil',
  coverImage: 'assets/images/expansions/introduction-to-evil-box.png',
  releaseDate: new Date('2024-08'),
  expansionNumber: 0,
  villains: [CAPTAIN_HOOK, MALEFICENT, PRINCE_JOHN, URSULA],
  nameReference:
    'It is intended for new players, and contains revamped versions of four Villains originally published in The Worst Takes It All.',
  isBaseSet: true,
};