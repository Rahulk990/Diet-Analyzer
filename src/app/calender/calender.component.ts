import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemModelService } from '../shared/services/item-model.service';

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

  constructor(public itemService: ItemModelService) {}

  ngOnInit(): void {
    this.itemService.generateCalender();
    this.searchSub = this.itemService.searchEmitter.subscribe((filter) => {
      this.searchFilter = filter;
    });
  }

  ngAfterViewInit(): void {
    // Scroll to Bottom
    this.divCalender.nativeElement.scrollTop = this.divCalender.nativeElement.scrollHeight;
  }

  onItemClick(index: number): void {
    this.itemOpen = index;
  }

  onCloseItemDetails(): void {
    this.itemOpen = -1;
  }

  ngOnDestroy(): void {
    this.searchSub.unsubscribe();
  }
}
