export interface CardVariant {
  id: string;
  name: string;
  image: string;
  quantity: number;
  cost?: number | '?';
  strength?: number;
  description: string;
}