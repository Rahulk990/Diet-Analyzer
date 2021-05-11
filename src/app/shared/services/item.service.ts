import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

export interface FoodItems {
  name: string;
  ingredients?: string[];
}

export interface Item {
  date: Date;
  foodItemsArray?: FoodItems[];
  isReaction: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  itemsArray: Item[] = [];
  searchEmitter = new Subject<string>();

  constructor() {}

  initiateCalender = () => {
    this.itemsArray = this.generateCalender();
  };

  generateCalender = () => {
    const calender: Item[] = [];
    const startDate = new Date(2021, 0, 1);
    const endDate = new Date();
    const days = Math.ceil(
      (endDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000)
    );

    for (let i = 0; i < days; i++) {
      calender.push({
        date: new Date(2021, 0, i + 1),
        isReaction: false,
      });
    }

    return calender;
  };

  updateItem(item: Item, index: number): void {
    this.itemsArray[index] = { ...item };
  }

  mergeItems(itemArray: Item[]): void {
    const startDate = new Date(2021, 0, 1);
    for (let item of itemArray) {
      const idx = Math.ceil(
        (new Date(item.date).getTime() - startDate.getTime()) /
          (24 * 60 * 60 * 1000)
      );
      this.itemsArray[idx] = item;
    }
  }
}
