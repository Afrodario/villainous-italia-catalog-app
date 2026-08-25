import { Location } from './location.model';

export interface Realm {
  id: string;
  villainId: string;
  image: string;
  locations: Location[];
}
