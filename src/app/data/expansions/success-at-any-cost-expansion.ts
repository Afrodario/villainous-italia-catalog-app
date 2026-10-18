import { Expansion } from '../../models/expansion.model';
import { ERNESTO_DE_LA_CRUZ } from '../villains/9-success-at-any-cost/ernesto-de-la-cruz.villain';
import { PRINCE_HANS } from '../villains/9-success-at-any-cost/prince-hans.villain';

export const SUCCESS_AT_ANY_COST: Expansion = {
  id: 'success-at-any-cost',
  name: 'Success at Any Cost',
  coverImage: 'assets/images-webp/expansions/success-at-any-cost-box.webp',
  releaseDate: new Date('2026-07'),
  expansionNumber: 9,
  villains: [ERNESTO_DE_LA_CRUZ, PRINCE_HANS],
  nameReference:
    'Its name is based on how the Villains will do whatever it takes to achieve their goals. It could also be based on the line by Ernesto "Success doesn’t come for free."',
    isBaseSet: false,
};