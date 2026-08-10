import { Injectable } from '@angular/core';

import { Scenario } from '../models/scenario.model';
import { Scene } from '../models/scene.model';
import { Choice } from '../models/choice.model';
import { GameState } from '../models/game-state.model';
import { Conditions } from '../models/condition.model';
import { Effects } from '../models/effect.model';
import { ChoiceViewModel } from '../models/choice-view-model.model';
import { Card } from '../models/card.model';
import { CardRepository } from '../repositories/card.repository';
import { DeckService } from './deck.service';
import { JAFAR_VILLAIN_DECK } from '../models/deck.model';
import { GameAction } from '../models/game-action.model';

@Injectable({
  providedIn: 'root',
})
export class GameEngineService {
  private currentScenario!: Scenario;

  private currentScene!: Scene;

  private gameState!: GameState;
  //private completedActions = new Set<GameAction>();
  private activeAction: GameAction | null = null;

  constructor(
    private cardRepository: CardRepository,
    private deckService: DeckService,
  ) {}

  start(scenario: Scenario): void {
    //this.completedActions.clear();
    this.activeAction = null;
    this.currentScenario = scenario;

    this.currentScene = this.getScene(scenario.startSceneId);

    // Creazione e mescolamento
    // del mazzo completo

    const villainDeck = this.deckService.createDeck(JAFAR_VILLAIN_DECK);

    // Pesca della mano iniziale

    const initialHand = villainDeck.splice(0, scenario.initialHandSize);

    // Creazione dello stato iniziale

    this.gameState = {
      ...scenario.initialGameState,

      hand: initialHand,

      villainDeck: villainDeck,

      playArea: [],

      discardPile: [],

      sceneActions: {
        completedActions: [],
        discardedCards: 0,
        playedCards: 0,
        drawnCards: 0,
      },
    };

    console.log(this.gameState.villainDeck);
    // for (const cardId of scenario.initialHand) {
    //   this.addCardToHand(cardId);
    // }

    // const initialCards = this.cardRepository.getRandomCards(
    //   scenario.initialHandSize,
    // );

    // this.gameState.hand.push(...initialCards);
  }

  getCurrentScene(): Scene {
    return this.currentScene;
  }

  getGameState(): GameState {
    return this.gameState;
  }

  choose(choice: Choice): void {
    if (!this.isChoiceAvailable(choice)) {
      return;
    }

    this.applyEffects(choice.effects);

    if (choice.action) {
      this.activeAction = choice.action;
    } else {
      this.activeAction = null;
    }

    this.currentScene = this.getScene(choice.nextSceneId);
  }

  getChoiceViewModels(choices: Choice[]): ChoiceViewModel[] {
    return choices.map((choice) => {
      const available = this.isChoiceAvailable(choice);

      return {
        choice,
        available,
        active:
          choice.action !== undefined && this.isActionActive(choice.action),
        lockedMessage: available
          ? undefined
          : this.getChoiceLockedMessage(choice),
      };
    });
  }

  private getChoiceLockedMessage(choice: Choice): string {
    // Per ora restituiamo un messaggio generico.
    // In seguito lo costruiremo analizzando
    // direttamente le conditions della scelta.

    return 'Questa scelta non è attualmente disponibile.';
  }

  isChoiceAvailable(choice: Choice): boolean {
    if (
      choice.disabledAfterAction &&
      this.isActionCompleted(choice.disabledAfterAction)
    ) {
      return false;
    }

    if (!choice.conditions) {
      return true;
    }

    return this.checkConditions(choice.conditions);
  }

  isActionAvailable(action: GameAction): boolean {
    if (!this.currentScene) {
      return false;
    }

    const isAllowed =
      this.currentScene.availableActions?.includes(action) ?? false;

    if (!isAllowed) {
      return false;
    }

    return !this.gameState.sceneActions.completedActions.includes(action);
  }

  isActionCompleted(action: GameAction): boolean {
    return this.gameState.sceneActions.completedActions.includes(action);
  }

  isActionActive(action: GameAction): boolean {
    return this.activeAction === action;
  }

  private completeAction(action: GameAction): void {
    if (!this.gameState.sceneActions.completedActions.includes(action)) {
      this.gameState.sceneActions.completedActions.push(action);
    }
  }

  private isDiscardActionCompleted(): boolean {
    return this.gameState.sceneActions.discardedCards > 0;
  }

  private isPlayCardActionCompleted(): boolean {
    return this.gameState.sceneActions.playedCards > 0;
  }

  private isDrawCardActionCompleted(): boolean {
    return this.gameState.sceneActions.drawnCards > 0;
  }

  private isFateActionCompleted(): boolean {
    return false;
  }

