import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { mainRouter } from './app-routing.module';
import { FirstComponent } from './first-component/first-component.component';
import { SecondComponent } from './second-component/second-component.component';
import { MyRouterOutletComponent } from './my-router-outlet/my-router-outlet.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    MyRouterOutletComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    mainRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
