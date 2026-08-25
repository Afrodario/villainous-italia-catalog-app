import { Component, ElementRef, ViewChild } from '@angular/core';

import { GameTextFormatterService } from '../../services/game-text-formatter.service';
import { ActionGameplay } from '../../models/gameplay/action-gameplay.model';
import { GameplayRepository } from '../../repositories/gameplay.repository';

@Component({
  selector: 'app-gameplay',
  standalone: true,
  imports: [],
  templateUrl: './gameplay.component.html',
})
export class GameplayComponent {
  actionsGameplay: ActionGameplay[] = [];
  selectedAction: ActionGameplay | null = null;

  @ViewChild('actionDetails')
  actionDetails?: ElementRef<HTMLElement>;

  constructor(
    private gameplayRepository: GameplayRepository,
    public gameTextFormatter: GameTextFormatterService,
  ) {
    this.actionsGameplay = this.gameplayRepository.getAll();
  }

  selectAction(action: ActionGameplay): void {
    this.selectedAction = action;

    requestAnimationFrame(() => {
      this.actionDetails?.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

  closeAction(): void {
    this.selectedAction = null;
  }
}
