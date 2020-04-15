import { Injectable } from '@angular/core';
import { COUNTRIES } from './countries/countries';

@Injectable({
  providedIn: 'root',
})

export class CountryService {
  getCountries() {
     return COUNTRIES;
    }
}
