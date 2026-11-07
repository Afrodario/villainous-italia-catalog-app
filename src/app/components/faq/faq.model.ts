export interface FaqUpdate {
  version: string;
  date: string;
  changes: string[];
}

export interface GeneralFaq {
  number: number;
  text: string;
}

export interface SpecialCardFaq {
  card: string;
  villain: string;
  text: string;
}

export interface FaqEntry {
  card?: string;
  question: string;
  //answer?: string;
  source: string;
}

export interface VillainFaq {
  villainId: string;
  villainName: string;
  mechanics?: FaqEntry[];
  cards?: FaqEntry[];
}

export interface CardListEntry {
  villain: string;
  card: string;
  clarification: string;
}

export interface CardListGroup {
  title: string;
  description: string;
  entries: CardListEntry[];
}

export interface AnyCardEntry extends CardListEntry {
  originalText: string;
}
