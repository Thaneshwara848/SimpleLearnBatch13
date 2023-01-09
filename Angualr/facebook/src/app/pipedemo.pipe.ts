import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipedemo'
})
export class PipedemoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
