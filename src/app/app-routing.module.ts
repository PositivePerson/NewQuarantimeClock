import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimerListComponent } from './body/timer-template/timer-template.component';
import { PandDescComponent } from './body/pandemic-desc/pandemic-desc.component';

const routes: Routes = [
  { path: '', component: TimerListComponent },
  { path: 'epidemic', component: PandDescComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
