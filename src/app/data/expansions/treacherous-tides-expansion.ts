import { Expansion } from '../../models/expansion.model';
import { DAVY_JONES } from '../villains/8-treacherous-tides/davy-jones-villain';
import { TAMATOA } from '../villains/8-treacherous-tides/tamatoa-villain';

export const TREACHEROUS_TIDES: Expansion = {
  id: 'treacherous-tides',
  name: 'Treacherous Tides',
  coverImage: 'assets/images-webp/expansions/treacherous-tides-box.webp',
  releaseDate: new Date('2025-07'),
  expansionNumber: 8,
  villains: [DAVY_JONES, TAMATOA],
  nameReference: 'Its name refers to both Villains being ocean-based.',
  isBaseSet: false,
};
