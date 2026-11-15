import { Injectable } from '@angular/core';

import { SupabaseService } from './supabase.service';
import { VnoPlayer } from '../models/vno-player.model';

@Injectable({
  providedIn: 'root',
})
export class VillainousNightOutService {
  constructor(
    private supabaseService: SupabaseService,
  ) {}

  // Recupera tutti i giocatori
  async getPlayers(): Promise<VnoPlayer[]> {
    const { data, error } = await this.supabaseService.client
      .from('vno_players')
      .select('*')
      .order('name', { ascending: true });

    if (error) {
      throw error;
    }

    return (data ?? []) as VnoPlayer[];
  }

  // Aggiunge un nuovo giocatore
  async addPlayer(
    name: string,
    location: string,
  ): Promise<VnoPlayer> {
    const { data, error } = await this.supabaseService.client
      .from('vno_players')
      .insert({
        name: name.trim(),
        location: location.trim() || null,
      })
      .select()
      .single();

    if (error) {
      throw error;
    }

    return data as VnoPlayer;
  }

  // Aggiorna il numero di timbri
  async updateStamps(
    playerId: string,
    stamps: number,
  ): Promise<VnoPlayer> {
    const { data, error } = await this.supabaseService.client
      .from('vno_players')
      .update({
        stamps,
        updated_at: new Date().toISOString(),
      })
      .eq('id', playerId)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return data as VnoPlayer;
  }
}