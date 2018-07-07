import { Pipe, PipeTransform } from '@angular/core';
import { List } from './list';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return null;
  }
}

//FILTER APPLIED ON BOOK LIST TO SEARCH BOOKS ACCORDING TO THEIR NAME
@Pipe({
  name: 'searchbook'
})
export class SearchbookPipe implements PipeTransform {
  transform(item: List[], searchText: string): any {
    if (!item) return [];
    if (!searchText) return item;
    searchText = searchText.toLowerCase();
    return item.filter(it => {
      return it.bkname.toLowerCase().includes(searchText);
    });
  }
}

//FILTER APPLIED ON BOOK LIST TO SEARCH BOOKS ACCORDING TO THEIR AUTHOR NAME
@Pipe({
  name: 'searchauthor'
})
export class SearchauthorPipe implements PipeTransform {
  transform(item: List[], searchText: string): any {
    if (!item) return [];
    if (!searchText) return item;
    searchText = searchText.toLowerCase();
    return item.filter(it => {
      return it.autname.toLowerCase().includes(searchText);
    });
  }
}

//FILTER APPLIED ON BOOK LIST TO SEARCH BOOKS ACCORDING TO THEIR PRICE
@Pipe({
  name: 'filterbyprice'
})
export class FilterbyPrice implements PipeTransform {
  transform(item: List[], searchText: number): any {
    if (!item) return [];
    if (!searchText) return item;
    return item.filter(it => {
      return it.price <= searchText;
    });
  }
}

//FILTER APPLIED ON BOOK LIST TO SEARCH BOOKS ACCORDING TO THEIR CONDITION(STATE)
@Pipe({
  name: 'filterbycondition'
})
export class FilterbyCondition implements PipeTransform {
  transform(item: List[], searchText: string): any {
    if (!item) return [];
    if (searchText == '--select--' || searchText == 'All') return item;
    console.log(item)
    return item.filter(it => {
      console.log(it.cond)
      return it.cond==searchText;
    });
  }
}