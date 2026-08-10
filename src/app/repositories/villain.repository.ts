import { Injectable } from '@angular/core';

import { Villain } from '../models/villain.model';
import { ALL_VILLAINS } from '../data';

@Injectable({
  providedIn: 'root',
})
export class VillainRepository {
  private readonly villains = ALL_VILLAINS;

  getAll(): Villain[] {
    return this.villains;
  }

  getById(id: string): Villain {
    const villain = this.villains.find((v) => v.id === id);

    if (!villain) {
      throw new Error(`Cattivo "${id}" non trovato`);
    }

    return villain;
  }

  getByExpansion(expansionId: string): Villain[] {
    return this.villains.filter(
      (villain) => villain.expansionId === expansionId,
    );
  }
}
