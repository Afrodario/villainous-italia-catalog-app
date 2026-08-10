import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { Choice } from '../../models/choice.model';
import { ChoiceViewModel } from '../../models/choice-view-model.model';

@Component({
  selector: 'app-choice-list',
  standalone: true,
  templateUrl: './choice-list.component.html'
})
export class ChoiceListComponent {

  @Input()
  choices: ChoiceViewModel[] = [];

  @Output()
  choiceSelected =
    new EventEmitter<Choice>();


  selectChoice(
    choice: ChoiceViewModel
  ): void {

    if (!choice.available) {
      return;
    }

    this.choiceSelected.emit(
      choice.choice
    );

  }

}