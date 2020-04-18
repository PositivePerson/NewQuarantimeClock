import { Component } from '@angular/core';

import { Country } from '../../countries/country-template';
import { CountryService } from 'src/app/country.service';

declare var changeHeight: any;

@Component({
  selector: 'app-footer-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})



export class ReferencesComponent {

  countries: Country[];

  countriesAmount: number;

  // element.style.getPropertyValue("--countriesAmount");

  constructor( countryService: CountryService ) {

    this.countries = countryService.getCountries();

    this.countriesAmount = this.countries.length;

    this.setHeight(this.countriesAmount);

  }


  setHeight(countriesAmount: number) {
    new changeHeight(countriesAmount)
  }



}
