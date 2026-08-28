import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardViewModel } from '../../models/card-view-model';
import { Location } from '../../models/location.model';
import { GameTextFormatterService } from '../../services/game-text-formatter.service';
import { ACTIONS } from '../../models/actions-types.model';
import { GameplayRepository } from '../../repositories/gameplay.repository';
import { ActionGameplay } from '../../models/gameplay/action-gameplay.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-gallery',
  standalone: true,
  imports: [],
  templateUrl: './location-gallery.component.html',
})
export class LocationGalleryComponent {
  @Input()
  locations: Location[] = [];
  selectedLocation: Location | null = null;
  public readonly ACTIONS = ACTIONS;
  allActions: ActionGameplay[] = [];
  @Output() actionSelected = new EventEmitter<string>();

  constructor(
    public gameTextFormatter: GameTextFormatterService,
    public gameplayRepository: GameplayRepository,
    private router: Router,
  ) {
    this.allActions = this.gameplayRepository.getAllActions();
  }

  getAction(actionName: string): ActionGameplay | undefined {
    return this.allActions.find((action) => action.name === actionName);
  }

  goToAction(action: string): void {
    const actionData = this.getAction(action);

    if (!actionData) {
      return;
    }

    this.actionSelected.emit(actionData.id);
  }

  openDetails(location: Location): void {
    console.log(this.locations);
    this.selectedLocation = location;
  }

  closeDetails(): void {
    this.selectedLocation = null;
  }
}
