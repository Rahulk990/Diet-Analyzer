import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  username: string = '';
  isError: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  validate(): boolean {
    if (this.username.length < 6) {
      this.isError = true;
      this.errorMessage = 'Username must be at least 6 characters long';
    } else {
      this.isError = false;
    }
    return !this.isError;
  }

  onLoad(): void {
    if (this.validate()) {
      if (this.authService.loadUser(this.username)) {
        this.router.navigate(['/dashboard']);
      } else {
        this.isError = true;
        this.errorMessage = 'User not found';
      }
    }
  }

  onCreate(): void {
    if (this.validate()) {
      if (this.authService.createUser(this.username)) {
        console.log('User created');
        this.router.navigate(['/dashboard']);
      } else {
        this.isError = true;
        this.errorMessage = 'User already exists';
      }
    }
  }
}
