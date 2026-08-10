export type CardType = 'ally' | 'item' | 'effect' | 'condition' | 'hero';

export interface Card {
  id: string;
  villainId: string;
  expansionId: string;
  name: string;
  image: string;
  type: CardType;
  cost?: number;
  description: string;
  strength?: number;
  isFateCard?: boolean;
}
