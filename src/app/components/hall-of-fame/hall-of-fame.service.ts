import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

import {
  HallOfFameData,
  Player,
  Tournament
} from './hall-of-fame.model';

@Injectable({
  providedIn: 'root'
})
export class HallOfFameService {
  private http = inject(HttpClient);

  getData(): Observable<HallOfFameData> {
    return forkJoin({
      players: this.http.get<Player[]>('data/players.json'),
      tournaments: this.http.get<Tournament[]>('data/tournaments.json')
    });
  }
}