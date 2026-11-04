import { Component, OnInit, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { HallOfFameService } from './hall-of-fame.service';
import { Player, PlayerResult, Tournament } from './hall-of-fame.model';

@Component({
  selector: 'app-hall-of-fame',
  standalone: true,
  imports: [NgClass],
  template: `
    <section class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      @if (isLoading) {
        <div class="py-12 text-center text-slate-400">
          Caricamento della classifica...
        </div>
      } @else if (errorMessage) {
        <div
          class="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-300"
        >
          {{ errorMessage }}
        </div>
      } @else {
        @if (selectedPlayer; as player) {
          <!-- PROFILO GIOCATORE -->

          <button
            type="button"
            (click)="backToRanking()"
            class="mb-6 flex items-center gap-2 text-sm font-bold text-amber-400 transition hover:text-amber-300"
          >
            <span aria-hidden="true">←</span>
            Torna alla classifica
          </button>

          <header class="mb-8">
            <p
              class="text-xs font-bold uppercase tracking-widest text-amber-400"
            >
              Profilo giocatore · #{{ getPosition(player) }}
            </p>

            <h2
              class="mt-2 text-3xl font-black uppercase tracking-wide text-white sm:text-4xl"
            >
              {{ player.name }}
            </h2>

            <p class="mt-2 text-sm text-slate-400">
              Hall of Fame · Classifica Nazionale Disney Villainous
            </p>
          </header>

          <!-- STATISTICHE -->

          <div class="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div class="rounded-xl border border-slate-700 bg-slate-800/70 p-4">
              <p class="text-xs uppercase tracking-wide text-slate-400">
                Indice qualificazione
              </p>
              <p class="mt-2 text-3xl font-black text-amber-400">
                {{ formatIndex(player.qualificationIndex) }}
              </p>
            </div>

            <div class="rounded-xl border border-slate-700 bg-slate-800/70 p-4">
              <p class="text-xs uppercase tracking-wide text-slate-400">
                Punti totali
              </p>
              <p class="mt-2 text-3xl font-black text-white">
                {{ player.totalPoints }}
              </p>
            </div>

            <div class="rounded-xl border border-slate-700 bg-slate-800/70 p-4">
              <p class="text-xs uppercase tracking-wide text-slate-400">
                Partecipazioni
              </p>
              <p class="mt-2 text-3xl font-black text-white">
                {{ player.participations }}
              </p>
            </div>

            <div class="rounded-xl border border-slate-700 bg-slate-800/70 p-4">
              <p class="text-xs uppercase tracking-wide text-slate-400">
                Presenze
              </p>
              <p class="mt-2 text-3xl font-black text-white">
                {{ getPresencePercentage(player) }}%
              </p>
            </div>
          </div>

          <!-- STORICO TORNEI -->

          <div class="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h3 class="text-xl font-black uppercase tracking-wide text-white">
              Storico tornei
            </h3>

            <span class="text-xs text-slate-400">
              {{ getVisibleTournaments(player).length }} /
              {{ tournaments.length }} tornei
            </span>
          </div>

          <!-- FILTRO TORNEI -->

          <div class="mb-5">
            <button
              type="button"
              (click)="toggleTournamentFilter()"
              class="rounded-lg border px-4 py-2 text-sm font-bold transition"
              [class.border-amber-400]="showOnlyParticipated"
              [class.bg-amber-500-10]="showOnlyParticipated"
              [class.text-amber-400]="showOnlyParticipated"
              [class.border-slate-600]="!showOnlyParticipated"
              [class.text-slate-300]="!showOnlyParticipated"
              [class.hover:bg-slate-700]="!showOnlyParticipated"
            >
              @if (showOnlyParticipated) {
                ✓ Solo tornei disputati
              } @else {
                Mostra solo tornei disputati
              }
            </button>
          </div>

          <div class="space-y-3">
            @for (
              tournament of getVisibleTournaments(player);
              track tournament.id
            ) {
              <article
                class="rounded-xl border border-slate-700 bg-slate-800/70 p-4"
              >
                <div class="flex items-center justify-between gap-3">
                  <div class="min-w-0 flex-1">
                    <h4 class="font-bold text-white">
                      {{ tournament.name }}
                    </h4>

                    <p class="mt-1 text-xs text-amber-400">
                      {{ tournament.tour }}
                    </p>

                    <p class="mt-1 text-xs text-slate-400">
                      {{ tournament.year }}
                    </p>
                  </div>

                  <div class="shrink-0 text-right">
                    <span
                      class="inline-flex min-w-12 justify-center rounded-lg px-3 py-2 text-sm font-black"
                      [class.bg-slate-700]="
                        getPlayerResult(player, tournament) === 'NP'
                      "
                      [class.text-slate-300]="
                        getPlayerResult(player, tournament) === 'NP'
                      "
                      [class.bg-slate-600]="
                        getPlayerResult(player, tournament) === 0
                      "
                      [class.text-white]="
                        getPlayerResult(player, tournament) === 0
                      "
                      [class.bg-amber-500-20]="
                        hasPositiveResult(player, tournament)
                      "
                      [class.text-amber-400]="
                        hasPositiveResult(player, tournament)
                      "
                    >
                      {{ getPlayerResult(player, tournament) ?? '—' }}
                    </span>
                  </div>
                </div>

                <p class="mt-3 text-sm text-slate-300">
                  {{ getResultDescription(player, tournament) }}
                </p>

                @if (
                  getSpecialDescription(player, tournament);
                  as description
                ) {
                  <p
                    class="mt-2 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3 text-xs leading-relaxed text-amber-200"
                  >
                    {{ description }}
                  </p>
                }
              </article>
            }
          </div>

          <button
            type="button"
            (click)="backToRanking()"
            class="mt-8 rounded-lg border border-slate-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-700"
          >
            ← Torna alla classifica
          </button>
        } @else {
          <!-- CLASSIFICA -->

          <header class="mb-8">
            <h2 class="text-2xl font-black uppercase tracking-wide text-white">
              Hall of Fame
            </h2>

            <p class="mt-2 text-sm text-slate-400">
              Classifica Nazionale Disney Villainous
            </p>
          </header>

          <!-- RICERCA -->

          <div class="mb-6">
            <label
              for="player-search"
              class="mb-2 block text-sm font-bold text-slate-300"
            >
              Cerca un giocatore
            </label>

            <div class="relative">
              <input
                id="player-search"
                type="search"
                [value]="searchTerm"
                (input)="onSearch($event)"
                placeholder="Inserisci il nome..."
                class="w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-400"
              />
            </div>
          </div>

          <div class="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p class="text-sm text-slate-400">
              Giocatori trovati:
              <span class="font-bold text-white">
                {{ filteredPlayers.length }}
              </span>
              / {{ players.length }}
            </p>
          </div>

          <!-- ELENCO GIOCATORI -->

          @if (filteredPlayers.length > 0) {
            <div class="space-y-3">
              @for (player of filteredPlayers; track player.id) {
                <button
                  type="button"
                  (click)="selectPlayer(player)"
                  class="flex w-full items-center gap-3 rounded-xl border border-slate-700 p-4 text-left shadow-sm transition hover:border-amber-400/60 sm:gap-5"
                >
                  <div
                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-700 text-sm font-black text-white sm:h-12 sm:w-12"
                  >
                    {{ getPosition(player) }}
                  </div>

                  <div class="min-w-0 flex-1">
                    <h3
                      class="truncate font-bold sm:text-lg"
                      [ngClass]="getPlayerNameClass(player)"
                    >
                      {{ player.name }}
                    </h3>

                    <p class="mt-1 text-xs text-slate-400 sm:text-sm">
                      {{ player.participations }} partecipazioni
                    </p>
                  </div>

                  <div class="flex shrink-0 items-center gap-2">
                    @if (getTournamentWins(player) > 0) {
                      <div
                        class="flex items-center gap-1 text-amber-400"
                        title="Numero di tornei vinti"
                      >
                        <svg
                          class="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M8 21h8" />
                          <path d="M12 17v4" />
                          <path d="M7 4h10v7a5 5 0 0 1-10 0V4Z" />
                          <path d="M17 5h3v2a4 4 0 0 1-3.5 4" />
                          <path d="M7 5H4v2a4 4 0 0 0 3.5 4" />
                        </svg>

                        <span class="text-sm font-black">
                          X {{ getTournamentWins(player) }}
                        </span>
                      </div>
                    }

                    <div class="text-right">
                      <p class="text-xs uppercase tracking-wide text-slate-400">
                        Indice
                      </p>
                      <p class="text-lg font-black text-amber-400 sm:text-xl">
                        {{ formatIndex(player.qualificationIndex) }}
                      </p>
                    </div>
                  </div>

                  <div class="hidden shrink-0 text-right sm:block">
                    <p class="text-xs uppercase tracking-wide text-slate-400">
                      Punti
                    </p>
                    <p class="text-lg font-bold text-white">
                      {{ player.totalPoints }}
                    </p>
                  </div>

                  <span class="shrink-0 text-slate-500" aria-hidden="true">
                    →
                  </span>
                </button>
              }
            </div>
          } @else {
            <div
              class="rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-12 text-center"
            >
              <p class="font-bold text-white">Nessun giocatore trovato</p>
              <p class="mt-2 text-sm text-slate-400">
                Prova a modificare il nome cercato.
              </p>
            </div>
          }
        }
      }
    </section>
  `,
})
export class HallOfFameComponent implements OnInit {
  private hallOfFameService = inject(HallOfFameService);
  players: Player[] = [];
  tournaments: Tournament[] = [];

  filteredPlayers: Player[] = [];
  selectedPlayer: Player | null = null;

  searchTerm = '';
  showOnlyParticipated = false;
  isLoading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.hallOfFameService.getData().subscribe({
      next: (data) => {
        this.players = [...data.players].sort((a, b) => {
          const indexDifference = b.qualificationIndex - a.qualificationIndex;

          if (indexDifference !== 0) {
            return indexDifference;
          }

          return b.totalPoints - a.totalPoints;
        });

        this.tournaments = [...data.tournaments].sort(
          (a, b) => a.order - b.order,
        );

        this.filteredPlayers = this.players;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Errore nel caricamento della Hall of Fame:', error);

        this.errorMessage =
          'Non è stato possibile caricare i dati della classifica.';

        this.isLoading = false;
      },
    });
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;

    const search = this.searchTerm.trim().toLocaleLowerCase('it');

    this.filteredPlayers = this.players.filter((player) =>
      player.name.toLocaleLowerCase('it').includes(search),
    );
  }

  selectPlayer(player: Player): void {
    this.selectedPlayer = player;
    this.showOnlyParticipated = false;
  }

  backToRanking(): void {
    this.selectedPlayer = null;
  }

  toggleTournamentFilter(): void {
    this.showOnlyParticipated = !this.showOnlyParticipated;
  }

  getVisibleTournaments(player: Player): Tournament[] {
    if (!this.showOnlyParticipated) {
      return this.tournaments;
    }

    return this.tournaments.filter(
      (tournament) => this.getPlayerResult(player, tournament) !== 'NP',
    );
  }

  getPosition(player: Player): number {
    return this.players.findIndex((p) => p.id === player.id) + 1;
  }

  getPlayerResult(
    player: Player,
    tournament: Tournament,
  ): PlayerResult | undefined {
    return player.results[tournament.id];
  }

  isNumericResult(player: Player, tournament: Tournament): boolean {
    return typeof this.getPlayerResult(player, tournament) === 'number';
  }

  getResultDescription(player: Player, tournament: Tournament): string {
    const result = this.getPlayerResult(player, tournament);

    if (result === undefined) {
      return 'Risultato non disponibile';
    }

    if (result === 'NP') {
      return 'Non partecipante';
    }

    if (result === 0) {
      return 'Partecipante, senza qualificazione al turno successivo';
    }

    if (result === 5) {
      return this.getSpecialLabel(tournament) ?? 'Riconoscimento speciale';
    }

    const descriptions: Record<number, string> = {
      1: 'Semifinalista',
      2: '3°, 4° o 5° posto',
      3: 'Secondo classificato',
      4: 'Campione / vincitore del torneo svizzero',
    };

    return descriptions[result] ?? 'Risultato registrato';
  }

  getSpecialLabel(tournament: Tournament): string | undefined {
    return tournament.specialResults?.find((special) => special.value === 5)
      ?.label;
  }

  getSpecialDescription(
    player: Player,
    tournament: Tournament,
  ): string | undefined {
    if (this.getPlayerResult(player, tournament) !== 5) {
      return undefined;
    }

    return tournament.specialResults?.find((special) => special.value === 5)
      ?.description;
  }

  getPresencePercentage(player: Player): string {
    return (player.presenceRate * 100).toFixed(0);
  }

  hasPositiveResult(player: Player, tournament: Tournament): boolean {
    const result = this.getPlayerResult(player, tournament);
    return typeof result === 'number' && result > 0;
  }

  formatIndex(value: number): string {
    return value.toLocaleString('it-IT', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 4,
    });
  }

  getPlayerNameClass(player: Player): string {
    if (player.totalPoints >= 5) {
      return 'text-orange-400';
    }

    if (player.totalPoints >= 2) {
      return 'text-sky-300';
    }

    return 'text-lime-300';
  }

  getTournamentWins(player: Player): number {
    return Object.values(player.results).filter(
      (result) => typeof result === 'number' && result >= 4,
    ).length;
  }
}
