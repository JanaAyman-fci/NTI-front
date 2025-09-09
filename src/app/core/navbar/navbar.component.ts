import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn!: Observable<boolean>;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  this.isLoggedIn = this.authService.isLoggedIn();
  this.isLoggedIn.subscribe(val => {
    console.log('Navbar isLoggedIn value:', val);
  });
}


  logout() {
    this.authService.logout();
  }
}
