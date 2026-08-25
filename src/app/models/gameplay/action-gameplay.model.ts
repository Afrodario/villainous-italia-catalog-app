export interface ActionGameplay {
  id: string;
  name: string;
  description: string;
  iconPath: string;

  rules: {
    paragraphs: string[];
  };

  clarifications?: {
    paragraphs: string[];
  };

  trivia?: {
    paragraphs: string[];
  };
}
