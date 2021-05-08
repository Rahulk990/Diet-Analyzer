import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: any): any {
    let newArray = [];
    if (value.length > 4) {
      newArray = [...value.slice(0, 3)];
      newArray.push({ name: '...' });
    } else {
      newArray = [...value];
    }

    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].name.length > 12) {
        newArray[i].name = newArray[i].name.substring(0, 10) + ' ...';
      }
    }

    return newArray;
  }
}
