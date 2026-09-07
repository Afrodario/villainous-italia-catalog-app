import { Expansion } from '../../models/expansion.model';
import { OOGIE_BOOGIE } from '../villains/6-filled-with-fright/oogie-boogie-villain';

export const FILLED_WITH_FRIGHT: Expansion = {
  id: 'filled-with-fright',
  name: 'Filled with Fright',
  coverImage: 'assets/images/expansions/filled-with-fright-box.png',
  releaseDate: new Date('2023-10'),
  expansionNumber: 6,
  villains: [OOGIE_BOOGIE],
  nameReference:
    'The name references one of Oogie Boogie’s lines in the song "This Is Halloween".',
    isBaseSet: false,
};