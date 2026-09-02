import { Expansion } from '../../models/expansion.model';
import { GASTON } from '../villains/4-despicable-plots/gaston-villain';
import { HORNED_KING } from '../villains/4-despicable-plots/horned-king-villain';
import { LADY_TREMAINE } from '../villains/4-despicable-plots/lady-tremaine-villain';

export const DESPICABLE_PLOTS: Expansion = {
  id: 'despicable-plots',
  name: 'Despicable Plots',
  coverImage: 'assets/images/expansions/despicable-plots-box.png',
  releaseDate: new Date('2021-02'),
  expansionNumber: 4,
  villains: [GASTON, HORNED_KING, LADY_TREMAINE],
  nameReference:
    'The name is inspired by Monsieur D’Arque calling Gaston "despicable".',
  isBaseSet: false,
};
