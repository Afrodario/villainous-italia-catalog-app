import { Component, EventEmitter, Output } from '@angular/core';
import { SPEED_LEVEL_INFO } from '../../../data/gameplay/speed-level-info';

@Component({
  selector: 'app-speed-level-info',
  standalone: true,
  imports: [],
  templateUrl: './speed-level-info.component.html',
})
export class SpeedLevelInfoComponent {
  @Output() closed = new EventEmitter<void>();

  readonly speedInfo = SPEED_LEVEL_INFO;

  close(): void {
    this.closed.emit();
  }

  getLevelClasses(levelId: string): string {
    switch (levelId) {
      case 'red':
        return 'border-red-500/30 bg-red-500/5';

      case 'orange':
        return 'border-orange-500/30 bg-orange-500/5';

      case 'yellow':
        return 'border-yellow-400/30 bg-yellow-400/5';

      case 'green':
        return 'border-green-500/30 bg-green-500/5';

      default:
        return 'border-gray-500/30 bg-gray-500/5';
    }
  }
}
