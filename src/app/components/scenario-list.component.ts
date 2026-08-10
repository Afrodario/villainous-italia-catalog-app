import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ScenarioCardComponent } from './scenario-card.component';
import { Scenario } from '../models/scenario.model';


@Component({
  selector: 'app-scenario-list',
  standalone: true,
  imports: [
    ScenarioCardComponent
  ],
  templateUrl: './scenario-list.component.html'
})
export class ScenarioListComponent {

  @Input()
  scenarios: Scenario[] = [];

  @Output()
  scenarioSelected =
    new EventEmitter<Scenario>();


  selectScenario(
    scenario: Scenario
  ): void {

    this.scenarioSelected.emit(
      scenario
    );

  }

}