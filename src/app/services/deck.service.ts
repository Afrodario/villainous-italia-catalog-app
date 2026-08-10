import { Injectable } from '@angular/core';

import { CardInstance } from '../models/card-instance.model';
import { DeckDefinition } from '../models/deck.model';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  createDeck(definition: DeckDefinition): CardInstance[] {
    const deck = definition.cardIds.map((definitionId, index) => {
      return {
        instanceId: `${definitionId}-${index + 1}`,

        definitionId,
      };
    });

    this.shuffle(deck);

    return deck;
  }

  createCardInstance(definitionId: string): CardInstance {
    return {
      instanceId: `${definitionId}-${crypto.randomUUID()}`,

      definitionId,
    };
  }

  shuffle(cards: CardInstance[]): void {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  }
}
