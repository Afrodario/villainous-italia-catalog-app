import { CardInstance } from './card-instance.model';
import { SceneActionState } from './scene-action-state.model';

export interface GameState {
  power: number;

  hand: CardInstance[];

  villainDeck: CardInstance[];

  playArea: CardInstance[];

  discardPile: CardInstance[];

  heroCount: number;

  allyCount: number;

  objectiveProgress: number;

  hasMagicLamp: boolean;

  sceneActions: SceneActionState;
}
