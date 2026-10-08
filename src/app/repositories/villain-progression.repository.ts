import { Injectable } from '@angular/core';

import { VillainProgression } from '../models/villain-progressions/villain-progress.model';

import { CAPTAIN_HOOK_PROGRESSION } from '../data/villain-progressions/captain-hook.progression';
import { PRINCE_JOHN_PROGRESSION } from '../data/villain-progressions/prince-john.progression';
import { JAFAR_PROGRESSION } from '../data/villain-progressions/jafar.progression';
import { MALEFICENT_PROGRESSION } from '../data/villain-progressions/maleficent-progression';
import { QUEEN_OF_HEARTS_PROGRESSION } from '../data/villain-progressions/queen-of-hearts.progression';
import { URSULA_PROGRESSION } from '../data/villain-progressions/ursula-progression';
import { EVIL_QUEEN_PROGRESSION } from '../data/villain-progressions/evil-queen-progression';
import { DR_FACILIER_PROGRESSION } from '../data/villain-progressions/dr-facilier.progression';
import { HADES_PROGRESSION } from '../data/villain-progressions/hades.progression';
import { SCAR_PROGRESSION } from '../data/villain-progressions/scar-progression';
import { YZMA_PROGRESSION } from '../data/villain-progressions/yzma.progression';

@Injectable({
  providedIn: 'root',
})
export class VillainProgressionRepository {
  private readonly progressions: VillainProgression[] = [
    CAPTAIN_HOOK_PROGRESSION,
    PRINCE_JOHN_PROGRESSION,
    JAFAR_PROGRESSION,
    MALEFICENT_PROGRESSION,
    QUEEN_OF_HEARTS_PROGRESSION,
    URSULA_PROGRESSION,
    EVIL_QUEEN_PROGRESSION,
    DR_FACILIER_PROGRESSION,
    HADES_PROGRESSION,
    SCAR_PROGRESSION,
    YZMA_PROGRESSION
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
