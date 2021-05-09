import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
  isAuthenticated: boolean = false;

  constructor(private router: Router) {}

  canActivate(): boolean | UrlTree {
    if (this.isAuthenticated) {
      return this.isAuthenticated;
    }
    return this.router.createUrlTree(['/']);
  }

  login(): void {
    this.isAuthenticated = true;
  }

  logout(): void {
    this.isAuthenticated = false;
  }
}
