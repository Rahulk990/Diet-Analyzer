import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../services/item-model.service';

@Pipe({
  name: 'contains',
})
export class ContainsPipe implements PipeTransform {
  transform(value: Item | any, filter: string): boolean {
    if (filter.length <= 0) {
      return false;
    }

    let result: boolean = false;

    if (!value.foodItemsArray) {
      return false;
    }

    for (let i = 0; i < value.foodItemsArray.length; i++) {
      if (value.foodItemsArray[i].name.includes(filter)) {
        result = true;
      }

      if (!value.foodItemsArray[i].ingredients) {
        continue;
      }

      for (let j = 0; j < value.foodItemsArray[i].ingredients.length; j++) {
        if (value.foodItemsArray[i].ingredients[j].includes(filter)) {
          result = true;
        }
      }
    }

    return result;
  }
}
