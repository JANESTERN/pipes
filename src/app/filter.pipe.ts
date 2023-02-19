import { Pipe, PipeTransform } from '@angular/core';
import { products } from './interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: products[], searchstring: string): products[] {
    let searchitem = []

    if (value.length == 0 || searchstring == "") {
      return value
    }
    for (let products of value) {
      if (products.category.toLocaleLowerCase().includes(searchstring.toLocaleLowerCase())
        ||
        products.name.toLocaleLowerCase().includes(searchstring.toLocaleLowerCase())) {
        searchitem.push(products)

      }

    }
    return searchitem
  }

}
