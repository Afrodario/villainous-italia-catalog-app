import { Component, Input } from '@angular/core';

import {
  CardSort,
  CardType,
  CardViewModel,
} from '../../models/card-view-model';

@Component({
  selector: 'app-card-gallery',
  standalone: true,
  imports: [],
  templateUrl: './card-gallery.component.html',
})
export class CardGalleryComponent {
  @Input()
  cards: CardViewModel[] = [];
  @Input()
  sortBy: CardSort = 'quantity';

  selectedCard: CardViewModel | null = null;

  openDetails(card: CardViewModel): void {
    this.selectedCard = card;
    console.log('CARD', card);
  }

  closeDetails(): void {
    this.selectedCard = null;
  }

  get sortedCards(): CardViewModel[] {
    const typeOrder: Record<CardType, number> = {
      ally: 1,
      item: 2,
      effect: 3,
      condition: 4,
      hero: 5,
    };

    const cards = [...this.cards];

    switch (this.sortBy) {
      case 'name':
        return cards.sort((a, b) => a.name.localeCompare(b.name));

      case 'cost':
        return cards.sort((a, b) => (a.cost ?? 999) - (b.cost ?? 999));

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

  formatCardText(text: string): string {
    if (!text) {
      return '';
    }

    return text
      .replace(
        /\bHero\b/g,
        '<span class="font-bold text-yellow-400">Hero</span>',
      )
      .replace(/\bAlly\b/g, '<span class="font-bold text-red-400">Ally</span>')
      .replace(/\bItem\b/g, '<span class="font-bold text-sky-400">Item</span>')
      .replace(
        /\bEffect\b/g,
        '<span class="font-bold text-green-400">Effect</span>',
      )
      .replace(
        /\bCondition\b/g,
        '<span class="font-bold text-purple-400">Condition</span>',
      )
      // .replace(
      //   /\bLocation\b/g,
      //   '<span class="font-bold text-orange-400">Location</span>',
      // )
      // .replace(
      //   /\bPower\b/g,
      //   '<span class="font-bold text-amber-400">Power</span>',
      // );
  }
}
