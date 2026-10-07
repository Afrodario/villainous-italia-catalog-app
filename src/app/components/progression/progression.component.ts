import { Component } from '@angular/core';
import { VillainProgressComponent } from '../villain-progress/villain-progress.component';
import { CAPTAIN_HOOK_PROGRESSION } from '../../data/villain-progressions/captain-hook.progression';
import { PRINCE_JOHN_PROGRESSION } from '../../data/villain-progressions/prince-john.progression';

@Component({
  selector: 'app-progression',
  standalone: true,
  imports: [VillainProgressComponent],
  templateUrl: './progression.component.html',
})
export class ProgressionComponent {
  captainHookProgression = CAPTAIN_HOOK_PROGRESSION;
  princeJohnProgression = PRINCE_JOHN_PROGRESSION;
}
