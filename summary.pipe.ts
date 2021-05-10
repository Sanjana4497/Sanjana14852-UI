import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {


  transform(value: string, length:number): string {
    var limit=(length)?length:10
    return value.substring(0,limit)+'...';
  }
}
