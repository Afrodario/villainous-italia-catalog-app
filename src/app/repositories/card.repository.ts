import { Injectable } from '@angular/core';

import { Card, CardType } from '../models/card.model';
import { CardDefinition } from '../models/card-definition.model';
import { ALL_CARDS } from '../data';

@Injectable({
  providedIn: 'root',
})
export class CardRepository {
  private readonly cards = ALL_CARDS;

  getAll(): CardDefinition[] {
    return this.cards;
  }

  getById(id: string): CardDefinition {
    const card = this.cards.find((card) => card.id === id);

    if (!card) {
      throw new Error(`Carta "${id}" non trovata`);
    }

    return card;
  }

  getRandomCards(count: number): CardDefinition[] {
    return [...this.cards].sort(() => Math.random() - 0.5).slice(0, count);
  }

  getVillainDeck(villainId: string): CardDefinition[] {
    return this.cards.filter(
      (card) =>
        card.villainId === villainId &&
        !card.isFateCard &&
        card.deck !== 'additional',
    );
  }

  getAdditionalDeck(villainId: string): CardDefinition[] {
    return this.cards.filter(
      (card) =>
        card.villainId === villainId &&
        !card.isFateCard &&
        card.deck === 'additional',
    );
  }

  getFateDeck(villainId: string): CardDefinition[] {
    return this.cards.filter(
      (card) => card.villainId === villainId && card.isFateCard,
    );
  }

  getByType(type: CardType) {
    return this.cards.filter((c) => c.type === type);
  }
  getByVillain(villainId: string): CardDefinition[] {
    return this.cards.filter((card) => card.villainId === villainId);
  }
  getByExpansion(expansionId: string): CardDefinition[] {
    return this.cards.filter((card) => card.expansionId === expansionId);
  }

  getCardsByVillain(villainId: string): CardDefinition[] {
    return this.cards.filter((card) => card.villainId === villainId);
  }
  search(text: string): CardDefinition[] {
    const value = text.toLowerCase();

    return this.cards.filter(
      (card) =>
        card.name.toLowerCase().includes(value) ||
        card.description.toLowerCase().includes(value),
    );
  }
}