  private resetSceneActions(): void {
    this.gameState.sceneActions = {
      completedActions: [],
      discardedCards: 0,
      playedCards: 0,
      drawnCards: 0,
    };
  }

  private checkConditions(conditions: Conditions): boolean {
    if (
      conditions.minPower !== undefined &&
      this.gameState.power < conditions.minPower
    ) {
      return false;
    }

    if (
      conditions.minHeroCount !== undefined &&
      this.gameState.heroCount < conditions.minHeroCount
    ) {
      return false;
    }

    if (
      conditions.maxHeroCount !== undefined &&
      this.gameState.heroCount > conditions.maxHeroCount
    ) {
      return false;
    }

    if (
      conditions.minAllyCount !== undefined &&
      this.gameState.allyCount < conditions.minAllyCount
    ) {
      return false;
    }

    if (
      conditions.minObjectiveProgress !== undefined &&
      this.gameState.objectiveProgress < conditions.minObjectiveProgress
    ) {
      return false;
    }

    if (
      conditions.requiresMagicLamp !== undefined &&
      this.gameState.hasMagicLamp !== conditions.requiresMagicLamp
    ) {
      return false;
    }

    if (
      conditions.minDiscardedCards !== undefined &&
      this.gameState.discardPile.length < conditions.minDiscardedCards
    ) {
      return false;
    }

    if (
      conditions.minCardsDiscardedThisScene !== undefined &&
      this.gameState.sceneActions.discardedCards <
        conditions.minCardsDiscardedThisScene
    ) {
      return false;
    }

    return true;
  }

  private applyEffects(effects?: Effects): void {
    if (!effects) {
      return;
    }

    if (effects.power !== undefined) {
      this.gameState.power += effects.power;
    }

    if (effects.heroCount !== undefined) {
      this.gameState.heroCount += effects.heroCount;
    }

    if (effects.allyCount !== undefined) {
      this.gameState.allyCount += effects.allyCount;
    }

    if (effects.objectiveProgress !== undefined) {
      this.gameState.objectiveProgress += effects.objectiveProgress;
    }

    if (effects.hasMagicLamp !== undefined) {
      this.gameState.hasMagicLamp = effects.hasMagicLamp;
    }

    if (effects.addCards) {
      for (const cardId of effects.addCards) {
        this.addCardToHand(cardId);
      }
    }

    if (effects.removeCards) {
      for (const cardId of effects.removeCards) {
        this.removeCardFromHand(cardId);
      }
    }
  }

  private getScene(sceneId: string): Scene {
    const scene = this.currentScenario.scenes.find(
      (scene) => scene.id === sceneId,
    );

    if (!scene) {
      throw new Error(`Scena "${sceneId}" non trovata`);
    }

    return scene;
  }

  addCardToHand(definitionId: string): void {
    const cardInstance = this.deckService.createCardInstance(definitionId);

    this.gameState.hand.push(cardInstance);
  }

  removeCardFromHand(definitionId: string): void {
    const index = this.gameState.hand.findIndex(
      (card) => card.definitionId === definitionId,
    );

    if (index === -1) {
      return;
    }

    this.gameState.hand.splice(index, 1);
  }

  removeCardInstanceFromHand(instanceId: string): void {
    const index = this.gameState.hand.findIndex(
      (card) => card.instanceId === instanceId,
    );

    if (index === -1) {
      return;
    }

    this.gameState.hand.splice(index, 1);
  }

  drawCard(): void {
    if (this.gameState.villainDeck.length === 0) {
      return;
    }

    const card = this.gameState.villainDeck.shift();

    if (!card) {
      return;
    }

    this.gameState.hand.push(card);
  }

  drawCards(count: number): void {
    for (let i = 0; i < count; i++) {
      this.drawCard();
    }
  }

  discardCard(instanceId: string): void {
    if (!this.isActionAvailable('discard')) {
      return;
    }

    const index = this.gameState.hand.findIndex(
      (card) => card.instanceId === instanceId,
    );

    if (index === -1) {
      return;
    }

    const [card] = this.gameState.hand.splice(index, 1);

    this.gameState.discardPile.push(card);

    this.gameState.sceneActions.discardedCards++;
  }

  discardCards(instanceIds: string[]): void {
    if (!this.isActionAvailable('discard')) {
      return;
    }

    let discardedCount = 0;

    for (const instanceId of instanceIds) {
      const index = this.gameState.hand.findIndex(
        (card) => card.instanceId === instanceId,
      );

      if (index === -1) {
        continue;
      }

      const [card] = this.gameState.hand.splice(index, 1);

      this.gameState.discardPile.push(card);

      discardedCount++;
    }

    if (discardedCount === 0) {
      return;
    }

    this.gameState.sceneActions.discardedCards += discardedCount;

    this.completeAction('discard');

    this.activeAction = null;
  }
}
