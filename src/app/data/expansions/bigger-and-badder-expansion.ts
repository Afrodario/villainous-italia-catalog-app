import { Expansion } from '../../models/expansion.model';
import { LOTSO } from '../villains/5-bigger-and-badder/lotso-villain';
import { MADAM_MIM } from '../villains/5-bigger-and-badder/madam-mim-villain';
import { SYNDROME } from '../villains/5-bigger-and-badder/syndrome-villain';

export const BIGGER_AND_BADDER: Expansion = {
  id: 'bigger-and-badder',
  name: 'Bigger and Badder',
  coverImage: 'assets/images/expansions/bigger-and-badder-box.png',
  releaseDate: new Date('2022-02'),
  expansionNumber: 5,
  villains: [SYNDROME, LOTSO, MADAM_MIM],
  nameReference:
    'The name references a line where Syndrome calls his Omnidroid "bigger" and "badder".',
  isBaseSet: false,
};
