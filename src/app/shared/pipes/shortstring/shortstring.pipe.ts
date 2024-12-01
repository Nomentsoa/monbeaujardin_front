import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortstring'
})
export class ShortstringPipe implements PipeTransform {

  transform(value: string, max = 50): string {
    if(value.length <= max){
      return value;
    }
  
    return value.substring(0, max) + "...";
}

}
