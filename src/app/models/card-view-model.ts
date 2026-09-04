import { CardStrategy } from './card-strategy.model';
import { CardVariant } from './card-variant.model';

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
  | 'omnidroid';

export type CardSort = 'name' | 'cost' | 'quantity' | 'strength' | 'type';

export interface CardViewModel {
  instanceId: string;
  definitionId: string;
  name: string;
  image: string;
  type: CardType;
  additionalType?: CardType;
  cost?: number | '?';
  quantity: number;
  description: string;
  strategy?: CardStrategy;
  strength?: number;
  strengthModifier?: number;
  faq?: string[];
  variants?: CardVariant[];
  isFateCard?: boolean;
  isTile?: boolean;
  deck?: 'villain' | 'additional';
}
