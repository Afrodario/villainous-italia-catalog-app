import { Component, Input } from '@angular/core';

import { CardViewModel } from '../../models/card-view-model';
import { Location } from '../../models/location.model';
import { GameTextFormatterService } from '../../services/game-text-formatter.service';

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

  constructor(public gameTextFormatter: GameTextFormatterService) {}

  openDetails(location: Location): void {
    console.log(this.locations);
    this.selectedLocation = location;
  }

  closeDetails(): void {
    this.selectedLocation = null;
  }

}
