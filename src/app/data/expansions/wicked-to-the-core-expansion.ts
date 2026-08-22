import { Expansion } from '../../models/expansion.model';
import { DR_FACILIER } from '../villains/1-wicked-to-the-core/dr-facilier-villain';
import { EVIL_QUEEN } from '../villains/1-wicked-to-the-core/evil-queen-villain';
import { HADES } from '../villains/1-wicked-to-the-core/hades-villain';

export const WICKED_TO_THE_CORE: Expansion = {
  id: 'wicked-to-the-core',
  name: 'Wicked to the Core',
  coverImage: 'assets/images/expansions/wicked-to-the-core-box.png',
  releaseDate: new Date('2019-03'),
  expansionNumber: 1,
  villains: [EVIL_QUEEN, DR_FACILIER, HADES],
  nameReference:
    'The name is a reference to the poisoned apple used by the Evil Queen.',
};
