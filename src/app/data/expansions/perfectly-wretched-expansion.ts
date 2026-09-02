import { Expansion } from '../../models/expansion.model';
import { CRUELLA_DE_VIL } from '../villains/3-perfectly-wretched/cruella-de-vil-villain';
import { MOTHER_GOTHEL } from '../villains/3-perfectly-wretched/mother-gothel-villain';
import { PETE } from '../villains/3-perfectly-wretched/pete-villain';

export const PERFECTLY_WRETCHED: Expansion = {
  id: 'perfectly-wretched',
  name: 'Perfectly Wretched',
  coverImage: 'assets/images/expansions/perfectly-wretched-box.png',
  releaseDate: new Date('2020-03'),
  expansionNumber: 3,
  villains: [CRUELLA_DE_VIL, MOTHER_GOTHEL, PETE],
  nameReference:
    'The name is a quote from a line spoken by Cruella De Vil when we first meet her.',
    isBaseSet: false,
};
