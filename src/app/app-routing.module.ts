import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimerListComponent } from './body/timer-template/timer-template.component';
import { PandDescComponent } from './body/pandemic-desc/pandemic-desc.component';
import { DiseaseComponent } from './body/disease-site/disease-site.component';
import { FooterTextComponent } from './footer/footerText/footerText.component';
import { ReferencesComponent } from './footer/references/references.component';

const routes: Routes = [
  { path: '', component: TimerListComponent },
  { path: 'pandemic', component: PandDescComponent },
  { path: 'disease', component: DiseaseComponent },

  { path: '', outlet: "forFooter", component: FooterTextComponent },

  // { path: 'pandemic', outlet: "forFooter", component: DiseaseComponent },
  // { path: 'disease', outlet: "forFooter", component: DiseaseComponent },

  { path: '', outlet: "forReferences", component: ReferencesComponent }
  // ,
  // { path: 'pandemic', outlet: "forReferences", component: DiseaseComponent },
  // { path: 'disease', outlet: "forReferences", component: DiseaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
