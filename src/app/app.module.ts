import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AccessibilityModule} from "./accessibility/accessibility.module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AccessibilityModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
