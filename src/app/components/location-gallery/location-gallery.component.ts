import { Component, Input } from '@angular/core';

import { CardViewModel } from '../../models/card-view-model';
import { Location } from '../../models/location.model';

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

  openDetails(location: Location): void {
    console.log(this.locations);
    this.selectedLocation = location;
  }

  closeDetails(): void {
    this.selectedLocation = null;
  }

}