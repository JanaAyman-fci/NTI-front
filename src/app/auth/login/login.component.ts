import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {
  credentials: { email: string; password: string } = { email: '', password: '' };
  errorMsg = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit(): void {
    this.auth.login(this.credentials).subscribe({
      next: () => this.router.navigate(['/profile']),
      error: () => (this.errorMsg = 'Invalid email or password')
    });
  }
}
