import { Choice } from './choice.model';

export interface ChoiceViewModel {
  choice: Choice;

  available: boolean;

  active?: boolean;

  lockedMessage?: string;
}
