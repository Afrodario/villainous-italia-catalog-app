import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import { VnoPlayer } from '../models/vno-player.model';
// import { VillainousNightOutService } from '../services/villainous-night-out.service';
// import { AuthService } from '../services/auth.service';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { VnoPlayer } from '../../models/vno-player.model';
import { VillainousNightOutService } from '../../services/villainous-night-out.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-villainous-night-out',
  standalone: true,
  imports: [FormsModule, AdminLoginComponent],
  templateUrl: './villainous-night-out.component.html',
})
export class VillainousNightOutComponent implements OnInit {
  players: VnoPlayer[] = [];

  searchTerm = '';
  isLoading = true;
  errorMessage: string | null = null;

  showLogin = false;
  authErrorMessage: string | null = null;

  // Nuovo giocatore
  newPlayerName = '';
  newPlayerLocation = '';
  isAddingPlayer = false;

  // Aggiornamento timbri
  selectedPlayerId = '';
  editedStamps = 0;
  isUpdatingStamps = false;

  // Messaggi amministrativi
  adminSuccessMessage: string | null = null;
  adminErrorMessage: string | null = null;

  constructor(
    private villainousNightOutService: VillainousNightOutService,
    public authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.loadPlayers();
  }

  async loadPlayers(): Promise<void> {
    this.isLoading = true;
    this.errorMessage = null;

    try {
      this.players = await this.villainousNightOutService.getPlayers();
    } catch (error) {
      console.error('Errore nel caricamento dei giocatori VNO:', error);

      this.errorMessage =
        'Non è stato possibile caricare i giocatori. Riprova più tardi.';
    } finally {
      this.isLoading = false;
    }
  }

  get filteredPlayers(): VnoPlayer[] {
    const search = this.searchTerm.trim().toLocaleLowerCase('it');

    if (!search) {
      return this.players;
    }

    return this.players.filter((player) =>
      player.name.toLocaleLowerCase('it').includes(search) ||
      player.location?.toLocaleLowerCase('it').includes(search),
    );
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
  }

  toggleLogin(): void {
    this.showLogin = !this.showLogin;
    this.authErrorMessage = null;
  }

  onLoginSuccess(): void {
    this.showLogin = false;
    this.authErrorMessage = null;
    this.adminSuccessMessage = 'Accesso amministratore effettuato.';
  }

  async logout(): Promise<void> {
    this.authErrorMessage = null;
    this.adminSuccessMessage = null;
    this.adminErrorMessage = null;

    try {
      await this.authService.signOut();

      this.selectedPlayerId = '';
      this.editedStamps = 0;
    } catch (error) {
      console.error('Errore durante il logout:', error);
      this.authErrorMessage =
        'Non è stato possibile completare il logout. Riprova.';
    }
  }

  // Aggiunge un nuovo giocatore
  async addPlayer(): Promise<void> {
    const name = this.newPlayerName.trim();
    const location = this.newPlayerLocation.trim();

    if (!name) {
      this.adminErrorMessage = 'Inserisci il nome del giocatore.';
      return;
    }

    this.clearAdminMessages();
    this.isAddingPlayer = true;

    try {
      const player = await this.villainousNightOutService.addPlayer(
        name,
        location,
      );

      this.players = [...this.players, player].sort((a, b) =>
        a.name.localeCompare(b.name, 'it'),
      );

      this.newPlayerName = '';
      this.newPlayerLocation = '';

      this.adminSuccessMessage =
        `Il giocatore ${player.name} è stato aggiunto correttamente.`;

    } catch (error) {
      console.error('Errore durante l\'inserimento del giocatore:', error);

      this.adminErrorMessage =
        'Non è stato possibile aggiungere il giocatore. Riprova.';
    } finally {
      this.isAddingPlayer = false;
    }
  }

  // Seleziona un giocatore da modificare
  onSelectedPlayerChange(playerId: string): void {
    this.selectedPlayerId = playerId;

    const player = this.players.find((p) => p.id === playerId);

    this.editedStamps = player?.stamps ?? 0;
    this.clearAdminMessages();
  }

  // Aggiorna il numero di timbri
  async updateStamps(): Promise<void> {
    const stamps = Number(this.editedStamps);

    if (!this.selectedPlayerId) {
      this.adminErrorMessage = 'Seleziona un giocatore.';
      return;
    }

    if (!Number.isInteger(stamps) || stamps < 0) {
      this.adminErrorMessage =
        'Il numero di timbri deve essere un intero maggiore o uguale a zero.';
      return;
    }

    this.clearAdminMessages();
    this.isUpdatingStamps = true;

    try {
      const updatedPlayer =
        await this.villainousNightOutService.updateStamps(
          this.selectedPlayerId,
          stamps,
        );

      this.players = this.players.map((player) =>
        player.id === updatedPlayer.id ? updatedPlayer : player,
      );

      this.adminSuccessMessage =
        `Timbri di ${updatedPlayer.name} aggiornati correttamente.`;

    } catch (error) {
      console.error('Errore durante l\'aggiornamento dei timbri:', error);

      this.adminErrorMessage =
        'Non è stato possibile aggiornare i timbri. Riprova.';
    } finally {
      this.isUpdatingStamps = false;
    }
  }

  private clearAdminMessages(): void {
    this.adminSuccessMessage = null;
    this.adminErrorMessage = null;
  }
}