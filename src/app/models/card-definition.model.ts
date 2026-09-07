import { CardStrategy } from './card-strategy.model';
import { CardVariant } from './card-variant.model';
import { ActionGameplay } from './gameplay/action-gameplay.model';

export type CardType =
  | 'ally'
  | 'item'
  | 'effect'
  | 'condition'
  | 'hero'
  | 'curse'
  | 'ingredient'
  | 'titan'
  | 'prince'
  | 'relic'
  | 'remote'
  | 'omnidroid'
  | 'guardian'
  | 'cheat'
  | 'prisoner'
  | 'transformationMerlin'
  | 'transformationMim'

export interface CardDefinition {
  id: string;
  villainId: string;
  expansionId: string;
  name: string;
  image: string;
  type: CardType;
  additionalType?: CardType;
  quantity: number;
  cost?: number | '?';
  description: string;
  strategy?: CardStrategy;
  strength?: number;
  strengthModifier?: number;
  faq?: string[];
  isFateCard?: boolean;
  variants?: CardVariant[];
  isTile?: boolean;
  deck?: 'villain' | 'additional';
  specifics?: CardSpecifics;
}

export interface CardSpecifics {
  hasActivate?: boolean;
  activateCost?: number;
  hasAddedAction?: boolean;
  addedAction?: ActionGameplay;
}
