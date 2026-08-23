import { Expansion } from '../../models/expansion.model';
import { RATIGAN } from '../villains/2-evil-comes-prepared/ratigan-villain';
import { SCAR } from '../villains/2-evil-comes-prepared/scar-villain';
import { YZMA } from '../villains/2-evil-comes-prepared/yzma-villain';

export const EVIL_COMES_PREPARED: Expansion = {
  id: 'evil-comes-prepared',
  name: 'Evil Comes Prepared',
  coverImage: 'assets/images/expansions/evil-comes-prepared-box.png',
  releaseDate: new Date('2019-07'),
  expansionNumber: 2,
  villains: [SCAR, YZMA, RATIGAN],
  nameReference:
    'The name is a reference to the song "Be Prepared", sung by Scar.',
};
