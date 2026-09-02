import { Villain } from "./villain.model";

export interface Expansion {
  id: string;
  name: string;
  coverImage: string;
  releaseDate: Date;
  expansionNumber: number;
  villains: Villain[];
  nameReference: string;
  isBaseSet: boolean
}
