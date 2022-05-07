import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByTag',
  pure: false
})
export class FilterByTagPipe implements PipeTransform {

  transform(arr: any, tagName: string = '', isSreach = false) {
    if(!tagName) {
      arr = arr.filter((item) =>  !item.tagsList || item.tagsList.length == 0);
    } else {
      if(isSreach) {
        arr = arr.filter((item) =>  item.tagsList?.some((x) => x.name.toLowerCase().includes(tagName.toLowerCase())));
      } else {
        arr = arr.filter((item) =>  item.tagsList?.some((x) => x.name == tagName));
      }
    }

    return arr;
  }

}
