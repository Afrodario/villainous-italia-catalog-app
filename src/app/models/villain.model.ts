import { VillainMechanics } from "./villain-mechanics.model";

export interface Villain {
  id: string;
  name: string;
  expansionId: string;
  portrait: string;
  mover: string;
  mechanics: string | VillainMechanics;
  objective: string;
  objectivePortrait: string;
  quote: string,
  villainDeckBack: string;
  fateDeckBack: string;
  additionalTokens?: boolean;
  additionalTokensPath?: string;
}
