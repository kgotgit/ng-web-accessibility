import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AccessbilityModule} from "../app/accessbility/accessbility.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AccessbilityModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
