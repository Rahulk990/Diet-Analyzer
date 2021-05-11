import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import { ItemService } from '../shared/services/item.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  searchFilter: string = '';
  isLogin: boolean = false;
  authSub: Subscription | any;
  username: string = '';

  constructor(
    private itemService: ItemService,
    private authService: AuthService
  ) {
    this.authSub = this.authService.userProvider.subscribe((user) => {
      if (user.items.length) {
        console.log(user);
        this.username = user.username;
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.authSub.unsubscribe();
  }

  onSubmit(event: string): void {
    this.itemService.searchEmitter.next(event);
  }

  onLogout(): void {
    this.authService.logout();
  }
}
