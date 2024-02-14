import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authors',
})
export class AuthorsPipe implements PipeTransform {
  transform(authors: string[]): string {
    if (authors) {
      return (
        authors[0] + (authors.length > 1 ? ` e mais ${authors.length - 1}` : '')
      );
    }
    return '';
  }
}
