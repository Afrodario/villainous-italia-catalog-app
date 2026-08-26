import { Injectable } from '@angular/core';

import { Expansion } from '../models/expansion.model';
import { ALL_EXPANSIONS } from '../data';
import { ActionGameplay } from '../models/gameplay/action-gameplay.model';
import { ALL_ACTIONS, ALL_CARD_TYPES } from '../data/gameplay';
import { CardTypeGameplay } from '../models/gameplay/card-type-gameplay.model';

@Injectable({
  providedIn: 'root',
})
export class GameplayRepository {
  private readonly actions = ALL_ACTIONS;
  private readonly cardTypes = ALL_CARD_TYPES;

  getAllActions(): ActionGameplay[] {
    return this.actions;
  }

  getAllCardTypes(): CardTypeGameplay[] {
    return this.cardTypes;
  }

  getActionsById(id: string): ActionGameplay {
    const action = this.actions.find((e) => e.id === id);

    if (!action) {
      throw new Error(`Azione "${id}" non trovata`);
    }

    return action;
  }

  count(): number {
    return this.actions.length;
  }

  exists(id: string): boolean {
    return this.actions.some((action) => action.id === id);
  }
}
