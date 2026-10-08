import { Injectable } from '@angular/core';

import {
  VillainProgression,
  VillainProgressItem,
  VillainProgressStep,
  VillainProgressCounter,
  VillainProgressChoice,
  VillainProgressState,
  VillainProgressItemState,
  VillainProgressRequirement,
} from '../models/villain-progressions/villain-progress.model';

@Injectable({
  providedIn: 'root',
})
export class VillainProgressService {
  calculatePercentage(
    progression: VillainProgression,
    state: VillainProgressState,
  ): number {
    const percentage = progression.items.reduce((total, item) => {
      return total + this.calculateItemPercentage(item, progression, state);
    }, 0);

    return Math.min(percentage, 100);
  }

  createInitialState(progression: VillainProgression): VillainProgressState {
    return {
      items: progression.items.map((item) => {
        switch (item.type) {
          case 'step':
            return {
              type: 'step',
              id: item.id,
              completed: false,
            };

          case 'counter':
            return {
              type: 'counter',
              id: item.id,
              value: item.min ?? 0,
            };

          case 'choice':
            return {
              type: 'choice',
              id: item.id,
              selectedOptionId: null,
            };
        }
      }),
    };
  }

  private calculateItemPercentage(
    item: VillainProgressItem,
    progression: VillainProgression,
    state: VillainProgressState,
  ): number {
    const itemState = state.items.find((stateItem) => stateItem.id === item.id);

    if (!itemState) {
      return 0;
    }

    if (!this.isItemAvailable(item, progression, state)) {
      return 0;
    }

    switch (item.type) {
      case 'step':
        return this.calculateStepPercentage(item, itemState);

      case 'counter':
        return this.calculateCounterPercentage(item, itemState);

      case 'choice':
        return this.calculateChoicePercentage(item, itemState);

      default:
        return 0;
    }
  }

  private calculateStepPercentage(
    item: VillainProgressStep,
    state: VillainProgressItemState,
  ): number {
    if (state.type !== 'step') {
      return 0;
    }

    return state.completed ? item.percentage : 0;
  }

  private calculateCounterPercentage(
    item: VillainProgressCounter,
    state: VillainProgressItemState,
  ): number {
    if (state.type !== 'counter') {
      return 0;
    }

    const value = Math.max(
      item.min ?? 0,
      Math.min(state.value, item.max ?? state.value),
    );

    return value * item.percentagePerUnit;
  }

  private calculateChoicePercentage(
    item: VillainProgressChoice,
    state: VillainProgressItemState,
  ): number {
    if (state.type !== 'choice' || !state.selectedOptionId) {
      return 0;
    }

    const selectedOption = item.options.find(
      (option) => option.id === state.selectedOptionId,
    );

    return selectedOption?.percentage ?? 0;
  }

  private isRequirementSatisfied(
    requirement: VillainProgressRequirement,
    progression: VillainProgression,
    state: VillainProgressState,
  ): boolean {
    switch (requirement.type) {
      case 'percentage':
        return this.calculatePercentage(progression, state) >= requirement.min;

      case 'counter': {
        const stateItem = state.items.find(
          (stateItem) => stateItem.id === requirement.itemId,
        );

        if (!stateItem || stateItem.type !== 'counter') {
          return false;
        }

        return stateItem.value >= requirement.min;
      }

      case 'step': {
        const stateItem = state.items.find(
          (stateItem) => stateItem.id === requirement.itemId,
        );

        if (!stateItem || stateItem.type !== 'step') {
          return false;
        }

        return stateItem.completed;
      }

      case 'choice': {
        const stateItem = state.items.find(
          (stateItem) => stateItem.id === requirement.itemId,
        );

        if (!stateItem || stateItem.type !== 'choice') {
          return false;
        }

        return stateItem.selectedOptionId === requirement.optionId;
      }
    }
  }

  isItemAvailable(
    item: VillainProgressItem,
    progression: VillainProgression,
    state: VillainProgressState,
  ): boolean {
    const requirements = item.requires;

    if (!requirements || requirements.length === 0) {
      return true;
    }

    return requirements.every((requirement) =>
      this.isRequirementSatisfied(requirement, progression, state),
    );
  }
}
