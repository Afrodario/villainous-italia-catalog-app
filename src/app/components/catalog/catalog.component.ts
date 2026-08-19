import { Component, ElementRef, ViewChild } from '@angular/core';
import { afterNextRender } from '@angular/core';

import { Expansion } from '../../models/expansion.model';

import { ExpansionRepository } from '../../repositories/expansion.repository';
import { Villain } from '../../models/villain.model';
import { VillainRepository } from '../../repositories/villain.repository';
import { CardGalleryComponent } from '../card-gallery/card-gallery.component';
import { CardSort, CardViewModel } from '../../models/card-view-model';
import { CardRepository } from '../../repositories/card.repository';
import { CardDefinition } from '../../models/card-definition.model';
import { RealmRepository } from '../../repositories/realm.repository';
import { Realm } from '../../models/realm.model';
import { LocationGalleryComponent } from '../location-gallery/location-gallery.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CardGalleryComponent, LocationGalleryComponent],
  templateUrl: './catalog.component.html',
})
export class CatalogComponent {
  expansions: Expansion[] = [];
  selectedExpansion: Expansion | null = null;
  villains: Villain[] = [];
  selectedVillain: Villain | null = null;
  cards: CardViewModel[] = [];
  villainDeck: CardViewModel[] = [];
  fateDeck: CardViewModel[] = [];
  realm?: Realm;
  selectedMover: Villain | null = null;
  selectedDeckBack: string | null = null;
  selectedDeckBackTitle = '';

  villainDeckSortBy: CardSort = 'quantity';
  fateDeckSortBy: CardSort = 'quantity';

  @ViewChild('villainsSection')
  villainsSection?: ElementRef<HTMLElement>;
  @ViewChild('deckSection')
  deckSection?: ElementRef<HTMLElement>;

  sortOptions: { value: CardSort; label: string }[] = [
    { value: 'quantity', label: 'Copie' },
    { value: 'cost', label: 'Costo' },
    { value: 'type', label: 'Tipo' },
    { value: 'name', label: 'Nome' },
    { value: 'strength', label: 'Forza' },
  ];

  constructor(
    private expansionRepository: ExpansionRepository,
    private villainRepository: VillainRepository,
    private cardRepository: CardRepository,
    private realmRepository: RealmRepository,
  ) {
    this.expansions = this.expansionRepository.getAll();
  }

  selectExpansion(expansion: Expansion): void {
    this.selectedExpansion = expansion;

    this.selectedVillain = null;

    this.villainDeck = [];
    this.fateDeck = [];

    this.villains = this.villainRepository.getByExpansion(expansion.id);

    requestAnimationFrame(() => {
      this.villainsSection?.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

  selectVillain(villain: Villain): void {
    this.selectedVillain = villain;

    console.log('SELECTED VILLAIN', villain);

    this.villainDeck = this.toCardViewModels(
      this.cardRepository.getVillainDeck(villain.id),
    );

    this.fateDeck = this.toCardViewModels(
      this.cardRepository.getFateDeck(villain.id),
    );

    this.realm = this.realmRepository.getByVillainId(villain.id);

    requestAnimationFrame(() => {
      this.deckSection?.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

  openMover(villain: Villain): void {
    this.selectedMover = villain;
  }

  closeMover(): void {
    this.selectedMover = null;
  }

  openDeckBack(image: string, title: string): void {
    this.selectedDeckBack = image;
    this.selectedDeckBackTitle = title;
  }

  closeDeckBack(): void {
    this.selectedDeckBack = null;
    this.selectedDeckBackTitle = '';
  }

  get villainDeckCardCount(): number {
    return this.villainDeck.reduce((total, card) => total + card.quantity, 0);
  }

  get fateDeckCardCount(): number {
    return this.fateDeck.reduce((total, card) => total + card.quantity, 0);
  }

  private toCardViewModels(definitions: CardDefinition[]): CardViewModel[] {
    return definitions.map((card) => ({
      instanceId: card.id,
      definitionId: card.id,

      name: card.name,
      image: card.image,
      type: card.type,

      cost: card.cost,
      quantity: card.quantity,
      description: card.description,
      strategy: card.strategy,
      strength: card.strength,
      strengthModifier: card.strengthModifier,
      faq: card.faq,

      isFateCard: card.isFateCard,
    }));
  }
}
