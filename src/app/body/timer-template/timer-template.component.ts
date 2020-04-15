import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

import { HeaderComponent } from '../../header/header.component';

import { Country } from '../../countries/country-template';
import { CountryService } from '../../country.service';

@Component({
  selector: 'app-timers-list',
  templateUrl: './timer-template.component.html',
  styleUrls: ['./timer-template.component.css']
})

// export class TimerListComponent {}
export class TimerListComponent implements OnInit{

  // private searchText: String;
  // this.searchText = HeaderComponent.SearchTextValue();

  @Input() searchText: string;

  date: any;

  // countries = [
  //     { name: 'Italy', startDate: '2020-01-31T15:30:00+02:00', endDate: '2020-05-04T01:00:00+02:00', leftPast: { days: '', hours: '', minutes: '', seconds: '' }, leftFuture: { days: '', hours: '', minutes: '', seconds: '' } },
  //     { name: 'France', startDate: '2020-01-24T14:28:00+02:00', endDate: '2020-05-04T01:00:00+02:00', leftPast: { days: '', hours: '', minutes: '', seconds: '' }, leftFuture: { days: '', hours: '', minutes: '', seconds: '' } },
  //     { name: 'Poland', startDate: '2020-03-04T08:00:00+02:00', endDate: '2020-05-04T01:00:00+02:00', leftPast: { days: '', hours: '', minutes: '', seconds: '' }, leftFuture: { days: '', hours: '', minutes: '', seconds: '' } },
  //     { name: 'China', startDate: '2019-12-17T15:30:00+02:00', endDate: '2020-05-04T01:00:00+02:00', leftPast: { days: '', hours: '', minutes: '', seconds: '' }, leftFuture: { days: '', hours: '', minutes: '', seconds: '' } }
  //   ]

  // constructor(private searchTextValue: HeaderComponent) { }
  countries: Country[];

  constructor( countryService: CountryService ) {
    this.countries = countryService.getCountries();
  }


  searchForCountry;

  ngOnInit() {

    // this.data.currentCountry.subscribe(searchForCountry => this.searchForCountry = searchForCountry);

     setInterval(() => {
          this.date = moment().format();

          this.countries.forEach((country) => {
            var t = moment(this.date).diff(moment(country.startDate));
            // country.leftPast.hours = moment(this.date).diff(moment(country.startDate), 'hours');
            // country.leftPast.minutes = moment(this.date).diff(moment(country.startDate), 'minutes');
            // country.leftPast.seconds = moment(this.date).diff(moment(country.startDate), 'seconds');
            var seconds = Math.floor((t / 1000) % 60);
            var minutes = Math.floor((t / 1000 / 60) % 60);
            var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            var days = Math.floor(t / (1000 * 60 * 60 * 24));

            country.leftPast.seconds = seconds < 10 ? '0' + seconds : seconds.toString();
            country.leftPast.minutes = minutes < 10 ? '0' + minutes : minutes.toString();
            country.leftPast.hours = hours < 10 ? '0' + hours : hours.toString();
            country.leftPast.days = days < 10 ? '0' + days : days.toString();

            t = moment(country.endDate).diff(moment(this.date));

            seconds = Math.floor((t / 1000) % 60);
            minutes = Math.floor((t / 1000 / 60) % 60);
            hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            days = Math.floor(t / (1000 * 60 * 60 * 24));

            country.leftFuture.seconds = seconds < 10 ? '0' + seconds : seconds.toString();
            country.leftFuture.minutes = minutes < 10 ? '0' + minutes : minutes.toString();
            country.leftFuture.hours = hours < 10 ? '0' + hours : hours.toString();
            country.leftFuture.days = days < 10 ? '0' + days : days.toString();

          })

         }, 1000);
  }

}
  // country = [
  //   { title: 'First Post', content: 'This is the first post\'s content'},
  //   { title: 'Second Post', content: 'This is the second post\'s content'},
  //   { title: 'Third Post', content: 'This is the third post\'s content'}
  // ]

  // posts: Post [] = [];
  // private postsSub: Subscription;

  // constructor(public postsService: PostsService) { }
