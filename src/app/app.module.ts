import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AccessibilityModule} from "./accessibility/accessibility.module";
import { DemoComponent } from './demo/demo.component';




@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AccessibilityModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
