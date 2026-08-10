import { GameAction } from './game-action.model';

export interface SceneActionState {
  completedActions: GameAction[];

  discardedCards: number;

  playedCards: number;

  drawnCards: number;
}