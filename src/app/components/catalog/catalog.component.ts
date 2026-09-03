import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
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
import { VILLAINS_IDS } from '../../models/villains-expansions-ids.model';
import { GameTextFormatterService } from '../../services/game-text-formatter.service';
import { VillainMechanics } from '../../models/villain-mechanics.model';
import { ExpansionCardComponent } from './expansion-card/expansion-card.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [
    CardGalleryComponent,
    LocationGalleryComponent,
    ExpansionCardComponent,
  ],
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnDestroy {
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
  showBackToVillains = false;
  private villainsObserver?: IntersectionObserver;

  villainDeckSortBy: CardSort = 'quantity';
  fateDeckSortBy: CardSort = 'quantity';

  @ViewChild('villainsSection')
  villainsSection?: ElementRef<HTMLElement>;
  @ViewChild('deckSection')
  deckSection?: ElementRef<HTMLElement>;

  @Input() cardToOpenId: string | null = null;
  @Output() gameplayActionSelected = new EventEmitter<string>();

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
    public gameTextFormatter: GameTextFormatterService,
  ) {
    this.expansions = this.expansionRepository.getAll();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cardToOpenId'] && this.cardToOpenId) {
      const card = this.cardRepository.getById(this.cardToOpenId);

      const villain = this.villainRepository.getById(card.villainId);

      console.log('Carta da aprire:', card);
      console.log('Villain:', villain);

      this.selectedExpansion =
        this.expansionRepository
          .getAll()
          .find((expansion) => expansion.id === villain.expansionId) ?? null;

      if (!this.selectedExpansion) {
        console.error(
          `Espansione "${villain.expansionId}" non trovata per il Villain "${villain.id}"`,
        );
        return;
      }

      this.villains = this.villainRepository.getByExpansion(
        this.selectedExpansion.id,
      );

      this.selectVillain(villain);
    }
  }

  selectExpansion(expansion: Expansion): void {
    console.log('SELECTED EXPANSION', expansion);
    this.selectedExpansion = expansion;

    this.selectedVillain = null;

    this.villainDeck = [];
    this.fateDeck = [];

    this.showBackToVillains = false;

    this.villains = this.villainRepository.getByExpansion(expansion.id);
    console.log('VILLAINS', this.villains);

    requestAnimationFrame(() => {
      this.setupVillainsObserver();

      this.villainsSection?.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

  scrollToVillains(): void {
    this.villainsSection?.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  private setupVillainsObserver(): void {
    this.villainsObserver?.disconnect();

    if (!this.villainsSection) {
      return;
    }

    this.villainsObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        this.showBackToVillains = !entry.isIntersecting;
      },
      {
        threshold: 0.1,
      },
    );

    this.villainsObserver.observe(this.villainsSection.nativeElement);
  }

  selectVillain(villain: Villain): void {
    this.selectedVillain = villain;

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

  goToGameplayAction(actionId: string): void {
    this.gameplayActionSelected.emit(actionId);
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

  private countDeckCards(cards: CardViewModel[]): number {
    return cards
      .filter((card) => !card.isTile)
      .reduce((total, card) => total + card.quantity, 0);
  }

  get villainDeckCardCount(): number {
    return this.countDeckCards(this.villainDeck);
  }

  get fateDeckCardCount(): number {
    return this.countDeckCards(this.fateDeck);
  }

  get baseSets(): Expansion[] {
    return this.expansions.filter((expansion) => expansion.isBaseSet);
  }

  get expansionsOnly(): Expansion[] {
    return this.expansions.filter((expansion) => !expansion.isBaseSet);
  }

  private toCardViewModels(definitions: CardDefinition[]): CardViewModel[] {
    return definitions.map((card) => ({
      instanceId: card.id,
      definitionId: card.id,

      name: card.name,
      image: card.image,
      type: card.type,
      additionalType: card.additionalType,
      cost: card.cost,
      quantity: card.quantity,
      description: card.description,
      strategy: card.strategy,
      strength: card.strength,
      strengthModifier: card.strengthModifier,
      faq: card.faq,
      variants: card.variants,
      isFateCard: card.isFateCard,
      isTile: card.isTile,
    }));
  }

  formatExpansionDate(date: Date): string {
    const formatted = new Intl.DateTimeFormat('it-IT', {
      month: 'long',
      year: 'numeric',
    }).format(date);

    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  }

  isStructuredMechanics(
    mechanics: string | VillainMechanics,
  ): mechanics is VillainMechanics {
    return typeof mechanics !== 'string';
  }

  ngOnDestroy(): void {
    this.villainsObserver?.disconnect();
  }
}
