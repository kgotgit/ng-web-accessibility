import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AccessbilityModule} from "../app/accessbility/accessbility.module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AccessbilityModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
