import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyComponent } from './mycomponent/mycomponent.component';
import { YourComponent } from './your/your.component';

const myRoutes: Routes = [
  { path: 'me', component: MyComponent, outlet: 'first' },
  { path: 'you', component: YourComponent, outlet: 'second' },
];

export const myRouters = RouterModule.forChild(myRoutes);
