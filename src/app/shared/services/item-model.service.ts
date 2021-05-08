import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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
export class ItemModelService {
  itemsArray: Item[] = [];
  searchEmitter = new Subject<string>();

  constructor() {}

  generateCalender = () => {
    const startDate = new Date(2021, 0, 1);
    const endDate = new Date();
    const days = Math.ceil(
      (endDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000)
    );

    for (let i = 0; i < days; i++) {
      this.itemsArray.push({
        date: new Date(2021, 0, i + 1),
        isReaction: false
      });
    }
  };

  updateItem(item: Item, index: number): void {
    this.itemsArray[index] = JSON.parse(JSON.stringify(item))
  }
}
