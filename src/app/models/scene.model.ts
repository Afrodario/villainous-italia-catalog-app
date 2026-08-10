import { Choice } from './choice.model';
import { GameAction } from './game-action.model';

export interface Scene {
  id: string;
  title: string;
  description: string;
  image: string;

  choices: Choice[];

  availableActions?: GameAction[];

  isFinal?: boolean;
  finalMessage?: string;
}
