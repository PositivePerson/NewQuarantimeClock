import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimerListComponent } from './body/timer-template/timer-template.component';
import { PandDescComponent } from './body/pandemic-desc/pandemic-desc.component';
import { DiseaseComponent } from './body/disease-site/disease-site.component';
import { FooterTextComponent } from './footer/footerText/footerText.component';
import { ReferencesComponent } from './footer/references/references.component';
import { FooterTextPandemicComponent } from './footer/footerTextPandemic/footerTextPandemic.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LastLineComponent } from './footer/lastLine/lastLine.component';

const routes: Routes = [
  { path: '', children: [
    // { path: '', outlet: "forBody", component: TimerListComponent },
    { path: '', outlet: "forHeader", component: HeaderComponent },
    { path: '', outlet: "primary", component: TimerListComponent },
    { path: '', outlet: "forFooter", component: FooterTextComponent },
    { path: '', outlet: "forReferences", component: ReferencesComponent },
    { path: '', outlet: "forLastLine", component: LastLineComponent }
  ] },

  { path: 'disease', children: [
    // { path: '', outlet: "forBody", component: TimerListComponent },
    { path: '', outlet: "forHeader", component: HeaderComponent },
    { path: '', outlet: "primary", component: DiseaseComponent },
    { path: '', outlet: "forFooter", component: FooterTextComponent },
    { path: '', outlet: "forLastLine", component: LastLineComponent }
  ] },

  { path: 'pandemic', children: [
    { path: '', outlet: "forHeader", component: HeaderComponent },
    { path: '', outlet: "primary", component: PandDescComponent },
    { path: '', outlet: "forFooter", component: FooterTextPandemicComponent },
    { path: '', outlet: "forLastLine", component: LastLineComponent }
  ] }
  // { path: 'disease', children: [
  //   { path: 'disease', component: DiseaseComponent },
  //   { path: 'disease', outlet: "forFooter", component: FooterTextComponent }
  // ] },
  // { path: 'pandemic', component: AppComponent, children: [
  //   { path: 'pandemic', component: PandDescComponent },
  //   { path: 'pandemic', outlet: "forFooter", component: FooterTextPandemicComponent }
  // ] }



  // { path: '', component: TimerListComponent },
  // { path: 'pandemic', component: PandDescComponent },
  // { path: 'disease', component: DiseaseComponent },

  // { path: '', outlet: "forFooter", component: FooterTextComponent },
  // // { path: 'pandemic', outlet: "forFooter", component: DiseaseComponent },
  // { path: 'disease', outlet: "forFooter", component: FooterTextPandemicComponent },

  // { path: '', outlet: "forReferences", component: ReferencesComponent }
  // ,
  // { path: 'pandemic', outlet: "forReferences", component: DiseaseComponent },
  // { path: 'disease', outlet: "forReferences", component: DiseaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
