import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userData: { username: string; email: string; password: string } = {
    username: '',
    email: '',
    password: ''
  };

  errorMsg = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit(): void {
    this.auth.register(this.userData).subscribe({
      next: () => this.router.navigate(['/login']),
      error: () => (this.errorMsg = 'Registration failed')
    });
  }
}
