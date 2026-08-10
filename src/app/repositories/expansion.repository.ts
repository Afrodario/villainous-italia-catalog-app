import { Injectable } from '@angular/core';

import { Expansion } from '../models/expansion.model';
import { ALL_EXPANSIONS } from '../data';

@Injectable({
  providedIn: 'root',
})
export class ExpansionRepository {
  private readonly expansions = ALL_EXPANSIONS;

  getAll(): Expansion[] {
    return this.expansions;
  }

  getById(id: string): Expansion {
    const expansion = this.expansions.find((e) => e.id === id);

    if (!expansion) {
      throw new Error(`Espansione "${id}" non trovata`);
    }

    return expansion;
  }

  count(): number {
    return this.expansions.length;
  }

  exists(id: string): boolean {
    return this.expansions.some((expansion) => expansion.id === id);
  }
}
