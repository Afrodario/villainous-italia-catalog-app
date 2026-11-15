import { Injectable, computed, signal } from '@angular/core';

import { Session, User } from '@supabase/supabase-js';

import { SupabaseService } from './supabase.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private session = signal<Session | null>(null);

  readonly user = computed<User | null>(() => this.session()?.user ?? null);

  readonly isAuthenticated = computed(() => this.user() !== null);

  readonly isAdmin = computed(
    () => this.user()?.id === environment.supabaseAdminUserId,
  );

  constructor(private supabaseService: SupabaseService) {
    const client = this.supabaseService.client;

    client.auth.onAuthStateChange((_event, session) => {
      this.session.set(session);
    });

    client.auth.getSession().then(({ data, error }) => {
      if (!error) {
        this.session.set(data.session);
      }
    });
  }

  async signIn(email: string, password: string): Promise<void> {
    const { data, error } =
      await this.supabaseService.client.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      throw error;
    }

    this.session.set(data.session);
  }

  async signOut(): Promise<void> {
    const { error } = await this.supabaseService.client.auth.signOut();

    if (error) {
      throw error;
    }

    this.session.set(null);
  }
}
