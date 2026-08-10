export type CardType = 'ally' | 'item' | 'effect' | 'condition' | 'hero';

export type CardSort =
  | 'name'
  | 'cost'
  | 'quantity'
  | 'strength'
  | 'type';

export interface CardViewModel {
  instanceId: string;
  definitionId: string;
  name: string;
  image: string;
  type: CardType;
  cost?: number;
  quantity: number;
  description: string;
  strength?: number;
  faq?: string[];
  isFateCard?: boolean;
}
