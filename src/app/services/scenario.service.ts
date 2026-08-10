import { Injectable } from '@angular/core';

import { Scenario } from '../models/scenario.model';
import { JAFAR_SCENARIO } from '../data/jafar.scenario';

@Injectable({
  providedIn: 'root'
})
export class ScenarioService {

  private scenarios: Scenario[] = [
    JAFAR_SCENARIO
  ];

  getScenarios(): Scenario[] {
    return this.scenarios;
  }

  getScenarioById(id: string): Scenario | undefined {

    return this.scenarios.find(
      scenario => scenario.id === id
    );

  }

}