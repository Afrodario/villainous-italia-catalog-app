import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Expansion } from '../../../models/expansion.model';

@Component({
  selector: 'app-expansion-card',
  standalone: true,
  templateUrl: './expansion-card.component.html',
})
export class ExpansionCardComponent {
  @Input({ required: true })
  expansion!: Expansion;

  @Output()
  expansionSelected = new EventEmitter<Expansion>();

  select(): void {
    this.expansionSelected.emit(this.expansion);
  }

  formatReleaseDate(date: Date): string {
    const formatted = new Intl.DateTimeFormat('it-IT', {
      month: 'long',
      year: 'numeric',
    }).format(date);

    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  }
}
