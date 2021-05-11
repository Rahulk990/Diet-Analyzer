import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import { ItemService } from '../shared/services/item.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
})
export class CalenderComponent implements OnInit, AfterViewInit, OnDestroy {
  itemOpen: number = -1;
  @ViewChild('calender') private divCalender: ElementRef | any;
  searchFilter: string = '';
  searchSub: Subscription | any;
  authSub: Subscription | any;

  constructor(
    public itemService: ItemService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.itemService.initiateCalender();
    this.searchSub = this.itemService.searchEmitter.subscribe((filter) => {
      this.searchFilter = filter;
    });
    this.authSub = this.authService.userProvider.subscribe((user) => {
      this.itemService.mergeItems(user.items);
    });
  }

  ngAfterViewInit(): void {
    // Scroll to Bottom
    this.divCalender.nativeElement.scrollTop =
      this.divCalender.nativeElement.scrollHeight;
  }

  onItemClick(index: number): void {
    this.itemOpen = index;
  }

  onCloseItemDetails(): void {
    this.authService.saveUser(this.itemService.itemsArray);
    this.itemOpen = -1;
  }

  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
    this.authSub.unsubscribe();
  }
}
