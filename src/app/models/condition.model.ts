export interface Conditions {
  minPower?: number;
  minHeroCount?: number;
  maxHeroCount?: number;
  minAllyCount?: number;
  minObjectiveProgress?: number;
  requiresMagicLamp?: boolean;

  minDiscardedCards?: number;
  minCardsDiscardedThisScene?: number;
}
