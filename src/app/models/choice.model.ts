import { Conditions } from './condition.model';
import { Effects } from './effect.model';
import { GameAction } from './game-action.model';

export interface Choice {
  id: string;
  label: string;
  nextSceneId: string;
  effects?: Effects;
  conditions?: Conditions;

  // Attiva un'azione quando viene selezionata la Choice
  action?: GameAction;

  // Rende la Choice non più disponibile
  // dopo che l'azione indicata è stata completata
  disabledAfterAction?: GameAction;
}