import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first-component/first-component.component';
import { SecondComponent } from './second-component/second-component.component';
import { HomeComponent } from './home/home.component';
import { MyRouterOutletComponent } from './my-router-outlet/my-router-outlet.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'first', component: FirstComponent, outlet: 'first' },
  { path: 'second', component: SecondComponent, outlet: 'second' },
  { path: 'mymodule', loadChildren: 'app/mymodule/mymodule.module#MyModule' }
];

export const mainRouter = RouterModule.forRoot(routes);
