export interface Location {
  id: string;
  name: string;
  image: string;
  description: {
    paragraphs: string[];
  };
  upperActions: string[];
  lowerActions: string[];
  isLocked?: boolean;
  gainPower?: number;
}
