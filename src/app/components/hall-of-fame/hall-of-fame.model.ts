export type PlayerResult = number | 'NP';

export interface Player {
  id: string;
  name: string;
  totalPoints: number;
  averagePoints: number;
  participations: number;
  absences: number;
  presenceRate: number;
  qualificationIndex: number;
  results: Record<string, PlayerResult>;
}

export interface SpecialResult {
  value: number;
  label: string;
  description: string;
}

export interface Tournament {
  id: string;
  name: string;
  year: number;
  order: number;
  specialResults?: SpecialResult[];
}

export interface HallOfFameData {
  players: Player[];
  tournaments: Tournament[];
}