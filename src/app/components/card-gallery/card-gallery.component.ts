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
      prince: 6,
      relic: 6,
      remote: 6,
      omnidroid: 6,
      guardian: 6
    };

    // Le tessere vengono escluse dal sorting
    const cards = this.cards.filter((card) => !card.isTile);
    const tiles = this.cards.filter((card) => card.isTile);

    switch (this.sortBy) {
      case 'name':
        cards.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case 'cost':
        cards.sort(
          (a, b) => this.getCostSortValue(a) - this.getCostSortValue(b),
        );
        break;

      case 'quantity':
        cards.sort((a, b) => b.quantity - a.quantity);
        break;

      case 'strength':
        cards.sort((a, b) => (b.strength ?? 0) - (a.strength ?? 0));
        break;

      case 'type':
        cards.sort((a, b) => typeOrder[a.type] - typeOrder[b.type]);
        break;
    }

    // Le tessere vengono sempre collocate alla fine
    return [...cards, ...tiles];
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
      prince: 'PRINCIPE',
      relic: 'RELIQUIA',
      remote: 'TELECOMANDO',
      omnidroid: 'OMNIDROIDE',
      guardian: 'GUARDIANO'
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
      prince: 'text-purple-200',
      relic: 'text-purple-300',
      remote: 'text-sky-400',
      omnidroid: 'text-sky-400',
      guardian: 'text-orange-400'
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
