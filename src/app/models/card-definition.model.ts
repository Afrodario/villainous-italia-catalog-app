import { CardStrategy } from './card-strategy.model';

export type CardType = 'ally' | 'item' | 'effect' | 'condition' | 'hero';

export interface CardDefinition {
  id: string;
  villainId: string;
  expansionId: string;
  name: string;
  image: string;
  type: CardType;
  quantity: number;
  cost?: number;
  description: string;
  strategy?: CardStrategy;
  strength?: number;
  strengthModifier?: number;
  faq?: string[];
  isFateCard?: boolean;
}
