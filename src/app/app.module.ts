import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AccessibilityModule} from "./accessibility/accessibility.module";

import { AppRoutingModule } from './app-routing/app-routing.module';
import { DemoModule } from './demo/demo.module';
import { HeaderComponent } from './core/header/header.component';
import { LeftNavComponent } from './core/left-nav/left-nav.component';
import { FormsModule } from '@angular/forms';
import { TreeviewModule } from './accessibility/treeview/treeview.module';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AccessibilityModule,
    AppRoutingModule,
    DemoModule,
    TreeviewModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
