import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-login.component.html',
})
export class AdminLoginComponent {
  @Output() loginSuccess = new EventEmitter<void>();

  email = '';
  password = '';

  isLoading = false;
  errorMessage: string | null = null;

  constructor(
    private authService: AuthService,
  ) {}

  async onSubmit(): Promise<void> {
    this.errorMessage = null;
    this.isLoading = true;

    try {
      await this.authService.signIn(this.email, this.password);

      if (!this.authService.isAdmin()) {
        await this.authService.signOut();

        this.errorMessage =
          'Questo account non è autorizzato ad accedere all’area amministrativa.';

        return;
      }

      this.loginSuccess.emit();

    } catch (error) {
      console.error('Errore durante il login:', error);

      this.errorMessage =
        'Email o password non corretti. Controlla i dati e riprova.';

    } finally {
      this.isLoading = false;
    }
  }
}