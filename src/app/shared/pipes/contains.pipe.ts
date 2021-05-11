import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../services/item.service';

@Pipe({
  name: 'contains',
})
export class ContainsPipe implements PipeTransform {
  transform(value: Item | any, filter: string): boolean {
    if (filter.length <= 0) {
      return false;
    }

    let result: boolean = false;
    filter = filter.toLowerCase();

    if (!value.foodItemsArray) {
      return false;
    }

    for (let foodItem of value.foodItemsArray) {
      if (foodItem.name.toLowerCase().includes(filter)) {
        result = true;
      }

      if (!foodItem.ingredients) {
        continue;
      }

      for (let ingredient of foodItem.ingredients) {
        if (ingredient.includes(filter)) {
          result = true;
        }
      }
    }

    return result;
  }
}
