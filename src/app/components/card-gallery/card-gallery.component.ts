import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import {
  CardSort,
  CardType,
  CardViewModel,
} from '../../models/card-view-model';
import { GameTextFormatterService } from '../../services/game-text-formatter.service';
import { CardVariant } from '../../models/card-variant.model';

@Component({
  selector: 'app-card-gallery',
  standalone: true,
  imports: [],
  templateUrl: './card-gallery.component.html',
})
export class CardGalleryComponent implements OnChanges {
  @Input()
  cards: CardViewModel[] = [];
  @Input()
  sortBy: CardSort = 'quantity';
  @Input() cardToOpenId: string | null = null;

  selectedCard: CardViewModel | null = null;
  selectedVariantIndex = 0;

  constructor(public gameTextFormatter: GameTextFormatterService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cardToOpenId'] && this.cardToOpenId) {
      const card = this.cards.find(
        (card) => card.definitionId === this.cardToOpenId,
      );

      if (card) {
        this.openDetails(card);
      }
    }
  }

  openDetails(card: CardViewModel): void {
    this.selectedCard = card;
    this.selectedVariantIndex = 0;

    console.log('CARD', card);
  }

  closeDetails(): void {
    this.selectedCard = null;
  }

  get selectedVariant(): CardVariant | null {
    if (!this.selectedCard?.variants?.length) {
      return null;
    }

    return this.selectedCard.variants[this.selectedVariantIndex] ?? null;
  }

  get sortedCards(): CardViewModel[] {
    const typeOrder: Record<CardType, number> = {
      ally: 1,
      item: 2,
      effect: 3,
      condition: 4,
      hero: 5,
      curse: 6,
      ingredient: 6,
      titan: 6,
    };

    const cards = [...this.cards];

    switch (this.sortBy) {
      case 'name':
        return cards.sort((a, b) => a.name.localeCompare(b.name));

      case 'cost':
        return cards.sort(
          (a, b) => this.getCostSortValue(a) - this.getCostSortValue(b),
        );

      case 'quantity':
        return cards.sort((a, b) => b.quantity - a.quantity);

      case 'strength':
        return cards.sort((a, b) => (b.strength ?? 0) - (a.strength ?? 0));

      case 'type':
        return cards.sort((a, b) => typeOrder[a.type] - typeOrder[b.type]);

      default:
        return cards;
    }
  }

  private getCostSortValue(card: CardViewModel): number {
    if (card.cost === undefined) {
      return 1000;
    }

    if (card.cost === '?') {
      return 999;
    }

    return card.cost;
  }

  getCardTypeLabel(type: CardType): string {
    const labels: Record<CardType, string> = {
      ally: 'ALLEATO',
      item: 'OGGETTO',
      effect: 'EFFETTO',
      condition: 'CONDIZIONE',
      hero: 'EROE',
      curse: 'MALEDIZIONE',
      ingredient: 'INGREDIENTE',
      titan: 'TITANO',
    };

    return labels[type];
  }

  getCardTypeClass(type: CardType): string {
    const classes: Record<CardType, string> = {
      ally: 'text-red-400',
      item: 'text-sky-400',
      effect: 'text-green-400',
      condition: 'text-purple-400',
      hero: 'text-yellow-400',
      curse: 'text-purple-400',
      ingredient: 'text-purple-300',
      titan: 'text-purple-200',
    };

    return classes[type];
  }

  previousVariant(): void {
    if (!this.selectedCard?.variants?.length) {
      return;
    }

    const total = this.selectedCard.variants.length;

    this.selectedVariantIndex = (this.selectedVariantIndex - 1 + total) % total;
  }

  nextVariant(): void {
    if (!this.selectedCard?.variants?.length) {
      return;
    }

    const total = this.selectedCard.variants.length;

    this.selectedVariantIndex = (this.selectedVariantIndex + 1) % total;
  }
}
