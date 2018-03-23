import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number, fixed: number = 2): String {
    return `￥${value.toFixed(fixed)}`;
  }

}
