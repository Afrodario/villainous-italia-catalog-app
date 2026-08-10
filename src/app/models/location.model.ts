export interface Location {
  id: string;
  name: string;
  image: string;
  description: string;
  upperActions: string[];
  lowerActions: string[];
  isLocked?: boolean
}
