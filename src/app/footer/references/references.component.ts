import { Component } from '@angular/core';

import { Country } from '../../countries/country-template';
import { CountryService } from 'src/app/country.service';

@Component({
  selector: 'app-footer-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})

export class ReferencesComponent {

  countries: Country[];

  constructor( countryService: CountryService ) {
    this.countries = countryService.getCountries();
  }

}
