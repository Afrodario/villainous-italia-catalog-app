import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-villain-deck',
  standalone: true,
  imports: [],
  templateUrl: './villain-deck.component.html',
})
export class VillainDeckComponent {
  @Input()
  cardCount = 0;

  @Output()
  drawCard = new EventEmitter<void>();

  draw(): void {
    if (this.cardCount === 0) {
      return;
    }

    this.drawCard.emit();
  }
}
