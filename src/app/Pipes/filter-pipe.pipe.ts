import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from '../Modals/IContact';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(contacts: IContact[], searchTerm: string): IContact[] {
    if (!contacts || !searchTerm) {
      return contacts;
    }
    return contacts.filter((contacts) => contacts.name.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1)
  }

}
