import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import {
  VillainProgression,
  VillainProgressItem,
  VillainProgressState,
} from '../../models/villain-progressions/villain-progress.model';

import { VillainProgressService } from '../../services/villain-progress.service';

@Component({
  selector: 'app-villain-progress',
  standalone: true,
  imports: [],
  templateUrl: './villain-progress.component.html',
})
export class VillainProgressComponent implements OnChanges {
  @Input({ required: true })
  progression!: VillainProgression;

  state!: VillainProgressState;

  percentage = 0;

  private readonly titanCounterIds = [
    'underworld-titans',
    'thebes-titans',
    'gardens-titans',
    'mount-olympus-titans',
  ];

  constructor(private readonly progressService: VillainProgressService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['progression'] && this.progression) {
      this.state = this.progressService.createInitialState(this.progression);

      this.updatePercentage();
    }
  }

  updatePercentage(): void {
    this.percentage = this.progressService.calculatePercentage(
      this.progression,
      this.state,
    );
  }

  isStepCompleted(stepId: string): boolean {
    const item = this.state.items.find((stateItem) => stateItem.id === stepId);

    return item?.type === 'step' ? item.completed : false;
  }

  toggleStep(stepId: string): void {
    const item = this.progression.items.find((item) => item.id === stepId);

    if (!item || item.type !== 'step') {
      return;
    }

    if (!this.isItemAvailable(item)) {
      return;
    }

    const stateItem = this.state.items.find(
      (stateItem) => stateItem.id === stepId,
    );

    if (!stateItem || stateItem.type !== 'step') {
      return;
    }

    stateItem.completed = !stateItem.completed;

    this.updatePercentage();
  }

  getCounterValue(itemId: string): number {
    const item = this.state.items.find((stateItem) => stateItem.id === itemId);

    if (!item || item.type !== 'counter') {
      return 0;
    }

    return item.value;
  }

  changeCounter(itemId: string, delta: number): void {
    const item = this.state.items.find((stateItem) => stateItem.id === itemId);

    if (!item || item.type !== 'counter') {
      return;
    }

    const progressionItem = this.progression.items.find(
      (progressionItem) => progressionItem.id === itemId,
    );

    if (!progressionItem || progressionItem.type !== 'counter') {
      return;
    }

    const min = progressionItem.min ?? 0;
    const max = progressionItem.max ?? Number.MAX_SAFE_INTEGER;

    const newValue = Math.max(min, Math.min(item.value + delta, max));

    item.value = newValue;

    this.updatePercentage();
  }

  selectChoice(itemId: string, optionId: string): void {
    const item = this.progression.items.find(
      (progressionItem) => progressionItem.id === itemId,
    );

    if (!item || item.type !== 'choice') {
      return;
    }

    if (!this.isItemAvailable(item)) {
      return;
    }

    const stateItem = this.state.items.find(
      (stateItem) => stateItem.id === itemId,
    );

    if (!stateItem || stateItem.type !== 'choice') {
      return;
    }

    stateItem.selectedOptionId = optionId;

    this.updatePercentage();
  }

  isChoiceSelected(itemId: string, optionId: string): boolean {
    const item = this.state.items.find((stateItem) => stateItem.id === itemId);

    if (!item || item.type !== 'choice') {
      return false;
    }

    return item.selectedOptionId === optionId;
  }

  isItemAvailable(item: VillainProgressItem): boolean {
    return this.progressService.isItemAvailable(
      item,
      this.progression,
      this.state,
    );
  }

  getTotalTitans(): number {
    return this.titanCounterIds.reduce((total, counterId) => {
      const stateItem = this.state.items.find(
        (stateItem) => stateItem.id === counterId,
      );

      if (!stateItem || stateItem.type !== 'counter') {
        return total;
      }

      return total + stateItem.value;
    }, 0);
  }

  canIncreaseCounter(itemId: string): boolean {
    if (itemId === 'trapped-titans') {
      return this.getCounterValue('trapped-titans') < this.getTotalTitans();
    }

    if (!this.titanCounterIds.includes(itemId)) {
      return true;
    }

    return this.getTotalTitans() < 5;
  }
}
