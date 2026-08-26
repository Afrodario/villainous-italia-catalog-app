import { Component, ElementRef, ViewChild } from '@angular/core';

import { GameTextFormatterService } from '../../services/game-text-formatter.service';
import { ActionGameplay } from '../../models/gameplay/action-gameplay.model';
import { GameplayRepository } from '../../repositories/gameplay.repository';
import { CardTypeGameplay } from '../../models/gameplay/card-type-gameplay.model';

@Component({
  selector: 'app-gameplay',
  standalone: true,
  imports: [],
  templateUrl: './gameplay.component.html',
})
export class GameplayComponent {
  actionsGameplay: ActionGameplay[] = [];
  selectedAction: ActionGameplay | null = null;
  cardTypesGameplay: CardTypeGameplay[] = [];
  selectedCardType: CardTypeGameplay | null = null;

  @ViewChild('cardTypeDetails')
  cardTypeDetails?: ElementRef<HTMLElement>;

  @ViewChild('actionDetails')
  actionDetails?: ElementRef<HTMLElement>;

  @ViewChild('actionsSection')
  actionsSection?: ElementRef<HTMLElement>;

  @ViewChild('cardTypesSection')
  cardTypesSection?: ElementRef<HTMLElement>;

  constructor(
    private gameplayRepository: GameplayRepository,
    public gameTextFormatter: GameTextFormatterService,
  ) {
    this.actionsGameplay = this.gameplayRepository.getAllActions();
    this.cardTypesGameplay = this.gameplayRepository.getAllCardTypes();
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

  selectCardType(cardType: CardTypeGameplay): void {
    this.selectedCardType = cardType;

    requestAnimationFrame(() => {
      this.cardTypeDetails?.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

  closeCardType(): void {
    this.selectedCardType = null;
  }

  get commonCardTypes(): CardTypeGameplay[] {
    return this.cardTypesGameplay.filter((cardType) => cardType.isCommon);
  }

  get specificCardTypes(): CardTypeGameplay[] {
    return this.cardTypesGameplay.filter((cardType) => !cardType.isCommon);
  }

  scrollToActions(): void {
    this.selectedAction = null;

    requestAnimationFrame(() => {
      this.actionsSection?.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

  scrollToCardTypes(): void {
    this.selectedCardType = null;

    requestAnimationFrame(() => {
      this.cardTypesSection?.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
}
