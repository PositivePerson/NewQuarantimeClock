import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(countries: any, searchForCountry: any): any {
    //check if searchForCountry is undefined
    if(searchForCountry === undefined) return countries;
    // return updated countries array
    return countries.filter(function(country){
      return country.name.toLowerCase().includes(searchForCountry.toLowerCase());
    })
  }

}
