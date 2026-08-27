import { CardStrategy } from './card-strategy.model';
import { CardVariant } from './card-variant.model';

export type CardType =
  | 'ally'
  | 'item'
  | 'effect'
  | 'condition'
  | 'hero'
  | 'curse'
  | 'ingredient';

export interface CardDefinition {
  id: string;
  villainId: string;
  expansionId: string;
  name: string;
  image: string;
  type: CardType;
  quantity: number;
  cost?: number | '?';
  description: string;
  strategy?: CardStrategy;
  strength?: number;
  strengthModifier?: number;
  faq?: string[];
  isFateCard?: boolean;
  variants?: CardVariant[];
}
