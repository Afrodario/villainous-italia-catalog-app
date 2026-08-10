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
  strength?: number;
  faq?: string[];
  isFateCard?: boolean;
}
