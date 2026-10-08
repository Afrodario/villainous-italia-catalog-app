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
  VillainProgressCounterGroup,
  VillainProgressDynamic,
} from '../models/villain-progressions/villain-progress.model';

@Injectable({
  providedIn: 'root',
})
export class VillainProgressService {
  calculatePercentage(
    progression: VillainProgression,
    state: VillainProgressState,
    excludedItemId?: string,
  ): number {
    const percentage = progression.items.reduce((total, item) => {
      if (item.id === excludedItemId) {
        return total;
      }

      return total + this.calculateItemPercentage(item, progression, state);
    }, 0);

    return Math.min(percentage, 100);
  }

  createInitialState(progression: VillainProgression): VillainProgressState {
    return {
      items: progression.items.flatMap((item): VillainProgressItemState[] => {
        switch (item.type) {
          case 'step':
            return [
              {
                type: 'step',
                id: item.id,
                completed: false,
              },
            ];

          case 'counter':
            return [
              {
                type: 'counter',
                id: item.id,
                value: item.min ?? 0,
              },
            ];

          case 'choice':
            return [
              {
                type: 'choice',
                id: item.id,
                selectedOptionId: null,
              },
            ];

          case 'counter-group':
            return [];

          case 'dynamic':
            return [];
        }
      }),
    };
  }

  private calculateItemPercentage(
    item: VillainProgressItem,
    progression: VillainProgression,
    state: VillainProgressState,
  ): number {
    if (!this.isItemAvailable(item, progression, state)) {
      return 0;
    }

    if (item.type === 'counter-group') {
      return this.calculateCounterGroupPercentage(item, state);
    }

    if (item.type === 'dynamic') {
      return this.calculateDynamicPercentage(item, progression, state);
    }

    const itemState = state.items.find((stateItem) => stateItem.id === item.id);

    if (!itemState) {
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
    currentItemId: string,
  ): boolean {
    switch (requirement.type) {
      case 'percentage':
        return (
          this.calculatePercentage(progression, state, currentItemId) >=
          requirement.min
        );

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

      default:
        return false;
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
      this.isRequirementSatisfied(requirement, progression, state, item.id),
    );
  }

  private calculateCounterGroupPercentage(
    item: VillainProgressCounterGroup,
    state: VillainProgressState,
  ): number {
    const count = item.counterIds.filter((counterId) => {
      const stateItem = state.items.find(
        (stateItem) => stateItem.id === counterId,
      );

      return stateItem?.type === 'counter' && stateItem.value >= item.threshold;
    }).length;

    if (count === 0) {
      return 0;
    }

    const percentageIndex = Math.min(count, item.percentages.length) - 1;

    return item.percentages[percentageIndex] ?? 0;
  }

  private calculateDynamicPercentage(
    item: VillainProgressDynamic,
    progression: VillainProgression,
    state: VillainProgressState,
  ): number {
    if (item.counterSources) {
      return this.calculateCompositeDynamicPercentage(item, state);
    }

    const counterState = state.items.find(
      (stateItem) => stateItem.id === item.counterId,
    );

    if (!counterState || counterState.type !== 'counter') {
      return 0;
    }

    const count = counterState.value;

    if (count <= 0) {
      return 0;
    }

    // Calcolo diretto: valore del contatore × percentuale per unità
    if (item.percentagePerUnit !== undefined) {
      return Math.min(count * item.percentagePerUnit, item.maxPercentage);
    }

    if (item.divisor === undefined) {
      return 0;
    }

    const useAlternativeDivisor =
      item.alternativeDivisorRequirement &&
      this.isRequirementSatisfied(
        item.alternativeDivisorRequirement,
        progression,
        state,
        item.id,
      );

    const divisor =
      useAlternativeDivisor && item.alternativeDivisor !== undefined
        ? item.alternativeDivisor
        : item.divisor;

    let percentage = divisor / count;

    percentage = Math.min(percentage, item.maxPercentage);

    if (item.penaltyCounterId && item.penaltyPerUnit !== undefined) {
      const penaltyState = state.items.find(
        (stateItem) => stateItem.id === item.penaltyCounterId,
      );

      if (penaltyState && penaltyState.type === 'counter') {
        percentage -= penaltyState.value * item.penaltyPerUnit;
      }
    }

    return Math.max(0, percentage);
  }

  private calculateCompositeDynamicPercentage(
    item: VillainProgressDynamic,
    state: VillainProgressState,
  ): number {
    let percentage = item.counterSources!.reduce((total, source) => {
      const stateItem = state.items.find(
        (stateItem) => stateItem.id === source.counterId,
      );

      if (!stateItem || stateItem.type !== 'counter') {
        return total;
      }

      const count = Math.min(stateItem.value, source.max ?? stateItem.value);

      return total + count * source.percentagePerUnit;
    }, 0);

    if (item.penaltyCounterId && item.penaltyPerUnit !== undefined) {
      const penaltyState = state.items.find(
        (stateItem) => stateItem.id === item.penaltyCounterId,
      );

      if (penaltyState && penaltyState.type === 'counter') {
        percentage -= penaltyState.value * item.penaltyPerUnit;
      }
    }

    return Math.max(0, Math.min(percentage, item.maxPercentage));
  }
}
