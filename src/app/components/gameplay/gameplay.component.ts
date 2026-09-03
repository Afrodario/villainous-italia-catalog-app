import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

import { GameTextFormatterService } from '../../services/game-text-formatter.service';
import { ActionGameplay } from '../../models/gameplay/action-gameplay.model';
import { GameplayRepository } from '../../repositories/gameplay.repository';
import { CardTypeGameplay } from '../../models/gameplay/card-type-gameplay.model';
import { KeywordGameplay } from '../../models/gameplay/keyword-gameplay.model';
import { CardDefinition, CardType } from '../../models/card-definition.model';
import { CardRepository } from '../../repositories/card.repository';
import { VillainRepository } from '../../repositories/villain.repository';

type KeywordCardListSort = 'name' | 'villain' | 'type' | 'deck';
@Component({
  selector: 'app-gameplay',
  standalone: true,
  imports: [],
  templateUrl: './gameplay.component.html',
})
export class GameplayComponent {
  actionsGameplay: ActionGameplay[] = [];
  selectedAction: ActionGameplay | null = null;
  cardTypesGameplay: CardTypeGameplay[] = [];
  keywordsGameplay: KeywordGameplay[] = [];
  selectedCardType: CardTypeGameplay | null = null;
  selectedKeyword: KeywordGameplay | null = null;
  keywordCardListSorts: Record<string, KeywordCardListSort> = {};
  @Input() selectedActionId: string | null = null;

  @Output() cardSelected = new EventEmitter<string>();

  @ViewChild('cardTypeDetails')
  cardTypeDetails?: ElementRef<HTMLElement>;

  @ViewChild('actionDetails')
  actionDetails?: ElementRef<HTMLElement>;

  @ViewChild('actionsSection')
  actionsSection?: ElementRef<HTMLElement>;

  @ViewChild('cardTypesSection')
  cardTypesSection?: ElementRef<HTMLElement>;

  @ViewChild('keywordsSection')
  keywordsSection?: ElementRef<HTMLElement>;

  @ViewChild('keywordDetails')
  keywordDetails?: ElementRef<HTMLElement>;

  constructor(
    private gameplayRepository: GameplayRepository,
    public gameTextFormatter: GameTextFormatterService,
    private cardRepository: CardRepository,
    private villainRepository: VillainRepository,
  ) {
    this.actionsGameplay = this.gameplayRepository.getAllActions();
    this.cardTypesGameplay = this.gameplayRepository.getAllCardTypes();
    this.keywordsGameplay = this.gameplayRepository.getAllKeywords();
  }

  ngOnInit(): void {
    if (this.selectedActionId) {
      const action = this.actionsGameplay.find(
        (action) => action.id === this.selectedActionId,
      );

      if (action) {
        this.selectAction(action);
      }
    }
  }

  selectAction(action: ActionGameplay): void {
    this.selectedAction = action;

    requestAnimationFrame(() => {
      this.actionDetails?.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

  closeAction(): void {
    this.selectedAction = null;
  }

  selectCardType(cardType: CardTypeGameplay): void {
    this.selectedCardType = cardType;

    requestAnimationFrame(() => {
      this.cardTypeDetails?.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

  closeCardType(): void {
    this.selectedCardType = null;
  }

  get commonCardTypes(): CardTypeGameplay[] {
    return this.cardTypesGameplay.filter((cardType) => cardType.isCommon);
  }

  get specificCardTypes(): CardTypeGameplay[] {
    return this.cardTypesGameplay.filter((cardType) => !cardType.isCommon);
  }

  getVillainName(villainId: string): string {
    try {
      return this.villainRepository.getById(villainId).name;
    } catch {
      return villainId;
    }
  }

  openKeywordDetails(keyword: KeywordGameplay): void {
    this.selectedKeyword = keyword;

    requestAnimationFrame(() => {
      this.keywordDetails?.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

  closeKeywordDetails(): void {
    this.selectedKeyword = null;
  }

  selectKeywordCard(cardId: string): void {
    console.log('EMETTO ID');
    this.cardSelected.emit(cardId);
  }

  scrollToActions(): void {
    this.selectedAction = null;

    requestAnimationFrame(() => {
      this.actionsSection?.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

  scrollToCardTypes(): void {
    this.selectedCardType = null;

    requestAnimationFrame(() => {
      this.cardTypesSection?.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

  scrollToKeywords(): void {
    this.selectedKeyword = null;

    requestAnimationFrame(() => {
      this.keywordsSection?.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

  getCardsForList(cardIds: string[]): CardDefinition[] {
    return cardIds
      .map((id) => this.cardRepository.getById(id))
      .filter((card): card is CardDefinition => !!card);
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
      prince: 'PRINCIPE'
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
      titan: 'text-purple-100',
      prince: 'text-purple-200'
    };

    return classes[type];
  }

  getCardDeckLabel(card: CardDefinition): string {
    return card.isFateCard ? 'FATO' : 'CATTIVO';
  }

  sortCardsForKeywordList(
    cards: CardDefinition[],
    sortBy: KeywordCardListSort,
  ): CardDefinition[] {
    const sortedCards = [...cards];

    switch (sortBy) {
      case 'name':
        return sortedCards.sort((a, b) => a.name.localeCompare(b.name, 'it'));

      case 'villain':
        return sortedCards.sort((a, b) => {
          const villainA = this.getVillainName(a.villainId);
          const villainB = this.getVillainName(b.villainId);

          const villainComparison = villainA.localeCompare(villainB, 'it');

          if (villainComparison !== 0) {
            return villainComparison;
          }

          return a.name.localeCompare(b.name, 'it');
        });

      case 'type':
        return sortedCards.sort((a, b) => {
          const typeA = this.getCardTypeLabel(a.type);
          const typeB = this.getCardTypeLabel(b.type);

          const typeComparison = typeA.localeCompare(typeB, 'it');

          if (typeComparison !== 0) {
            return typeComparison;
          }

          return a.name.localeCompare(b.name, 'it');
        });

      case 'deck':
        return sortedCards.sort((a, b) => {
          const deckA = this.getCardDeckLabel(a);
          const deckB = this.getCardDeckLabel(b);

          const deckComparison = deckA.localeCompare(deckB, 'it');

          if (deckComparison !== 0) {
            return deckComparison;
          }

          return a.name.localeCompare(b.name, 'it');
        });
    }
  }

  getKeywordCardListSort(listId: string): KeywordCardListSort {
    return this.keywordCardListSorts[listId] ?? 'name';
  }

  setKeywordCardListSort(listType: string, sortBy: KeywordCardListSort): void {
    this.keywordCardListSorts[listType] = sortBy;
  }
}
