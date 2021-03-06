import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterTextComponent } from './footer/footerText/footerText.component';
import { FooterTextPandemicComponent } from './footer/footerTextPandemic/footerTextPandemic.component';
import { LastLineComponent } from './footer/lastLine/lastLine.component';
import { ReferencesComponent } from './footer/references/references.component';
import { TimerListComponent } from './body/timer-template/timer-template.component';
import { PandDescComponent } from "./body/pandemic-desc/pandemic-desc.component";
import { DatePipe, CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { AppRoutingModule } from './app-routing.module';
import { DiseaseComponent } from './body/disease-site/disease-site.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimerListComponent,
    DiseaseComponent,
    PandDescComponent,
    FooterTextComponent,
    FooterTextPandemicComponent,
    ReferencesComponent,
    LastLineComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    Ng2SearchPipeModule,
    MatCardModule,
    MatButtonModule,
    CommonModule
  ],
  providers: [DatePipe, HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
