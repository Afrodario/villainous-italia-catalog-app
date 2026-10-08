export interface VillainProgression {
  villainId: string;
  items: VillainProgressItem[];
}

export type VillainProgressRequirement =
  | VillainProgressPercentageRequirement
  | VillainProgressCounterRequirement
  | VillainProgressStepRequirement
  | VillainProgressChoiceRequirement
  | VillainProgressChoiceSelectedRequirement
  | VillainProgressCapturedPuppiesRequirement;

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

export interface VillainProgressChoiceSelectedRequirement {
  type: 'choice-selected';
  itemId: string;
}

export interface VillainProgressCapturedPuppiesRequirement {
  type: 'captured-puppies';
  min: number;
}

export interface VillainProgressCounterGroup {
  type: 'counter-group';
  id: string;
  label: string;
  counterIds: string[];
  threshold: number;
  percentages: number[];
  requires?: VillainProgressRequirement[];
}

export interface VillainProgressDynamic {
  type: 'dynamic';
  id: string;
  label: string;
  maxPercentage: number;

  divisor?: number;
  percentagePerUnit?: number;

  alternativeDivisor?: number;
  alternativeDivisorRequirement?: VillainProgressRequirement;

  counterId?: string;
  counterSources?: VillainProgressDynamicCounterSource[];

  penaltyCounterId?: string;
  penaltyPerUnit?: number;

  requires?: VillainProgressRequirement[];
  remaining?: boolean;
}

export interface VillainProgressDynamicCounterSource {
  counterId: string;
  percentagePerUnit: number;
  max?: number;
}

export type VillainProgressItem =
  | VillainProgressStep
  | VillainProgressCounter
  | VillainProgressChoice
  | VillainProgressCounterGroup
  | VillainProgressDynamic;

export interface VillainProgressStep {
  type: 'step';
  id: string;
  label: string;
  percentage: number;
  requires?: VillainProgressRequirement[];
  completeProgression?: boolean;
}

export interface VillainProgressCounter {
  type: 'counter';
  id: string;
  label: string;
  min?: number;
  max?: number;
  percentagePerUnit: number;
  requires?: VillainProgressRequirement[];
}

export interface VillainProgressChoice {
  type: 'choice';
  id: string;
  label: string;
  options: VillainProgressChoiceOption[];
  requires?: VillainProgressRequirement[];
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
