import { Expansion } from '../../models/expansion.model';
import { KING_CANDY } from '../villains/7-sugar-and-spite/king-candy-villain';
import { SHERE_KHAN } from '../villains/7-sugar-and-spite/shere-khan-villain';

export const SUGAR_AND_SPITE: Expansion = {
  id: 'sugar-and-spite',
  name: 'Sugar and Spite',
  coverImage: 'assets/images/expansions/sugar-and-spite-box.png',
  releaseDate: new Date('2024-06'),
  expansionNumber: 7,
  villains: [KING_CANDY, SHERE_KHAN],
  nameReference:
    'Its name is a play on the phrase "sugar and spice and everything nice".',
    isBaseSet: false,
};