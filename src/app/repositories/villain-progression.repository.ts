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
import { RATIGAN_PROGRESSION } from '../data/villain-progressions/ratigan.progression';
import { CRUELLA_DE_VIL_PROGRESSION } from '../data/villain-progressions/cruella-de-vil.progression';
import { MOTHER_GOTHEL_PROGRESSION } from '../data/villain-progressions/mother-gothel.progression';
import { PETE_PROGRESSION } from '../data/villain-progressions/pete.progression';
import { GASTON_PROGRESSION } from '../data/villain-progressions/gaston.progression';
import { LADY_TREMAINE_PROGRESSION } from '../data/villain-progressions/lady-tremaine.progression';
import { HORNED_KING_PROGRESSION } from '../data/villain-progressions/horned-king.progression';
import { SYNDROME_PROGRESSION } from '../data/villain-progressions/syndrome.progression';
import { MADAM_MIM_PROGRESSION } from '../data/villain-progressions/madam-mim.progression';
import { LOTSO_PROGRESSION } from '../data/villain-progressions/lotso.progression';
import { OOGIE_BOOGIE_PROGRESSION } from '../data/villain-progressions/oogie-boogie.progression';
import { KING_CANDY_PROGRESSION } from '../data/villain-progressions/king-candy.progression';
import { SHERE_KHAN_PROGRESSION } from '../data/villain-progressions/shere-khan.progression';
import { DAVY_JONES_PROGRESSION } from '../data/villain-progressions/davy-jones.progression';
import { TAMATOA_PROGRESSION } from '../data/villain-progressions/tamatoa.progression';
import { ERNESTO_DE_LA_CRUZ_PROGRESSION } from '../data/villain-progressions/ernesto-de-la-cruz.progression';
import { PRINCE_HANS_PROGRESSION } from '../data/villain-progressions/prince-hans.progression';

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
    YZMA_PROGRESSION,
    RATIGAN_PROGRESSION,
    CRUELLA_DE_VIL_PROGRESSION,
    MOTHER_GOTHEL_PROGRESSION,
    PETE_PROGRESSION,
    GASTON_PROGRESSION,
    LADY_TREMAINE_PROGRESSION,
    HORNED_KING_PROGRESSION,
    SYNDROME_PROGRESSION,
    MADAM_MIM_PROGRESSION,
    LOTSO_PROGRESSION,
    OOGIE_BOOGIE_PROGRESSION,
    KING_CANDY_PROGRESSION,
    SHERE_KHAN_PROGRESSION,
    DAVY_JONES_PROGRESSION,
    TAMATOA_PROGRESSION,
    ERNESTO_DE_LA_CRUZ_PROGRESSION,
    PRINCE_HANS_PROGRESSION
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
