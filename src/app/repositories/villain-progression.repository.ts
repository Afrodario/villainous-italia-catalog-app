import { Injectable } from '@angular/core';

import { VillainProgression } from '../models/villain-progressions/villain-progress.model';

import { CAPTAIN_HOOK_PROGRESSION } from '../data/villain-progressions/captain-hook.progression';
import { PRINCE_JOHN_PROGRESSION } from '../data/villain-progressions/prince-john.progression';
import { JAFAR_PROGRESSION } from '../data/villain-progressions/jafar.progression';
import { MALEFICENT_PROGRESSION } from '../data/villain-progressions/maleficent-progression';

@Injectable({
  providedIn: 'root',
})
export class VillainProgressionRepository {
  private readonly progressions: VillainProgression[] = [
    CAPTAIN_HOOK_PROGRESSION,
    PRINCE_JOHN_PROGRESSION,
    JAFAR_PROGRESSION,
    MALEFICENT_PROGRESSION
  ];

  getAll(): VillainProgression[] {
    return this.progressions;
  }

  getByVillainId(villainId: string): VillainProgression | null {
    return (
      this.progressions.find(
        (progression) => progression.villainId === villainId,
      ) ?? null
    );
  }
}
