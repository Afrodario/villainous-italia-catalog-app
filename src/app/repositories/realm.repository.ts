import { Injectable } from '@angular/core';
import { Realm } from '../models/realm.model';
import { JAFAR_REALM } from '../data/realms/jafar-realm';
import { QUEEN_OF_HEARTS_REALM } from '../data/realms/queen-of-hearts-realm';
import { CAPTAIN_HOOK_REALM } from '../data/realms/captain-hook-realm';
import { MALEFICENT_REALM } from '../data/realms/maleficent-realm';
import { PRINCE_JOHN_REALM } from '../data/realms/prince-john-realm';
import { URSULA_REALM } from '../data/realms/ursula-realm';
import { EVIL_QUEEN_REALM } from '../data/realms/evil-queen-realm';
import { DR_FACILIER_REALM } from '../data/realms/dr-facilier-realm';
import { HADES_REALM } from '../data/realms/hades-realm';
import { SCAR_REALM } from '../data/realms/scar-realm';
import { YZMA_REALM } from '../data/realms/yzma-realm';
import { RATIGAN_REALM } from '../data/realms/ratigan-realm';

@Injectable({
  providedIn: 'root'
})
export class RealmRepository {

  private realms: Realm[] = [
    CAPTAIN_HOOK_REALM,
    JAFAR_REALM,
    QUEEN_OF_HEARTS_REALM,
    MALEFICENT_REALM,
    PRINCE_JOHN_REALM,
    URSULA_REALM,
    EVIL_QUEEN_REALM,
    DR_FACILIER_REALM,
    HADES_REALM,
    SCAR_REALM,
    YZMA_REALM,
    RATIGAN_REALM
  ];


  getByVillainId(villainId:string): Realm | undefined {

    return this.realms.find(
      realm => realm.villainId === villainId
    );

  }

}