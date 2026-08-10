import { GameState } from "./game-state.model";
import { Scene } from "./scene.model";

export interface Scenario {
  id: string;
  title: string;
  villain: string;
  description: string;
  coverImage: string;
  startSceneId: string;
  initialGameState: GameState;
  scenes: Scene[];
  initialHand?: string[];
  initialHandSize: number
}
