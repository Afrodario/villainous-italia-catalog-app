export interface VillainMechanics {
  setup?: string;
  rules: string[];
  victory?: string;
  victoryList?: {
    header: string,
    elements: string[]
  }
}