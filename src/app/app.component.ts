import { Component } from '@angular/core';

import { ScenarioService } from './services/scenario.service';
import { GameEngineService } from './services/game-engine.service';

import { Scenario } from './models/scenario.model';
import { Scene } from './models/scene.model';
import { Choice } from './models/choice.model';
import { GameState } from './models/game-state.model';
import { ScenarioListComponent } from './components/scenario-list.component';
import { GameViewComponent } from './components/game-view/game-view.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { GameplayComponent } from './components/gameplay/gameplay.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ScenarioListComponent,
    GameViewComponent,
    CatalogComponent,
    GameplayComponent,
  ],

  templateUrl: './app.component.html',
})
export class AppComponent {
  scenarios: Scenario[] = [];
  currentScenario: Scenario | null = null;
  currentScene: Scene | null = null;
  gameState: GameState | null = null;
  selectedGameplayActionId: string | null = null;
  currentSection: 'scenarios' | 'catalog' | 'gameplay' = 'catalog';

  constructor(
    private scenarioService: ScenarioService,
    public gameEngine: GameEngineService,
  ) {
    this.scenarios = this.scenarioService.getScenarios();
  }

  showScenarios(): void {
    this.currentSection = 'scenarios';
  }

  showCatalog(): void {
    this.currentSection = 'catalog';
  }

  showGameplay(): void {
    this.currentSection = 'gameplay';
  }

  showGameplayAction(actionId: string): void {
    this.selectedGameplayActionId = actionId;
    this.currentSection = 'gameplay';
  }

  startScenario(scenario: Scenario): void {
    this.currentScenario = scenario;
    this.gameEngine.start(scenario);
    this.currentScene = this.gameEngine.getCurrentScene();
    this.gameState = this.gameEngine.getGameState();
  }

  selectChoice(choice: Choice): void {
    this.gameEngine.choose(choice);
    this.currentScene = this.gameEngine.getCurrentScene();
    this.gameState = this.gameEngine.getGameState();
  }

  restartScenario(): void {
    if (!this.currentScenario) {
      return;
    }
    this.gameEngine.start(this.currentScenario);
    this.currentScene = this.gameEngine.getCurrentScene();
    this.gameState = this.gameEngine.getGameState();
  }

  backToScenarios(): void {
    this.currentScenario = null;
    this.currentScene = null;
    this.gameState = null;
  }
}
