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

  getCardTypeLabel(type: CardType): string {
    const labels: Record<CardType, string> = {
      ally: 'ALLEATO',
      item: 'OGGETTO',
      effect: 'EFFETTO',
      condition: 'CONDIZIONE',
      hero: 'EROE',
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
    };

    return classes[type];
  }

  formatCardText(text: string): string {
    if (!text) {
      return '';
    }

    return (
      text
        .replace(
          /\b(Activate|Attivare):\s*/g,
          '<span class="mx-1 inline-flex items-center rounded-md border border-orange-500/40 bg-orange-500/10 px-1.5 py-0.5 align-middle text-xs font-black text-orange-400" title="Attivare">⚡</span>',
        )
        // HERO
        .replace(
          /\bHero\b/g,
          '<span class="font-bold text-yellow-400">Hero</span>',
        )
        .replace(
          /\bEroe\b/g,
          '<span class="font-bold text-yellow-400">Eroe</span>',
        )
        .replace(
          /\bEroi\b/g,
          '<span class="font-bold text-yellow-400">Eroi</span>',
        )

        // ALLY
        .replace(
          /\bAlly\b/g,
          '<span class="font-bold text-red-400">Ally</span>',
        )
        .replace(
          /\bAlleato\b/g,
          '<span class="font-bold text-red-400">Alleato</span>',
        )
        .replace(
          /\bAlleati\b/g,
          '<span class="font-bold text-red-400">Alleati</span>',
        )

        // ITEM
        .replace(
          /\bItem\b/g,
          '<span class="font-bold text-sky-400">Item</span>',
        )
        .replace(
          /\bOggetto\b/g,
          '<span class="font-bold text-sky-400">Oggetto</span>',
        )
        .replace(
          /\bOggetti\b/g,
          '<span class="font-bold text-sky-400">Oggetti</span>',
        )

        // EFFECT
        .replace(
          /\bEffect\b/g,
          '<span class="font-bold text-green-400">Effect</span>',
        )
        .replace(
          /\bEffetto\b/g,
          '<span class="font-bold text-green-400">Effetto</span>',
        )
        .replace(
          /\bEffetti\b/g,
          '<span class="font-bold text-green-400">Effetti</span>',
        )

        // CONDITION
        .replace(
          /\bCondition\b/g,
          '<span class="font-bold text-purple-400">Condition</span>',
        )
        .replace(
          /\bCondizione\b/g,
          '<span class="font-bold text-purple-400">Condizione</span>',
        )
        .replace(
          /\bCondizioni\b/g,
          '<span class="font-bold text-purple-400">Condizioni</span>',
        )
    );
  }
}
