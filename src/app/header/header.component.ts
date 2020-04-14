import { Component, OnInit } from '@angular/core';

// import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './header-scrollLine.component.css']
})

// @NgModule ({
//   imports: [
//     AngularSvgIconModule
//   ]
// })

export class HeaderComponent {

  // searchForCountry: string;

  // constructor(private data: DataService) { }

  // ngOnInit() {
  //   this.data.currentCountry.subscribe(searchForCountry => this.searchForCountry = searchForCountry);
  // }

  searchForCountry;

  // newSearchCountry() {
  //   this.data.changeCountry("Changed");
  // }

  // ngOnInit() {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   this.searchText;

  // }



  // get SearchTextValue() {
  //   return this.searchText;
  // }

}
