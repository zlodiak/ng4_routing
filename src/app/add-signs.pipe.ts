import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addSigns'
})
export class AddSignsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return args + value + args;
  }

}
