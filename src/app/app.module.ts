import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'ng2-materialize';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { routes } from './app.router';
import { AboutComponent } from './about/about.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule.forRoot(),
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
