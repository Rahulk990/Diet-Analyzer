import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Item, ItemService } from './item.service';

interface User {
  username: string;
  items: Item[];
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  username: string = '';
  userProvider = new BehaviorSubject<User>({ username: '', items: [] });

  constructor(private router: Router, private itemService: ItemService) {}

  loadUser(username: string): boolean {
    const userData = localStorage.getItem(username);
    if (userData) {
      this.username = username;
      this.userProvider.next(JSON.parse(userData));
      return true;
    } else {
      return false;
    }
  }

  createUser(username: string): boolean {
    const userData = localStorage.getItem(username);
    if (userData) {
      return false;
    } else {
      const newItems = this.itemService.generateCalender();
      const newUserData = { username: username, items: newItems };
      localStorage.setItem(username, JSON.stringify(newUserData));
      this.username = username;
      this.userProvider.next(newUserData);
      return true;
    }
  }

  saveUser(itemsArray: Item[]) {
    localStorage.setItem(
      this.username,
      JSON.stringify({ username: this.username, items: itemsArray })
    );
  }

  logout(): void {
    this.username = '';
    this.userProvider.next({ username: '', items: [] });
    this.router.navigate(['/']);
  }
}
