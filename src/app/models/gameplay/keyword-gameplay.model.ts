export interface KeywordGameplay {
  id: string;
  name: string;
  description: string;
  imagePath: string;
  rules: {
    paragraphs: string[];
  };
  clarifications?: {
    paragraphs: string[];
  };
  cardLists: KeywordCardList[];
}

export interface KeywordCardList {
  id: string;
  listType: string;
  listTypeDescription?: string[];
  cardIds: string[];
}
