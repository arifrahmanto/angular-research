import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first-component/first-component.component';
import { SecondComponent } from './second-component/second-component.component';

const routes: Routes = [
  { path: 'first', component: FirstComponent, outlet: 'first' },
  { path: 'second', component: SecondComponent, outlet: 'second' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
