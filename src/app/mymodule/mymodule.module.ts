import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent } from './mycomponent/mycomponent.component';
import { YourComponent } from './your/your.component';
import { myRouters } from './mymodule-routing.module';

@NgModule({
  imports: [
    CommonModule,
    myRouters
  ],
  declarations: [MyComponent, YourComponent]
})
export class MyModule { }
