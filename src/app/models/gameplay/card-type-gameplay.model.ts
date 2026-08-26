export interface CardTypeGameplay {
  id: string;
  name: string;
  description: string;
  imagePath: string;
  isCommon: boolean;
  rules: {
    paragraphs: string[];
  };
  clarifications?: {
    paragraphs: string[];
  };
  faq?: {
    paragraphs: string[];
  };
}
