import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardViewModel } from '../../models/card-view-model';

@Component({
  selector: 'app-hand',
  standalone: true,
  imports: [],
  templateUrl: './hand.component.html',
})
export class HandComponent {
  @Input()
  cards: CardViewModel[] = [];

  @Input()
  canDiscard = false;

  @Input()
  discardModeActive = false;

  @Output()
  cardSelected = new EventEmitter<CardViewModel>();

  @Output()
  cardsDiscarded = new EventEmitter<CardViewModel[]>();

  selectedCards: CardViewModel[] = [];
  selectedCardForDetails: CardViewModel | null = null;

  selectCard(card: CardViewModel): void {
    const index = this.selectedCards.findIndex(
      (selectedCard) => selectedCard.instanceId === card.instanceId,
    );

    if (index === -1) {
      this.selectedCards.push(card);
    } else {
      this.selectedCards.splice(index, 1);
    }

    this.cardSelected.emit(card);
  }

  isCardSelected(card: CardViewModel): boolean {
    return this.selectedCards.some(
      (selectedCard) => selectedCard.instanceId === card.instanceId,
    );
  }

  cancelSelection(): void {
    this.selectedCards = [];
  }

  confirmDiscard(): void {
    if (!this.canDiscard || this.selectedCards.length === 0) {
      return;
    }

    this.cardsDiscarded.emit([...this.selectedCards]);

    this.selectedCards = [];
  }

  showCardDetails(): void {
    if (this.selectedCards.length !== 1) {
      return;
    }

    this.selectedCardForDetails = this.selectedCards[0];
    console.log('CARTA SELEZIONATA', this.selectedCards[0]);
  }

  closeCardDetails(): void {
    this.selectedCardForDetails = null;
  }
}
