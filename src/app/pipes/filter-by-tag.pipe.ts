import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByTag',
  pure: false
})
export class FilterByTagPipe implements PipeTransform {

  transform(arr: any, tagName: string = ''): any {
    if(!tagName) {
      arr = arr.filter((item: any) =>  !item.tagsList || item.tagsList.length == 0);
    } else {
      arr = arr.filter((item: any) =>  item.tagsList?.some((x: any) => x.name == tagName));
    }

    return arr;
  }

}
