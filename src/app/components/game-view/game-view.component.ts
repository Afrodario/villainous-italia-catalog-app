import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Scenario } from '../../models/scenario.model';
import { Scene } from '../../models/scene.model';
import { Choice } from '../../models/choice.model';
import { GameState } from '../../models/game-state.model';
import { ChoiceViewModel } from '../../models/choice-view-model.model';

import { GameEngineService } from '../../services/game-engine.service';

import { ChoiceListComponent } from '../choice-list/choice-list.component';
import { HandComponent } from '../hand/hand.component';
import { CardViewModel } from '../../models/card-view-model';
import { CardRepository } from '../../repositories/card.repository';
import { CardInstance } from '../../models/card-instance.model';
import { DiscardPileComponent } from '../discard-pile/discard-pile.component';
import { VillainDeckComponent } from '../villain-deck/villain-deck.component';
import { GameAction } from '../../models/game-action.model';

@Component({
  selector: 'app-game-view',
  standalone: true,

  imports: [
    ChoiceListComponent,
    HandComponent,
    DiscardPileComponent,
    VillainDeckComponent,
  ],

  templateUrl: './game-view.component.html',
})
export class GameViewComponent {
  @Input({ required: true })
  scenario!: Scenario;

  @Input({ required: true })
  scene!: Scene;

  @Input({ required: true })
  gameState!: GameState;

  @Output()
  choiceSelected = new EventEmitter<Choice>();

  @Output()
  restart = new EventEmitter<void>();

  @Output()
  back = new EventEmitter<void>();

  cardViewModels: CardViewModel[] = [];

  constructor(
    private gameEngine: GameEngineService,
    private cardRepository: CardRepository,
  ) {}

  get choiceViewModels(): ChoiceViewModel[] {
    return this.gameEngine.getChoiceViewModels(this.scene.choices);
  }

  // get canDiscard(): boolean {
  //   return this.scene.availableActions?.includes('discard') ?? false;
  // }

  hasAction(action: GameAction): boolean {
    return this.gameEngine.isActionAvailable(action);
  }

  isActionActive(action: GameAction): boolean {
    return this.gameEngine.isActionActive(action);
  }

  private createCardViewModel(card: CardInstance): CardViewModel {
    const definition = this.cardRepository.getById(card.definitionId);

    return {
      instanceId: card.instanceId,
      definitionId: card.definitionId,
      name: definition.name,
      image: definition.image,
      type: definition.type,
      cost: definition.cost,
      quantity: definition.quantity,
      description: definition.description,
      strategy: definition.strategy,
      strength: definition.strength,
      isFateCard: definition.isFateCard
    };
  }

  get handCards(): CardViewModel[] {
    if (!this.gameState) {
      return [];
    }

    return this.gameState.hand.map((card) => this.createCardViewModel(card));
  }

  get discardPileCards(): CardViewModel[] {
    if (!this.gameState) {
      return [];
    }

    return this.gameState.discardPile.map((card) =>
      this.createCardViewModel(card),
    );
  }

  get villainDeckCount(): number {
    if (!this.gameState) {
      return 0;
    }

    return this.gameState.villainDeck.length;
  }

  drawVillainCard(): void {
    this.gameEngine.drawCard();
  }

  onCardSelected(card: CardViewModel): void {
    console.log('Carta selezionata:', card);
  }

  onCardsDiscarded(cards: CardViewModel[]): void {
    const instanceIds = cards.map((card) => card.instanceId);

    this.gameEngine.discardCards(instanceIds);
  }

  selectChoice(choice: Choice): void {
    this.choiceSelected.emit(choice);
  }

  restartScenario(): void {
    this.restart.emit();
  }

  backToScenarios(): void {
    this.back.emit();
  }
}
