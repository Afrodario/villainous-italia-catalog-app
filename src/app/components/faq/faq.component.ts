import { Component } from '@angular/core';
import {
  FAQ_UPDATE,
  GENERAL_FAQ,
  SPECIAL_CARD_FAQ,
  VILLAIN_FAQ,
  CURRENCY_LOSS_CARDS,
  ANY_TEXT_CARDS,
} from './faq.data';
import { FaqEntry, VillainFaq } from './faq.model';

@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: 'faq.component.html',
})
export class FaqComponent {
  readonly update = FAQ_UPDATE;
  readonly generalFaq = GENERAL_FAQ;
  readonly specialCardFaq = SPECIAL_CARD_FAQ;
  readonly villainFaq = VILLAIN_FAQ;
  readonly currencyLossCards = CURRENCY_LOSS_CARDS;
  readonly anyTextCards = ANY_TEXT_CARDS;

  expandedVillainId: string | null = null;

  toggleVillain(villainId: string): void {
    this.expandedVillainId =
      this.expandedVillainId === villainId ? null : villainId;
  }

  isVillainExpanded(villainId: string): boolean {
    return this.expandedVillainId === villainId;
  }

  trackByVillain(_index: number, villain: VillainFaq): string {
    return villain.villainId;
  }

  trackByEntry(_index: number, entry: FaqEntry): string {
    return `${entry.card ?? 'mechanic'}-${entry.question}`;
  }
}
