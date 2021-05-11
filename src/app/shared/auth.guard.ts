import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.userProvider.pipe(
      take(1),
      map((user) => {
        if (user.items.length) {
          return true;
        }
        return this.router.createUrlTree(['/']);
      })
    );
  }
}
