import { Expansion } from '../../models/expansion.model';
import { EVIL_QUEEN } from '../villains/1-wicked-to-the-core/evil-queen-villain';
import { MALEFICENT } from '../villains/0-the-worst-takes-it-all/maleficent-villain';
import { URSULA } from '../villains/0-the-worst-takes-it-all/ursula-villain';
import { SANDERSON_SISTERS } from '../villains/sanderson-sisters-villain';

export const DARKNESS_BREWING: Expansion = {
  id: 'darkness-brewing',
  name: 'Darkness Brewing',
  coverImage: 'assets/images/expansions/darkness-brewing-box.png',
  releaseDate: new Date('2026-07'),
  expansionNumber: 0,
  villains: [EVIL_QUEEN, MALEFICENT, SANDERSON_SISTERS, URSULA],
  nameReference:
    'It is intended for new players and includes 3 previously released Villains and 1 new Villain.',
  isBaseSet: true,
};