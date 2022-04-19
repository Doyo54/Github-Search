import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let valueArr = value.replace(/(\d{4})-(\d{2})-(\d{2}).*/ig,"$1 $2 $3").split(" ");
    let createdAt = new Date(valueArr[0],valueArr[1]-1, valueArr[2]);
    let now = new Date();
    let count = now.getTime() - createdAt.getTime();
    count=count/(1000 * 60 * 60 * 24);
    return Math.floor(count);
  }

}
