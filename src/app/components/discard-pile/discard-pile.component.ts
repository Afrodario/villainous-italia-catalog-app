import { Component, Input } from '@angular/core';

import { CardViewModel } from '../../models/card-view-model';

@Component({
  selector: 'app-discard-pile',
  standalone: true,
  imports: [],
  templateUrl: './discard-pile.component.html',
})
export class DiscardPileComponent {
  @Input()
  cards: CardViewModel[] = [];

  isOpen = false;

  get lastDiscardedCard(): CardViewModel | null {
    if (this.cards.length === 0) {
      return null;
    }

    return this.cards[this.cards.length - 1];
  }

  openPile(): void {
    if (this.cards.length === 0) {
      return;
    }

    this.isOpen = true;
  }

  closePile(): void {
    this.isOpen = false;
  }
}
