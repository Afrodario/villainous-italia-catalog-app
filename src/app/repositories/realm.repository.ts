import { Injectable } from '@angular/core';
import { Realm } from '../models/realm.model';
import { JAFAR_REALM } from '../data/realms/jafar-realm';
import { QUEEN_OF_HEARTS_REALM } from '../data/realms/queen-of-hearts-realm';
import { CAPTAIN_HOOK_REALM } from '../data/realms/captain-hook-realm';

@Injectable({
  providedIn: 'root'
})
export class RealmRepository {

  private realms: Realm[] = [
    CAPTAIN_HOOK_REALM,
    JAFAR_REALM,
    QUEEN_OF_HEARTS_REALM
  ];


  getByVillainId(villainId:string): Realm | undefined {

    return this.realms.find(
      realm => realm.villainId === villainId
    );

  }

}