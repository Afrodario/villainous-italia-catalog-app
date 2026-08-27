import { Component, Input } from '@angular/core';

import { CardViewModel } from '../../models/card-view-model';
import { Location } from '../../models/location.model';
import { GameTextFormatterService } from '../../services/game-text-formatter.service';
import { ACTIONS } from '../../models/actions-types.model';
import { GameplayRepository } from '../../repositories/gameplay.repository';
import { ActionGameplay } from '../../models/gameplay/action-gameplay.model';

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

  constructor(
    public gameTextFormatter: GameTextFormatterService,
    public gameplayRepository: GameplayRepository,
  ) {
    this.allActions = this.gameplayRepository.getAllActions();
  }

  getAction(actionName: string): ActionGameplay | undefined {
    return this.allActions.find((action) => action.name === actionName);
  }

  openDetails(location: Location): void {
    console.log(this.locations);
    this.selectedLocation = location;
  }

  closeDetails(): void {
    this.selectedLocation = null;
  }
}
