export interface VillainProgression {
  villainId: string;
  items: VillainProgressItem[];
}

export type VillainProgressRequirement =
  | VillainProgressPercentageRequirement
  | VillainProgressCounterRequirement
  | VillainProgressStepRequirement
  | VillainProgressChoiceRequirement;

export interface VillainProgressPercentageRequirement {
  type: 'percentage';
  min: number;
}

export interface VillainProgressCounterRequirement {
  type: 'counter';
  itemId: string;
  min: number;
}

export interface VillainProgressStepRequirement {
  type: 'step';
  itemId: string;
}

export interface VillainProgressChoiceRequirement {
  type: 'choice';
  itemId: string;
  optionId: string;
}

export type VillainProgressItem =
  | VillainProgressStep
  | VillainProgressCounter
  | VillainProgressChoice;

export interface VillainProgressStep {
  type: 'step';
  id: string;
  label: string;
  percentage: number;
  requires?: VillainProgressRequirement;
}

export interface VillainProgressCounter {
  type: 'counter';
  id: string;
  label: string;
  min?: number;
  max?: number;
  percentagePerUnit: number;
  requires?: VillainProgressRequirement;
}

export interface VillainProgressChoice {
  type: 'choice';
  id: string;
  label: string;
  options: VillainProgressChoiceOption[];
  requires?: VillainProgressRequirement;
}

export interface VillainProgressChoiceOption {
  id: string;
  label: string;
  percentage: number;
}

// Stato corrente della partita

export interface VillainProgressState {
  items: VillainProgressItemState[];
}

export type VillainProgressItemState =
  | VillainProgressStepState
  | VillainProgressCounterState
  | VillainProgressChoiceState;

export interface VillainProgressStepState {
  type: 'step';
  id: string;
  completed: boolean;
}

export interface VillainProgressCounterState {
  type: 'counter';
  id: string;
  value: number;
}

export interface VillainProgressChoiceState {
  type: 'choice';
  id: string;
  selectedOptionId: string | null;
}
