import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ItemModelService, Item } from '../shared/services/item-model.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
})
export class CalenderComponent implements OnInit, AfterViewInit {
  // itemsArray: Item[] = [
  //   {
  //     date: new Date(),
  //     isReaction: true,
  //   },
  //   {
  //     date: new Date(),
  //     foodItemsArray: [
  //       { name: 'Egg And Butter and Nasd' },
  //       { name: 'Milk' },
  //       { name: 'Bread' },
  //       { name: 'Milk' },
  //       { name: 'Bread' },
  //     ],
  //     isReaction: true,
  //   },
  //   {
  //     date: new Date(),
  //     isReaction: false,
  //   },
  //   {
  //     date: new Date(),
  //     foodItemsArray: [
  //       { name: 'Egg And Butter and Nasd' },
  //       { name: 'Milk' },
  //       { name: 'Bread' },
  //       { name: 'Milk' },
  //       { name: 'Bread' },
  //     ],
  //     isReaction: false,
  //   },
  //   {
  //     date: new Date(),
  //     isReaction: true,
  //   },
  // ];

  itemOpen: number = -1;
  @ViewChild('calender') private divCalender: ElementRef | any;

  constructor(public itemService: ItemModelService) {}

  ngOnInit(): void {
    this.itemService.generateCalender();
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
    console.log(this.itemService.itemsArray)
  }
}
