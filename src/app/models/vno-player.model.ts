export interface VnoPlayer {
  id: string;
  name: string;
  location: string | null;
  stamps: number;
  secret_plans: number;
  last_night_out_date: string | null;
  last_night_out_venue: string | null;
  created_at: string;
  updated_at: string;
}