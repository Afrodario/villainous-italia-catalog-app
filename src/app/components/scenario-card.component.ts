import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Scenario } from '../models/scenario.model';

@Component({
  selector: 'app-scenario-card',
  standalone: true,
  templateUrl: './scenario-card.component.html'
})
export class ScenarioCardComponent {

  @Input({ required: true })
  scenario!: Scenario;

  @Output()
  start = new EventEmitter<Scenario>();


  startScenario(): void {

    this.start.emit(
      this.scenario
    );

  }

}