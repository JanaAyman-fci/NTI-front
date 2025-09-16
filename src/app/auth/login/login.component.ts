import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  credentials: { username: string; password: string } = { username: '', password: '' };
  errorMsg = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit(): void {
    this.auth.login(this.credentials).subscribe({
      next: () => this.router.navigate(['/profile']),
      error: (err) => {
        console.error('Login failed', err);
        this.errorMsg = err.error?.message || 'Invalid username or password';
      }
    });
  }
}
